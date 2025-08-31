import type { Metadata } from "next";
import { blogs } from "@/contents/blogs";
import BlogCard from "@/components/cards/blog-card";

export const metadata: Metadata = {
  title: "Blog | Ege Ayan - Software Development & AI Insights",
  description:
    "Explore in-depth articles on software development, computer science, artificial intelligence, and modern web technologies. Get insights from a full-stack developer sharing practical knowledge and industry trends.",

  keywords: [
    "Software Development Blog",
    "Computer Science Articles",
    "Full Stack Development",
    "Web Technologies",
    "Programming Tutorials",
    "Tech Insights",
    "Development Best Practices",
    "React Development",
    "Next.js Tutorials",
    "TypeScript Guide",
    "Node.js Development",
    "System Design",
    "Algorithm Analysis",
    "Software Architecture",
    "Software Engineering",
  ],

  category: "Blog",
};

export default function Blogs() {
  return (
    <main className="min-h-screen py-8  sm:py-16 sm:px-6 lg:px-12 2xl:px-20">
      <section className="text-center mb-8 sm:mb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl  font-bold mb-6  ">
            Blogs & Technical Insights
          </h1>
        </div>
      </section>

      <section aria-labelledby="blog-posts-heading">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mb-12 max-w-7xl mx-auto">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.title}
              title={blog.title}
              description={blog.description}
              readTime={blog.readTime}
              publishedAt={blog.publishedAt}
              tags={blog.tags}
              image={blog.image}
              slug={blog.href}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
