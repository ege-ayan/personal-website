"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiAlertCircle,
} from "react-icons/fi";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin, FaSteam } from "react-icons/fa";
import Link from "next/link";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email().min(1, "Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I&apos;d love to hear from you. Whether you have a project in mind,
            want to collaborate, or just want to say hello, feel free to reach
            out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white/5  backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl h-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className={`block w-full pl-10 pr-3 py-2.5 border rounded-lg bg-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-colors ${
                      errors.name
                        ? "border-red-300 dark:border-red-600"
                        : "border-gray-300 dark:border-slate-600"
                    }`}
                    placeholder="Your full name"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <FiAlertCircle className="w-4 h-4 mr-1" />
                    {errors.name?.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className={`block w-full pl-10 pr-3 py-2.5 border rounded-lg bg-white/10 not-last:ext-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-colors ${
                      errors.email
                        ? "border-red-300 dark:border-red-600"
                        : "border-gray-300 dark:border-slate-600"
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <FiAlertCircle className="w-4 h-4 mr-1" />
                    {errors.email?.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message *
                </label>
                <div className="relative">
                  <div className="absolute top-2.5 left-3 pointer-events-none">
                    <FiMessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    className={`block w-full pl-10 pr-3 py-2.5 border rounded-lg bg-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-colors resize-none ${
                      errors.message
                        ? "border-red-300 dark:border-red-600"
                        : "border-gray-300 dark:border-slate-600"
                    }`}
                    placeholder="Tell me about your project, collaboration idea, or just say hello!"
                  />
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <FiAlertCircle className="w-4 h-4 mr-1" />
                    {errors.message?.message}
                  </p>
                )}
              </div>

              {submitError && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <div className="flex items-center">
                    <FiAlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" />
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      {submitError}
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white/10 cursor-pointer hover:bg-white/10 border border-white/15 disabled:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5  border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl h-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Find Me Online
            </h2>

            <div className="space-y-6">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Connect with me across different platforms. I&apos;m always
                  interested in collaborating on exciting projects and meeting
                  fellow developers and gamers.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="https://github.com/ege-ayan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors duration-200">
                    <FaGithub className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-gray-400 dark:text-gray-300">
                      Explore my open-source projects and contributions
                    </p>
                  </div>
                </Link>

                <Link
                  href="https://tr.linkedin.com/in/ege-ayan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors duration-200">
                    <FaLinkedin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-gray-400 dark:text-gray-300">
                      Professional network and career updates
                    </p>
                  </div>
                </Link>

                <Link
                  href="https://steamcommunity.com/profiles/76561198308942523/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors duration-200">
                    <FaSteam className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Steam</p>
                    <p className="text-sm text-gray-400 dark:text-gray-300">
                      Gaming profile and community activities
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
