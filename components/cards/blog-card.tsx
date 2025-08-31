import Image from "next/image";
import Link from "next/link";
import { FiClock, FiCalendar, FiTag } from "react-icons/fi";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  description: string;
  readTime: string;
  publishedAt: string;
  tags: string[];
  image: string;
  slug: string;
}

export default function BlogCard({
  title,
  description,
  readTime,
  publishedAt,
  tags,
  image,
  slug,
}: BlogCardProps) {
  return (
    <Link href={slug} className="block group">
      <article className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10  cursor-pointer h-full">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-600 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/20">
            <FiClock className="w-3 h-3" />
            <span>{readTime}</span>
          </div>
        </div>

        <div className="p-3">
          <h2 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-gray-100 transition-colors duration-300">
            {title}
          </h2>

          <p className="text-gray-300 text-xs leading-relaxed mb-3 line-clamp-2">
            {description}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {tags.map((tag, index) => (
                <span
                  key={tag + index}
                  className="inline-flex items-center gap-1 text-xs font-medium text-gray-300 bg-white/5 px-2 py-0.5 rounded-full border border-white/10"
                >
                  <FiTag className="w-2.5 h-2.5" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <FiCalendar className="w-3 h-3" />
            <span>{formatDate(publishedAt)}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
