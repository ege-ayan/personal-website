import Image from "next/image";
import {
  SiNextdotjs,
  SiNestjs,
  SiReact,
  SiExpress,
  SiElectron,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import Link from "next/link";
const skills = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    url: "https://nextjs.org",
    color: "hover:text-black hover:bg-white",
  },
  {
    name: "Nest.js",
    icon: SiNestjs,
    url: "https://nestjs.com",
    color: "hover:text-red-600 hover:bg-white",
  },
  {
    name: "React.js",
    icon: SiReact,
    url: "https://reactjs.org",
    color: "hover:text-blue-400 hover:bg-white",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    url: "https://expressjs.com",
    color: "hover:text-gray-600 hover:bg-white",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    url: "https://typescriptlang.org",
    color: "hover:text-blue-600 hover:bg-white",
  },
  {
    name: "Electron.js",
    icon: SiElectron,
    url: "https://electronjs.org",
    color: "hover:text-blue-600 hover:bg-white",
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    url: "https://tailwindcss.com",
    color: "hover:text-teal-400 hover:bg-white",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    url: "https://postgresql.org",
    color: "hover:text-blue-700 hover:bg-white",
  },

  {
    name: "MongoDB",
    icon: SiMongodb,
    url: "https://mongodb.com",
    color: "hover:text-green-600 hover:bg-white",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col py-12 items-center gap-10 justify-center">
      <header className="flex flex-col  items-center justify-center text-center">
        <Image
          src="/images/ege-ayan.jpg"
          alt="Ege Ayan"
          width={346}
          height={346}
          priority
          quality={100}
          className="size-60 select-none object-cover rounded-full shadow-lg"
        />

        <h1 className="text-3xl mt-5 font-bold">Ege Ayan</h1>
        <p className="text-lg text-gray-300">
          Software Engineer | Full Stack Developer
        </p>
      </header>

      <section aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-2xl font-semibold mb-4">
          Philosophy
        </h2>
        <div className="max-w-4xl">
          <p className="text-gray-300 leading-relaxed  mb-6 text-lg">
            I believe modern technology isn't about being trendy—it's about
            making new things possible. The latest tools help me build faster
            and better, and that's what excites me: turning an idea into
            something real.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Still, at the end of the day, what really matters to me is impact.
            Tech means nothing if it doesn't touch real life. That's why I focus
            on projects that people can actually use, things that make their
            routines easier, smoother, or just a little better. For me, it's
            simple:{" "}
            <span className="font-bold">
              modern tech + real problems = work that truly matters.
            </span>
          </p>
        </div>
      </section>

      <section
        aria-labelledby="experience-heading"
        className="w-full max-w-4xl"
      >
        <h2
          id="experience-heading"
          className="text-2xl font-semibold mb-3 text-center sm:text-left"
        >
          Experience
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          <article className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">INFINIA</h3>
                <p className="text-lg text-gray-300 font-medium">
                  Full Stack Developer
                </p>
              </div>
              <time
                className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full mt-2 sm:mt-0"
                dateTime="2024"
              >
                2024 - Present
              </time>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading full-stack development initiatives, building scalable web
              applications with modern technologies.
            </p>
          </article>

          <article className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Microsoft</h3>
                <p className="text-lg text-gray-300 font-medium">
                  Web Development Intern
                </p>
              </div>
              <time
                className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full mt-2 sm:mt-0"
                dateTime="2023"
              >
                2023
              </time>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Developed web applications and gained hands-on experience with
              Microsoft's development tools and practices.
            </p>
          </article>

          <article className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Moralabs</h3>
                <p className="text-lg text-gray-300 font-medium">
                  Android Development Intern
                </p>
              </div>
              <time
                className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full mt-2 sm:mt-0"
                dateTime="2022"
              >
                2022
              </time>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Built mobile applications for Android platform, learning native
              development and mobile UI/UX principles.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="education-heading" className="w-full max-w-4xl">
        <h2
          id="education-heading"
          className="text-2xl font-semibold mb-6 text-center sm:text-left"
        >
          Education
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          <article className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Bilkent University
                </h3>
                <p className="text-lg text-gray-300 font-medium">
                  Bachelor's Degree - Computer Engineering
                </p>
              </div>
              <time
                className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full mt-2 sm:mt-0"
                dateTime="2020"
              >
                2020 - 2024
              </time>
            </div>
          </article>

          <article className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Middle East Technical University D.F
                </h3>
                <p className="text-lg text-gray-300 font-medium">
                  High School Degree
                </p>
              </div>
              <time
                className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full mt-2 sm:mt-0"
                dateTime="2015"
              >
                2015 - 2020
              </time>
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="skills-heading" className="w-full max-w-6xl">
        <h2
          id="skills-heading"
          className="text-2xl font-semibold mb-8 text-center"
        >
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Link
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={`group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 ${skill.color}`}
                aria-label={`Learn more about ${skill.name}`}
              >
                <div className="flex flex-col items-center justify-center text-center space-y-4">
                  <Icon className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-lg font-semibold transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>

                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
