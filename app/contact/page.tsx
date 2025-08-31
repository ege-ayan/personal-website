import type { Metadata } from "next";
import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Ege Ayan - Get In Touch",
  description:
    "Ready to collaborate? Get in touch with Ege Ayan, a passionate full-stack developer specializing in modern web technologies. Let's discuss your project ideas and bring them to life.",
  keywords: [
    "Contact Ege Ayan",
    "Hire Full Stack Developer",
    "Web Development Services",
    "Collaborate",
    "Project Inquiry",
    "Software Development",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
  ],
  openGraph: {
    title: "Contact Ege Ayan - Get In Touch",
    description:
      "Ready to collaborate? Get in touch with Ege Ayan, a passionate full-stack developer specializing in modern web technologies.",
    url: "/contact",
    siteName: "Ege Ayan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ege Ayan - Get In Touch",
    description:
      "Ready to collaborate? Get in touch with Ege Ayan, a passionate full-stack developer specializing in modern web technologies.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
