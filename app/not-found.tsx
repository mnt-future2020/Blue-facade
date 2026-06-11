"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowRight } from "lucide-react";
import { Header } from "@/components/Blufacade/Header";
import { Footer } from "@/components/Blufacade/Footer";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Header />

      <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-[#fefaf6]">
        {/* Particles background — matches the homepage hero */}
        <Particles
          className="absolute inset-0 z-0"
          quantity={120}
          ease={80}
          color="#014a74"
          size={0.5}
          staticity={30}
          refresh={false}
        />

        {/* Soft brand glows for depth */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#014a74]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#f58420]/10 blur-3xl" />

        <div className="container relative z-10 mx-auto px-6 py-20 md:px-12 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-sm font-bold uppercase tracking-[0.3em] text-[#f58420]"
            >
              Error 404
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-bold leading-none tracking-tight text-[clamp(5rem,18vw,11rem)]"
            >
              <span className="text-[#014a74]">4</span>
              <span className="text-[#f58420]">0</span>
              <span className="text-[#014a74]">4</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-2 text-2xl font-bold text-[#282828] md:text-3xl lg:text-4xl"
            >
              This page couldn&apos;t be found
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#282828]/70 md:text-lg"
            >
              The page you&apos;re looking for may have been moved, renamed, or is
              no longer available. Let&apos;s get you back to building something
              great.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#014a74] px-8 py-6 text-base text-white hover:bg-[#014a74]/90"
              >
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" /> Back to Home
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#014a74] px-8 py-6 text-base text-[#014a74] hover:bg-[#014a74] hover:text-white"
              >
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 border-t border-[#014a74]/15 pt-8"
            >
              <p className="mb-4 text-xs uppercase tracking-widest text-[#282828]/50">
                Popular pages
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm font-medium text-[#014a74] transition-colors hover:text-[#f58420]"
                  >
                    {link.label}
                    <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
