"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/for-accountants", label: "For Accountants" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "bg-white shadow-sm py-4"
          : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center z-50 relative">
          <Image 
            src="/logo-by-relly.png" 
            alt="Rely Advisory Logo" 
            width={160} 
            height={40} 
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal hover:text-advisory-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/book-a-review"
            className={buttonVariants({ size: "sm" })}
          >
            Book a Review
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 -mr-2 text-charcoal hover:text-rely-navy z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out flex flex-col pt-24 px-6 lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col gap-6 text-lg">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-rely-navy font-heading font-semibold border-b border-cloud-grey pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-a-review"
            className={buttonVariants({ size: "lg", className: "mt-4" })}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Review
          </Link>
        </nav>
      </div>
    </header>
  );
}
