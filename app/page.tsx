import Image from "next/image";
import { skills } from "@/contents/skills";
import SkillCard from "@/components/cards/skill-card";

export default function Home() {
  return (
    <main className="flex flex-col py-10 items-center gap-12 justify-center">
      <header className="flex flex-col  items-center justify-center text-center">
        <Image
          src="/images/ege-ayan.jpg"
          alt="Ege Ayan"
          width={346}
          height={346}
          priority
          quality={100}
          className="size-60 contrast-120 select-none object-cover rounded-full shadow-lg"
        />

        <h1 className="text-3xl mt-5 font-bold">Ege Ayan</h1>
        <p className="text-lg mt-1 text-gray-300">
          Software Engineer | Full Stack Developer
        </p>
      </header>

      <section aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-2xl font-semibold mb-4">
          About Me
        </h2>
        <div className="max-w-6xl">
          <p className="text-gray-300 leading-relaxed text-lg">
            I&apos;m a software engineer and full stack web developer from
            Turkey with a passion for building performant, user-friendly, and
            scalable web applications. I&apos;ve graduated from Bilkent
            University, Department of Computer Engineering. Currently, working
            as a Software Engineer at INFINIA. I&apos;m also third degree black
            belt taekwondo athlete.
          </p>
        </div>
      </section>

      <section aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-2xl font-semibold mb-4">
          My Philosophy
        </h2>
        <div className="max-w-6xl">
          <p className="text-gray-300 leading-relaxed  mb-6 text-lg">
            I believe that technology should always move forward—and so should
            developers. That&apos;s why I focus on modern tools and frameworks,
            not just for the sake of keeping up, but because they open the door
            to building smarter, faster, and more impactful solutions.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            For me, real growth comes from real projects. I like getting my
            hands dirty with challenges that exist outside of theory things that
            people actually use. Whether it&apos;s improving performance,
            designing user-friendly interfaces, or tackling complex problems
            head-on, my goal is always the same: to create work that makes a
            difference in everyday life.
          </p>
        </div>
      </section>

      <section aria-labelledby="skills-heading" className="w-full max-w-6xl">
        <h2 id="skills-heading" className="text-2xl font-semibold mb-8 ">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              url={skill.url}
              color={skill.color}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
