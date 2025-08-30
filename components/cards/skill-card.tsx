import Link from "next/link";
import { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  icon: IconType;
  url: string;
  color: string;
}

export default function SkillCard({
  name,
  icon: Icon,
  url,
  color,
}: SkillCardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={` bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 ${color}`}
      aria-label={`Learn more about ${name}`}
    >
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <Icon className="size-12 transition-transform duration-300 group-hover:scale-110" />
        <h3 className="text-lg font-semibold transition-colors duration-300">
          {name}
        </h3>
      </div>
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
    </Link>
  );
}
