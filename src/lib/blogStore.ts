export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  status: "published" | "draft";
  slug: string;
}

const STORAGE_KEY = "kmd-blog-posts";

const defaultPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Middleware with Jakarta EE",
    excerpt: "How I architected Fundgate's service availability layer for high-throughput payment APIs...",
    content: `# Building Scalable Middleware with Jakarta EE

When building payment infrastructure, middleware isn't just a "nice-to-have" — it's the backbone that determines whether your system can handle 10 requests or 10,000.

## The Problem

Fundgate needed a service availability layer that could:
- Route requests intelligently across multiple payment providers
- Throttle traffic to prevent downstream overload
- Provide real-time availability checks without adding latency

## The Architecture

I chose Jakarta EE for its enterprise-grade stability and built the middleware as a set of interceptors and filters:

\`\`\`java
@Interceptor
@ServiceAvailability
public class AvailabilityInterceptor {
    @Inject
    private ServiceRegistry registry;
    
    @AroundInvoke
    public Object checkAvailability(InvocationContext ctx) throws Exception {
        ServiceEndpoint endpoint = registry.resolve(ctx.getTarget());
        if (!endpoint.isAvailable()) {
            throw new ServiceUnavailableException(endpoint.getName());
        }
        return ctx.proceed();
    }
}
\`\`\`

## Key Takeaways

1. **Design for failure first** — Every external call should have a fallback
2. **Database schema matters** — A well-indexed availability table saves milliseconds per request
3. **Monitor everything** — If you can't measure it, you can't optimize it

The result? A middleware layer that handles thousands of concurrent payment routing decisions with sub-50ms overhead.`,
    date: "2024-12-15",
    tags: ["Jakarta EE", "Architecture", "Middleware"],
    status: "published",
    slug: "building-scalable-middleware-jakarta-ee",
  },
  {
    id: "2",
    title: "Database Schema Design Patterns for Banking Systems",
    excerpt: "Lessons learned from building Apex Bank — strict OOP, audit logging, and transaction safety...",
    content: `# Database Schema Design Patterns for Banking Systems

Banking software demands precision. A single misplaced decimal or unlogged transaction can have serious consequences. Here's what I learned building Apex Bank.

## The Non-Negotiables

### 1. Immutable Transaction Records
Never update a transaction row. Ever. Instead, use an append-only pattern:

\`\`\`sql
CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id UUID NOT NULL REFERENCES accounts(id),
    amount DECIMAL(19,4) NOT NULL,
    type VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    -- No updated_at column — transactions are immutable
);
\`\`\`

### 2. Comprehensive Audit Logging
Every state change gets logged with who, what, when, and why:

\`\`\`java
@Entity
@Table(name = "audit_logs")
public class AuditLog {
    @Id @GeneratedValue
    private UUID id;
    private String entityType;
    private String entityId;
    private String action;
    private String previousState;
    private String newState;
    private String performedBy;
    private Instant performedAt;
}
\`\`\`

### 3. Optimistic Locking for Balances
Prevent race conditions on balance updates:

\`\`\`java
@Version
private Long version;
\`\`\`

## The Result

A banking system where every cent is accounted for, every action is traceable, and concurrent operations never corrupt data.`,
    date: "2024-11-20",
    tags: ["Database", "Java", "Banking"],
    status: "published",
    slug: "database-schema-patterns-banking",
  },
  {
    id: "3",
    title: "From KNUST to Production: A Backend Engineer's Journey",
    excerpt: "Reflecting on my path from Computer Engineering studies to enterprise software development...",
    content: `# From KNUST to Production: A Backend Engineer's Journey

The path from university to shipping production code isn't linear — and that's okay.

## Where It Started

At KNUST's Computer Engineering department, I fell in love with the *why* behind systems. Not just writing code that works, but understanding:
- Why certain data structures outperform others
- Why distributed systems fail in predictable ways  
- Why good architecture saves teams months of refactoring

## The Gap Between Academia and Industry

University teaches you to think. Industry teaches you to ship. The bridge? **Side projects with real constraints.**

I didn't wait for an internship to start building. Fundgate and Apex Bank were born from asking: "What would a real payment system need?" and "How do banks actually handle money?"

## Lessons That Stuck

1. **Read source code** — The best documentation is often the codebase itself
2. **Fail fast, log everything** — You can't debug what you can't see
3. **OOP isn't optional** — In enterprise Java, clean abstractions save careers
4. **Community matters** — From church media tech to dev meetups, surrounding yourself with builders accelerates growth

## What's Next

Backend engineering is evolving. Cloud-native patterns, event-driven architectures, and AI-assisted tooling are reshaping how we build. I'm here for all of it.

The journey continues — one commit at a time.`,
    date: "2024-10-05",
    tags: ["Career", "Engineering", "Growth"],
    status: "published",
    slug: "knust-to-production-journey",
  },
];

export function getPosts(): BlogPost[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPosts));
    return defaultPosts;
  }
  return JSON.parse(stored);
}

export function getPublishedPosts(): BlogPost[] {
  return getPosts().filter((p) => p.status === "published");
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function savePost(post: BlogPost): void {
  const posts = getPosts();
  const idx = posts.findIndex((p) => p.id === post.id);
  if (idx >= 0) {
    posts[idx] = post;
  } else {
    posts.push(post);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function deletePost(id: string): void {
  const posts = getPosts().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
