import { useState, useEffect } from "react";
import { getPosts, savePost, deletePost, generateSlug } from "@/lib/blogStore";
import type { BlogPost } from "@/lib/blogStore";
import { Plus, Edit2, Trash2, Save, X, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const emptyPost: Omit<BlogPost, "id"> = {
  title: "",
  excerpt: "",
  content: "",
  date: new Date().toISOString().split("T")[0],
  tags: [],
  status: "draft",
  slug: "",
};

const Admin = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const refresh = () => setPosts(getPosts());

  const startNew = () => {
    setEditing({
      ...emptyPost,
      id: Date.now().toString(),
      date: new Date().toISOString().split("T")[0],
    } as BlogPost);
    setTagInput("");
  };

  const startEdit = (post: BlogPost) => {
    setEditing({ ...post });
    setTagInput(post.tags.join(", "));
  };

  const handleSave = () => {
    if (!editing) return;
    const updated = {
      ...editing,
      slug: editing.slug || generateSlug(editing.title),
      tags: tagInput.split(",").map((t) => t.trim()).filter(Boolean),
    };
    savePost(updated);
    setEditing(null);
    refresh();
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this post?")) return;
    deletePost(id);
    refresh();
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-sm font-bold text-terminal-cyan">// admin_panel</h1>
            <p className="text-[10px] text-terminal-comment">blog management console</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-xs text-terminal-comment hover:text-primary transition-colors">← site</Link>
            <button
              onClick={startNew}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-3 py-1.5 rounded text-xs hover:bg-primary/20 transition-all"
            >
              <Plus size={12} />
              New Post
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Editor */}
        {editing && (
          <div className="bg-card/80 border border-border rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-terminal-amber">
                {editing.id ? "Edit Post" : "New Post"}
              </h2>
              <button onClick={() => setEditing(null)} className="text-terminal-comment hover:text-destructive transition-colors">
                <X size={16} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-[10px] text-terminal-comment block mb-1">Title</label>
                <input
                  value={editing.title}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                  className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="Post title..."
                />
              </div>

              <div>
                <label className="text-[10px] text-terminal-comment block mb-1">Slug</label>
                <input
                  value={editing.slug}
                  onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                  placeholder={generateSlug(editing.title) || "auto-generated-from-title"}
                  className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] text-terminal-comment block mb-1">Excerpt</label>
                <input
                  value={editing.excerpt}
                  onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })}
                  className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="Brief description..."
                />
              </div>

              <div>
                <label className="text-[10px] text-terminal-comment block mb-1">Content (Markdown)</label>
                <textarea
                  value={editing.content}
                  onChange={(e) => setEditing({ ...editing, content: e.target.value })}
                  rows={15}
                  className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground focus:border-primary/50 focus:outline-none transition-colors font-mono resize-y"
                  placeholder="Write your post content in markdown..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-terminal-comment block mb-1">Tags (comma separated)</label>
                  <input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="Java, Architecture..."
                  />
                </div>
                <div>
                  <label className="text-[10px] text-terminal-comment block mb-1">Date</label>
                  <input
                    type="date"
                    value={editing.date}
                    onChange={(e) => setEditing({ ...editing, date: e.target.value })}
                    className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-terminal-comment block mb-1">Status</label>
                <select
                  value={editing.status}
                  onChange={(e) => setEditing({ ...editing, status: e.target.value as "published" | "draft" })}
                  className="bg-background border border-border rounded px-3 py-2 text-sm text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 bg-terminal-green/10 border border-terminal-green/30 text-terminal-green px-4 py-2 rounded text-xs hover:bg-terminal-green/20 transition-all"
                >
                  <Save size={12} />
                  Save Post
                </button>
                <button
                  onClick={() => setEditing(null)}
                  className="text-xs text-terminal-comment hover:text-foreground transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Posts list */}
        <div className="space-y-3">
          <h2 className="text-xs text-terminal-comment mb-4">ls -la ~/blog/posts/ — {posts.length} entries</h2>
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-card/80 border border-border rounded-lg p-4 flex items-start justify-between gap-4 hover:border-primary/20 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${post.status === "published" ? "bg-terminal-green" : "bg-terminal-amber"}`} />
                  <span className="text-[10px] text-terminal-comment">{post.status}</span>
                  <span className="text-[10px] text-terminal-comment">· {post.date}</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground truncate">{post.title}</h3>
                <p className="text-xs text-foreground/50 truncate">{post.excerpt}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {post.status === "published" && (
                  <Link
                    to={`/blog/${post.slug}`}
                    className="p-1.5 text-terminal-comment hover:text-primary transition-colors"
                    title="View"
                  >
                    <Eye size={14} />
                  </Link>
                )}
                <button
                  onClick={() => startEdit(post)}
                  className="p-1.5 text-terminal-comment hover:text-terminal-amber transition-colors"
                  title="Edit"
                >
                  <Edit2 size={14} />
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="p-1.5 text-terminal-comment hover:text-destructive transition-colors"
                  title="Delete"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
