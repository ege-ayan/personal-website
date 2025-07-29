import Image from "next/image";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiFlutter,
  SiOpenjdk,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiDigitalocean,
  SiLinux,
  SiRaspberrypi,
  SiPython,
  SiDjango,
  SiGo,
  SiElectron,
  SiSqlite,
  SiFastify,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";

const techStack = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    url: "https://reactjs.org",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    url: "https://nextjs.org",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    url: "https://typescriptlang.org",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    url: "https://nodejs.org",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#000000",
    url: "https://expressjs.com",
  },
  {
    name: "Fastify",
    icon: SiFastify,
    color: "#000000",
    url: "https://fastify.dev",
  },
  {
    name: "NestJS",
    icon: SiNestjs,
    color: "#E0234E",
    url: "https://nestjs.com",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    url: "https://python.org",
  },
  {
    name: "Django",
    icon: SiDjango,
    color: "#092E20",
    url: "https://djangoproject.com",
  },
  {
    name: "Go",
    icon: SiGo,
    color: "#00ADD8",
    url: "https://golang.org",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "#02569B",
    url: "https://flutter.dev",
  },
  {
    name: "Java",
    icon: SiOpenjdk,
    color: "#ED8B00",
    url: "https://www.oracle.com/java",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "#6DB33F",
    url: "https://spring.io/projects/spring-boot",
  },
  {
    name: "Electron",
    icon: SiElectron,
    color: "#47848F",
    url: "https://electronjs.org",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    url: "https://tailwindcss.com",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    url: "https://mongodb.com",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    url: "https://postgresql.org",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    url: "https://mysql.com",
  },
  {
    name: "SQLite",
    icon: SiSqlite,
    color: "#003B57",
    url: "https://sqlite.org",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    url: "https://docker.com",
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    color: "#326CE5",
    url: "https://kubernetes.io",
  },
  {
    name: "DigitalOcean",
    icon: SiDigitalocean,
    color: "#0080FF",
    url: "https://digitalocean.com",
  },
  {
    name: "Linux",
    icon: SiLinux,
    color: "#FCC624",
    url: "https://kernel.org",
  },
  {
    name: "Raspberry Pi",
    icon: SiRaspberrypi,
    color: "#A22846",
    url: "https://raspberrypi.org",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mb-16">
        <div className="relative mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
          <Image
            src="/images/ege-ayan.jpg"
            alt="Ege Ayan - Full Stack Developer"
            width={346}
            height={346}
            className="relative size-64 rounded-full object-cover select-none shadow-2xl transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>

        <header>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Ege Ayan
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 font-medium mb-6">
            Software Engineer | Full Stack Web Developer
          </h2>
        </header>

        <div className="max-w-4xl text-lg md:text-xl text-gray-300 leading-relaxed space-y-4">
          <p className="hover:text-white transition-colors duration-300">
            I build stuff. Web apps, mobile apps, backend systems - whatever
            needs to get done.
          </p>

          <p className="hover:text-white transition-colors duration-300">
            I&apos;m currently working on some cool, I mean really cool,
            projects and picking up new tech along the way. If you&apos;ve got
            something interesting and want to work with someone who gets shit
            done, let&apos;s talk.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          Stuff I Work With:
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techStack.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <Link
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gray-900 rounded-xl p-4 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105 hover:bg-gray-800"
              >
                <div className="flex flex-col items-center space-y-2">
                  <IconComponent
                    className="text-3xl md:text-4xl transition-colors duration-300"
                    style={{ color: tech.color }}
                  />
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
                    {tech.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          Where I&apos;ve Been Around
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-colors duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">INFINIA</h3>
                <p className="text-gray-400">Software Engineer</p>
              </div>
              <span className="text-gray-500 text-sm mt-2 md:mt-0">
                2024 - Current
              </span>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-colors duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Bilkent University
                </h3>
                <p className="text-gray-400">Computer Engineering</p>
              </div>
              <span className="text-gray-500 text-sm mt-2 md:mt-0">
                2020 - 2024
              </span>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-colors duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">Microsoft</h3>
                <p className="text-gray-400">Web Development Intern</p>
              </div>
              <span className="text-gray-500 text-sm mt-2 md:mt-0">2023</span>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-colors duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">Moralabs</h3>
                <p className="text-gray-400">Android Development Intern</p>
              </div>
              <span className="text-gray-500 text-sm mt-2 md:mt-0">2022</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          &ldquo;Can you list 3 interesting facts about yourself?&rdquo;
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-colors duration-300">
            <div className="flex items-start space-x-4">
              <span className="text-2xl font-bold text-gray-500">1)</span>
              <p className="text-lg text-gray-300 hover:text-white transition-colors duration-300">
                I&apos;m a 3rd degree black belt taekwondo fighter.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-colors duration-300">
            <div className="flex items-start space-x-4">
              <span className="text-2xl font-bold text-gray-500">2)</span>
              <p className="text-lg text-gray-300 hover:text-white transition-colors duration-300">
                I&apos;m into WW2 history.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-colors duration-300">
            <div className="flex items-start space-x-4">
              <span className="text-2xl font-bold text-gray-500">3)</span>
              <p className="text-lg text-gray-300 hover:text-white transition-colors duration-300">
                I absolutely hate that question! But here we are anyway...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
          Get In Touch
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Got a project? Want to work together? Or just want to talk tech?
          <br />
          <span className="text-gray-400">Hit me up.</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="https://github.com/ege-ayan"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-lg transition-all duration-300 border border-gray-700 hover:border-gray-500"
          >
            <SiGithub className="text-xl" />
            <span className="font-medium">GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/ege-ayan"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-lg transition-all duration-300 border border-gray-700 hover:border-gray-500"
          >
            <SiLinkedin className="text-xl" />
            <span className="font-medium">LinkedIn</span>
          </a>

          <a
            href="mailto:ayanege2001@gmail.com"
            className="group flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-lg transition-all duration-300 border border-gray-700 hover:border-gray-500"
          >
            <span className="text-xl">📧</span>
            <span className="font-medium">Email</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500">
        <p className="text-sm">© 2025 Ege Ayan</p>
      </footer>
    </main>
  );
}
