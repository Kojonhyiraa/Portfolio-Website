import { useParams, Link } from "react-router-dom";
import { getPostBySlug } from "@/lib/blogStore";
import TerminalNav from "@/components/TerminalNav";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: post?.title, url });
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-terminal-comment text-sm mb-4">404 — Post not found</p>
          <Link to="/blog" className="text-primary text-sm hover:underline">← Back to blog</Link>
        </div>
      </div>
    );
  }

  // Simple markdown-ish rendering
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("# ")) return <h1 key={i} className="text-2xl font-bold text-foreground mt-8 mb-4">{line.slice(2)}</h1>;
      if (line.startsWith("## ")) return <h2 key={i} className="text-xl font-bold text-terminal-cyan mt-6 mb-3">{line.slice(3)}</h2>;
      if (line.startsWith("### ")) return <h3 key={i} className="text-lg font-semibold text-terminal-amber mt-5 mb-2">{line.slice(4)}</h3>;
      if (line.startsWith("```")) return <div key={i} className="my-1" />;
      if (line.startsWith("- ")) return <li key={i} className="text-foreground/70 text-sm ml-4 list-disc">{line.slice(2)}</li>;
      if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || line.startsWith("4. ")) {
        return <li key={i} className="text-foreground/70 text-sm ml-4 list-decimal">{line.slice(3)}</li>;
      }
      if (line.trim() === "") return <div key={i} className="h-2" />;
      // Check if it looks like code
      if (line.startsWith("  ") || line.startsWith("\t") || line.match(/^(public|private|@|CREATE|import|const|select|insert)/)) {
        return <code key={i} className="block text-terminal-green text-xs font-mono bg-background/50 px-4 py-0.5">{line}</code>;
      }
      // Inline formatting
      const formatted = line
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code class="text-terminal-green text-xs bg-background/50 px-1 py-0.5 rounded">$1</code>');
      return <p key={i} className="text-foreground/70 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: formatted }} />;
    });
  };

  return (
    <div className="min-h-screen bg-background scrollbar-thin scroll-smooth">
      <TerminalNav />
      <div className="pt-20 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          {/* Back + share */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-terminal-comment text-xs hover:text-primary transition-colors">
              <ArrowLeft size={14} />
              cd ~/blog
            </Link>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 text-terminal-comment text-xs hover:text-primary transition-colors border border-border rounded px-3 py-1.5 hover:border-primary/30"
            >
              <Share2 size={12} />
              Share
            </button>
          </div>

          {/* Meta */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-terminal-comment text-xs mb-3">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full border border-terminal-magenta/20 text-terminal-magenta/70 bg-terminal-magenta/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 sm:p-8">
            {renderContent(post.content)}
          </div>
        </article>
      </div>
      <ScrollReveal><FooterSection /></ScrollReveal>
    </div>
  );
};

export default BlogPost;
