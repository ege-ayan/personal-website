"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Divide as Hamburger } from "hamburger-react";
import { FiHome, FiCode, FiBookOpen, FiArchive } from "react-icons/fi";
import { useMobile } from "@/hooks/useMobile";

const navItems = [
  { name: "Home", href: "/", icon: FiHome },
  { name: "Projects", href: "/projects", icon: FiCode },
  { name: "Blogs", href: "/blogs", icon: FiBookOpen },
  { name: "Resources", href: "/resources", icon: FiArchive },
];

const DesktopNavbar = ({ pathname }: { pathname: string }) => {
  return (
    <div className="ml-10 flex items-baseline space-x-8">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`relative flex select-none items-center space-x-2 px-3 py-2 text-sm lg:text-base rounded-md font-medium transition-all duration-400 group overflow-hidden ${
              isActive
                ? "text-white bg-white/10 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-white"
                : "text-gray-300 hover:text-white hover:bg-white/10 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-400 hover:before:w-full"
            }`}
          >
            <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

const MobileNavbar = ({
  isOpen,
  setIsOpen,
  pathname,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
}) => {
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        title={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={24}
          color="#ffffff"
          direction="right"
          duration={0.3}
          distance="lg"
          rounded
        />
      </button>

      <div
        id="mobile-menu"
        className={`absolute top-full left-0 right-0 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-ovclh/95 backdrop-blur-md border-t border-white/10">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex select-none items-center space-x-3 px-3 py-3 rounded-md text-base font-medium transition-all duration-200 transform ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <Icon
                  className={`w-5 h-5 transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                />
                <span
                  className={`transition-colors duration-200 ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMobile();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed border-b border-white/25 top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-ovclh/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-12 2xl:px-20">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-xl lg:text-2xl select-none font-black text-white"
          >
            EGE AYAN
          </Link>

          {isMobile ? (
            <MobileNavbar
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              pathname={pathname}
            />
          ) : (
            <DesktopNavbar pathname={pathname} />
          )}
        </div>
      </div>
    </nav>
  );
}
