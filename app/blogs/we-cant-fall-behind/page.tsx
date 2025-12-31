import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "We Can't Fall Behind: A Call to Action for Junior Developers",
  description:
    "A motivational message for junior developers on New Year's Eve 2025—embrace confusion, work with AI, and take responsibility for driving innovation forward.",
  keywords: [
    "Junior Developers",
    "Motivation",
    "Software Development",
    "AI Era",
    "Innovation",
    "Career Growth",
    "Programming",
    "New Year 2026",
    "Developer Mindset",
    "Technology",
  ],

  openGraph: {
    title: "We Can't Fall Behind: A Call to Action for Junior Developers",
    description:
      "A motivational message for junior developers on New Year's Eve 2025—embrace confusion, work with AI, and take responsibility for driving innovation forward.",
    url: "/blogs/we-cant-fall-behind",
    siteName: "Ege Ayan",
    images: [
      {
        url: "/images/blogs/we-cant-fall-behind.jpg",
        width: 1500,
        height: 1000,
        alt: "We Can't Fall Behind: A Call to Action for Junior Developers",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-12-31T00:00:00.000Z",
    modifiedTime: "2025-12-31T00:00:00.000Z",
    authors: ["Ege Ayan"],
    tags: [
      "Junior Developers",
      "Motivation",
      "Software Development",
      "AI Era",
      "Innovation",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "We Can't Fall Behind: A Call to Action for Junior Developers",
    description:
      "A motivational message for junior developers on New Year's Eve 2025—embrace confusion, work with AI, and take responsibility for driving innovation forward.",
    images: ["/images/blogs/we-cant-fall-behind.jpg"],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "We Can't Fall Behind: A Call to Action for Junior Developers",
    description:
      "A motivational message for junior developers on New Year's Eve 2025—embrace confusion, work with AI, and take responsibility for driving innovation forward.",
    image: ["https://egeayan.dev/images/blogs/we-cant-fall-behind.jpg"],
    datePublished: "2025-12-31T00:00:00.000Z",
    dateModified: "2025-12-31T00:00:00.000Z",
    author: {
      "@type": "Person",
      name: "Ege Ayan",
      url: "https://egeayan.dev",
    },
    publisher: {
      "@type": "Person",
      name: "Ege Ayan",
      url: "https://egeayan.dev",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://egeayan.dev/blogs/we-cant-fall-behind",
    },
    keywords: [
      "Junior Developers",
      "Motivation",
      "Software Development",
      "AI Era",
      "Innovation",
    ],
    articleSection: "Motivation",
    wordCount: "1500",
    timeRequired: "PT6M",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    copyrightHolder: {
      "@type": "Person",
      name: "Ege Ayan",
    },
    license: "https://creativecommons.org/licenses/by/4.0/",
    sameAs: ["https://egeayan.dev/blogs/we-cant-fall-behind"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <article className="mx-auto max-w-5xl flex flex-col items-center gap-6 sm:gap-10 py-10 sm:px-6 lg:px-0">
        <header>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            We Can&apos;t Fall Behind: A Call to Action for Junior Developers
          </h1>
          <p className="mt-2 text-sm text-zinc-300">~6 min read</p>
        </header>

        <figure className="w-full max-w-2xl mx-auto">
          <Image
            src="/images/blogs/we-cant-fall-behind.png"
            alt="We Can't Fall Behind: A motivational message for junior developers to embrace the AI era and drive innovation forward"
            width={600}
            height={400}
            className="rounded-lg select-none object-cover w-full h-auto"
            priority
          />
        </figure>

        <section className="w-full max-w-5xl">
          <div className=" p-6 rounded-lg border ">
            <h2 className="text-xl font-semibold mb-4">TL;DR</h2>
            <p className=" leading-relaxed">
              This isn&apos;t your typical &quot;you got this&quot; pep talk.
              It&apos;s New Year&apos;s Eve 2025, and while you&apos;re
              wondering if you&apos;re good enough, somewhere in the world,
              Hans, Ivan, or John is coding relentlessly—building new apps, new
              ideas, making their country better. The AI era has one rule: if
              you know one thing, you know everything. Stop fighting AI, start
              working with it. You will get confused. You will feel lost. But
              never, ever give up. This is your duty—not just to yourself, but
              to your country and future generations.
            </p>
          </div>
        </section>

        <section className="w-full max-w-5xl space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Do It for Your Country</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Let me be real with you. Right now, as you&apos;re reading this,
              there&apos;s a developer in Germany, Russia, the US, China, or
              India who is absolutely <em>crushing it</em>. They&apos;re not
              smarter than you. They&apos;re not more talented. But they&apos;re
              coding. They&apos;re building. They&apos;re shipping products that
              make their citizens&apos; lives easier, their economies stronger,
              their countries more competitive.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              And you? You&apos;re sitting there thinking, &quot;I don&apos;t
              know that framework, I only know this one.&quot; Listen to me
              carefully: <strong>that excuse died in 2024</strong>.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Here&apos;s the first rule of the AI era:{" "}
              <em>if you know one thing, you now know everything</em>. You know
              React? Great. You can learn Vue in a weekend with AI as your pair
              programmer. You know Python? Fantastic. Rust is just a
              conversation away. While you&apos;re busy fighting AI, scared
              it&apos;ll take your job, foreign engineers are already
              cooperating with it. They&apos;re using it as a force multiplier.
              They&apos;re winning.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Get Confused. Stay Confused. Never Give Up.
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I need you to understand something:{" "}
              <strong>you&apos;re not supposed to feel ready</strong>.
              You&apos;re not supposed to know everything. You&apos;re going to
              open a codebase and feel like you&apos;re reading hieroglyphics.
              You&apos;re going to read documentation and understand maybe 30%
              of it. You&apos;re going to write code that breaks in ways you
              didn&apos;t know were possible.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <em>This is normal.</em> This is the job. The difference between
              you and the developer who &quot;made it&quot; isn&apos;t that they
              never felt confused—it&apos;s that they kept going anyway.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              You think senior developers have it all figured out? They
              don&apos;t. They&apos;re just better at Googling, better at asking
              AI the right questions, better at reading error messages without
              panicking. That&apos;s it. That&apos;s the secret.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              So get confused. Embrace it. Let it fuel you. Because on the other
              side of that confusion is growth, competence, and the ability to
              build things that matter.
            </p>
          </div>
        </section>

        <section className="w-full max-w-5xl space-y-6">
          <h2 className="text-2xl font-bold">THERE IS NO OTHER WAY</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Here&apos;s the uncomfortable truth:{" "}
            <strong>
              it&apos;s not the senior developers who will drive innovation
              forward
            </strong>
            . It&apos;s not the &quot;experienced&quot; individuals who&apos;ve
            been doing the same thing for 20 years. It&apos;s <em>you</em>.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Young developers, junior engineers, the ones who are hungry, who are
            willing to learn, who aren&apos;t stuck in &quot;this is how
            we&apos;ve always done it&quot; mode—
            <strong>
              you are the ones who will shape the next decade of technology
            </strong>
            .
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            It is up to you to carry the flag. It always has been, and it always
            will be. The seniors can guide you, mentor you, review your code.
            But the raw energy, the willingness to experiment, the courage to
            try new things? That comes from you.
          </p>
        </section>

        <section className="w-full max-w-5xl space-y-6">
          <h2 className="text-2xl font-bold">WE CAN&apos;T FALL BEHIND</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Whatever country you&apos;re in—whether it&apos;s Turkey, Nigeria,
            Brazil, Poland, Vietnam, or anywhere else—you have a responsibility.
            Not just to yourself, not just to your career, but to{" "}
            <strong>your people</strong>.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            As engineers, we have the power to make our communities better. We
            can build apps that help local businesses thrive. We can create
            platforms that connect people. We can solve problems that improve
            daily life for millions. This isn&apos;t a &quot;nice to have.&quot;{" "}
            <strong>This is your damn duty.</strong>
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            You think the developers in Silicon Valley are working harder than
            you? They&apos;re not. You think they have some secret knowledge you
            don&apos;t? They don&apos;t. The only difference is they
            <em>believe</em> they can build world-class products, so they do.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Your country needs you to step up. Future generations need you to
            build the infrastructure, the tools, the systems that will make
            their lives better. This isn&apos;t pressure—this is purpose.
          </p>
        </section>

        <section className="w-full max-w-5xl space-y-6">
          <h2 className="text-2xl font-bold mb-4">
            Final Thoughts: Ready Is a Decision, Not a Feeling
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            As we step into 2026, I want you to let go of one toxic belief:{" "}
            <em>that you need to feel ready before you start</em>.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            You will never feel ready. Ready is not something you feel—it&apos;s
            something you <strong>decide</strong>. You decide to start that side
            project. You decide to apply for that job. You decide to learn that
            new framework. You decide to contribute to open source. You decide
            to build something that matters.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            So here&apos;s my challenge to you: Stop waiting. Stop doubting.
            Stop comparing yourself to others. Start building. Start learning.
            Start contributing. The world doesn&apos;t need another developer
            who&apos;s &quot;almost ready.&quot; It needs you, right now, with
            all your imperfections and uncertainties, to step up and do the
            work.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Because somewhere out there, Hans is coding. Ivan is shipping. John
            is building. And they&apos;re not waiting to feel ready either.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We can&apos;t fall behind. We won&apos;t fall behind.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Not on your watch.
          </p>

          <div className="mt-6 p-6 rounded-lg border bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
            <p className="text-lg font-semibold text-center text-gray-900 dark:text-gray-100">
              &quot;You will never feel ready. Ready is not something to feel,
              it is something to decide.&quot;
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
