import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Coded My Own DPI: Bypassing Bans and Building Solutions",
  description:
    "When Discord access was blocked in Turkey and VPS hosting our music bot failed, I built my own SOCKS5 DPI bypass proxy for Raspberry Pi.",
  keywords: [
    "DPI Bypass",
    "Deep Packet Inspection",
    "Raspberry Pi",
    "SOCKS5",
    "DNS Poisoning",
    "Discord Ban",
    "Turkey",
    "Software Development",
    "Networking",
  ],

  openGraph: {
    title: "I Coded My Own DPI: Bypassing Bans and Building Solutions",
    description:
      "When Discord access was blocked in Turkey and VPS hosting our music bot failed, I built my own SOCKS5 DPI bypass proxy for Raspberry Pi.",
    url: "/blogs/coded-my-own-dpi",
    siteName: "Ege Ayan",
    images: [
      {
        url: "/images/blogs/raspberry-dpi.jpg",
        width: 1500,
        height: 1000,
        alt: "I Coded My Own DPI: Bypassing Bans and Building Solutions",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2026-02-28T00:00:00.000Z",
    modifiedTime: "2026-02-28T00:00:00.000Z",
    authors: ["Ege Ayan"],
    tags: ["DPI", "Networking", "Raspberry Pi", "Coding"],
  },
  twitter: {
    card: "summary_large_image",
    title: "I Coded My Own DPI: Bypassing Bans and Building Solutions",
    description:
      "When Discord access was blocked in Turkey and VPS hosting our music bot failed, I built my own SOCKS5 DPI bypass proxy for Raspberry Pi.",
    images: ["/images/blogs/raspberry-dpi.jpg"],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "I Coded My Own DPI: Bypassing Bans and Building Solutions",
    description:
      "When Discord access was blocked in Turkey and VPS hosting our music bot failed, I built my own SOCKS5 DPI bypass proxy for Raspberry Pi.",
    image: ["https://egeayan.dev/images/blogs/raspberry-dpi.jpg"],
    datePublished: "2026-02-28T00:00:00.000Z",
    dateModified: "2026-02-28T00:00:00.000Z",
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
      "@id": "https://egeayan.dev/blogs/coded-my-own-dpi",
    },
    keywords: ["DPI Bypass", "SOCKS5", "Raspberry Pi", "DNS Poisoning"],
    articleSection: "Technology",
    wordCount: "1300",
    timeRequired: "PT8M",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    copyrightHolder: {
      "@type": "Person",
      name: "Ege Ayan",
    },
    license: "https://creativecommons.org/licenses/by/4.0/",
    sameAs: ["https://egeayan.dev/blogs/coded-my-own-dpi"],
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
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl pb-2">
            I Coded My Own Raspberry Pi DPI Proxy: Here's What I have learned.
          </h1>
          <p className="mt-2 text-sm text-zinc-300">~8 min read</p>
        </header>

        <figure className="w-full max-w-2xl mx-auto">
          <Image
            src="/images/blogs/raspberry-dpi.png"
            alt="I Coded My Own DPI"
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
              We just wanted to use our Discord music bot. When Discord was
              banned in Turkey,{" "}
              <a
                href="https://github.com/jagrosh/MusicBot"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-indigo-400 text-indigo-600 hover:underline"
              >
                Jagrosh JMusicBot
              </a>{" "}
              stopped working. We couldn't easily host it on a VPS like Digital
              Ocean or Hetzner because YouTube actively bans their IP ranges.
              The next logical step was hosting it locally on a Raspberry Pi,
              but there wasn't a standard DPI bypass tool available for Linux
              like there is for Windows. Instead of keeping a laptop running
              24/7 just for an anime playlist, I decided to build my own SOCKS5
              proxy with DPI bypass capabilities. Here's a straightforward
              breakdown of DPI, DNS poisoning, and my experience building this
              workaround.
            </p>
          </div>
        </section>

        <section className="w-full max-w-5xl space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              God Forbid a Man Can Listen Music on Discord
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The goal was simple: we wanted to listen to music on Discord using{" "}
              <a
                href="https://github.com/jagrosh/MusicBot"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-indigo-400 text-indigo-600 hover:underline"
              >
                Jagrosh JMusicBot
              </a>
              . It sounds like a problem solved five years ago, right?
              Unfortunately, we ran into a series of increasingly frustrating
              roadblocks.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              First, we tried the obvious route: hosting it on a VPS. This
              quickly failed because YouTube treats IP ranges belonging to major
              data centers like they're actively trying to launch a DDoS attack,
              frequently blocking them to prevent automated downloads.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The alternative was hosting it locally. While you <em>can</em>{" "}
              host it from a Windows laptop, leaving your personal machine
              running 24/7 sounding like it's preparing for takeoff isn't ideal.
              A Raspberry Pi was the perfect hardware choice—it's low power and
              perfectly suited for this. We set it up, ran the bot, and...
              nothing.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Ah, right: <strong>Discord is banned in Turkey</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Taking the Matters to My Own Hand
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              On Windows, this is a solved problem. Tools like{" "}
              <a
                href="https://github.com/cagritaskn/GoodbyeDPI-Turkey"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-indigo-400 text-indigo-600 hover:underline"
              >
                Çağrı Taşkın's GoodbyeDPI
              </a>{" "}
              bypass the Deep Packet Inspection (DPI) ISPs use to enforce these
              blocks beautifully.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              However, I was running Raspberry Pi OS (Linux). I had recently
              bought a shiny new Raspberry Pi 5 to set up a little home server
              for myself. After scouring GitHub for an equivalent Linux tool and
              coming up noticeably empty-handed for an easy, lightweight
              solution, it was time for action. So, on a totally random Friday
              evening, instead of doing normal Friday evening things, I opened
              my editor and decided to build my own DPI proxy in C from scratch.
              What started as wanting to play YouTube on Discord turned into a
              fast-tracked crash course in networking.
            </p>
          </div>
        </section>

        <section className="w-full max-w-5xl space-y-6">
          <h2 className="text-2xl font-bold">
            Key Concepts (Explain like I'm a Dumbass)
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Here is a very stupid, highly simplified explanation of what's
            actually happening so you don't fall asleep reading this.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              1. Deep Packet Inspection (DPI)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Normally, your internet provider just looks at the address on your
              digital envelope and sends it on its way. DPI is the internet
              provider aggressively ripping open the envelope to read your mail.
              If they see you're going to Discord, they throw your mail in the
              fire.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              How do we beat this? By basically tearing the letter into tiny,
              confusing pieces before we send it. They see a puzzle piece with a
              "D" on it, roll their eyes, and let it through.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">2. DNS Poisoning</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              DNS is basically the contacts app on your phone. You type Discord,
              it dials the number. DNS Poisoning is when your internet provider
              sneaks into your phone and changes Discord's number to a totally
              fake, non-existent number so the call drops immediately.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              How do we beat it? Just use Google or Cloudflare's contacts app
              instead of trusting the ones your provider gave you. Simple.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">3. SOCKS5 Proxy</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The Discord bot has no idea how to tear up letters or change
              contacts. It just wants to play music. So, I built a SOCKS5
              proxy—which is basically a middleman. The bot hands its letters to
              the middleman, and the middleman does all the sneaky tearing and
              bypassing before handing it to the post office.
            </p>
          </div>
        </section>

        <section className="w-full max-w-5xl space-y-6">
          <h2 className="text-2xl font-bold">Conclusion</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I ended up creating{" "}
            <a
              href="https://github.com/ege-ayan/raspberry-dpi"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-indigo-400 text-indigo-600 hover:underline font-mono"
            >
              raspberry-dpi
            </a>
            . It successfully fragments TLS packets to bypass the ISP's DPI,
            allowing the bot to connect to Discord and play music directly from
            the Raspberry Pi.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The biggest takeaway from this project wasn't just learning how
            SOCKS5 and DPI work, but realizing that technical blocks are often
            just an opportunity to build something new. When you encounter a
            blocker—like an IP ban, a platform block, or missing
            tooling—building a custom solution is often more practical than it
            seems.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            If a tool doesn't exist for your platform, diving into the
            underlying protocols and building it yourself is one of the best
            ways to learn.
          </p>

          <div className="mt-8 p-6 rounded-lg border bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
            <p className="text-lg font-semibold text-center text-gray-900 dark:text-gray-100 italic">
              "The only difference between you and the person who wrote the tool
              you need, is that they actually sat down and wrote it."
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
