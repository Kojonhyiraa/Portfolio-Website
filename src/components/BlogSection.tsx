import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable Middleware with Jakarta EE",
    excerpt: "How I architected Fundgate's service availability layer for high-throughput payment APIs...",
    date: "Coming Soon",
    tags: ["Jakarta EE", "Architecture"],
    status: "draft",
  },
  {
    title: "Database Schema Design Patterns for Banking Systems",
    excerpt: "Lessons learned from building Apex Bank — strict OOP, audit logging, and transaction safety...",
    date: "Coming Soon",
    tags: ["Database", "Java"],
    status: "draft",
  },
  {
    title: "From KNUST to Production: A Backend Engineer's Journey",
    excerpt: "Reflecting on my path from Computer Engineering studies to enterprise software development...",
    date: "Coming Soon",
    tags: ["Career", "Engineering"],
    status: "draft",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.02]" viewBox="0 0 256 256" fill="none">
        <rect x="20" y="20" width="216" height="216" rx="8" stroke="hsl(180,100%,50%)" strokeWidth="0.5" />
        <line x1="20" y1="80" x2="236" y2="80" stroke="hsl(180,100%,50%)" strokeWidth="0.3" />
        <line x1="20" y1="140" x2="236" y2="140" stroke="hsl(180,100%,50%)" strokeWidth="0.3" />
        <line x1="20" y1="200" x2="236" y2="200" stroke="hsl(180,100%,50%)" strokeWidth="0.3" />
      </svg>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg sm:text-xl font-bold mb-2">
            <span className="text-terminal-comment">// </span>
            <span className="text-terminal-magenta">blog</span>
            <span className="text-foreground">()</span>
          </h2>
          <p className="text-terminal-comment text-xs mb-8 flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-50">
              <rect x="1" y="1" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1" />
              <line x1="3" y1="4" x2="9" y2="4" stroke="currentColor" strokeWidth="0.8" />
              <line x1="3" y1="6" x2="7" y2="6" stroke="currentColor" strokeWidth="0.8" />
            </svg>
            cat ~/blog/posts.md — drafts loading...
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-lg overflow-hidden hover:border-terminal-magenta/30 hover:shadow-[0_8px_30px_-10px_hsl(300,80%,60%,0.08)] transition-all duration-400 group flex flex-col"
            >
              {/* Status bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-background/50 border-b border-border">
                <div className="flex items-center gap-1.5 text-[10px] text-terminal-comment">
                  <span className="w-1.5 h-1.5 rounded-full bg-terminal-amber/60" />
                  {post.status}
                </div>
                <div className="flex items-center gap-1 text-[10px] text-terminal-comment">
                  <Calendar size={9} className="opacity-50" />
                  {post.date}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <h3 className="text-terminal-cyan text-sm font-semibold mb-2 leading-snug group-hover:text-terminal-magenta transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground/60 text-xs leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] px-2 py-0.5 rounded-full border border-terminal-magenta/20 text-terminal-magenta/70 bg-terminal-magenta/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight size={12} className="text-terminal-comment opacity-0 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
          className="text-center text-terminal-comment text-[10px] mt-8"
        >
          /* More posts coming soon — backend integration in progress */
        </motion.p>
      </div>
    </section>
  );
};

export default BlogSection;
