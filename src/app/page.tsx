'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BellRing, CalendarDays, Paperclip, Send } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-900/40 text-black dark:text-white transition-colors duration-500">
      {/* Header */}
      <header className="px-6 h-20 flex items-center justify-between bg-white/80 dark:bg-zinc-900/40 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 shadow-sm">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight hover:tracking-wider transition-all duration-300"
        >
          <span>🕒 TimeOffer</span>
        </Link>

        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <motion.div
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {!menuOpen ? (
              <>
                <span className="block w-6 h-1 bg-gray-900 dark:bg-white rounded-lg"></span>
                <span className="block w-6 h-1 bg-gray-900 dark:bg-white rounded-lg mt-1"></span>
              </>
            ) : (
              <>
                <span className="block w-6 h-1 bg-gray-900 dark:bg-white rounded-lg transform rotate-45 translate-y-2"></span>
                <span className="block w-6 h-1 bg-gray-900 dark:bg-white rounded-lg transform -rotate-45 -translate-y-2"></span>
              </>
            )}
          </motion.div>
        </button>

        <nav className="hidden md:flex gap-10 text-sm font-medium">
          {['features', 'tutorial', 'pricing'].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </header>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden bg-white dark:bg-zinc-900 p-6 space-y-4 absolute top-20 left-0 right-0 z-50 shadow-lg"
        >
          {['features', 'tutorial', 'pricing'].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="block text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </motion.div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-32 xl:py-48 relative overflow-hidden">
          <div className="container px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1]">
                Time Off, <br />
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                Beautifully manage your company’s time off with precision,
                clarity, and a touch of elegance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="px-8 py-4 text-base rounded-full bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition-all duration-300"
                >
                  <Link href="/sign-up">Get Started</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="px-8 py-4 text-base border border-gray-300 dark:border-gray-700 rounded-full hover:border-black dark:hover:border-white transition-all"
                >
                  <Link href="/features">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-xl mx-auto rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-white/10"
            >
              <Image
                src="/dashboard-screenshot.jpg"
                alt="Dashboard screenshot"
                width={700}
                height={440}
                className="object-cover w-full h-auto"
              />
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/30 to-transparent flex items-center gap-2 px-4">
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <Separator />
        <section className="w-full py-12 md:py-24 bg-white dark:bg-black transition-colors duration-500">
          <div className="container px-6 max-w-6xl mx-auto text-center space-y-14">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                  Designed to Delight
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  A seamless experience across features that make time-off
                  management intuitive, efficient, and enjoyable.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: 'One-Click Requests',
                  desc: 'Employees can request time off effortlessly through the platform.',
                  icon: <Send size={32} />,
                },
                {
                  title: 'Instant Approvals',
                  desc: 'Managers get real-time notifications and can approve requests in seconds.',
                  icon: <BellRing size={32} />,
                },
                {
                  title: 'Live Calendar Sync',
                  desc: 'Stay coordinated with dynamic team-wide leave visibility.',
                  icon: <CalendarDays size={32} />,
                },
              ].map(({ title, desc, icon }, i) => (
                <Card
                  key={i}
                  className="h-full border-none bg-gray-50 dark:bg-zinc-900/40 backdrop-blur-md hover:shadow-2xl transition-all duration-300 ease-in-out"
                >
                  <CardContent className="h-full flex flex-col p-8 space-y-4">
                    <div className="text-gray-900 dark:text-white">{icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 text-center border-t border-gray-200 dark:border-gray-800 mt-24">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Copyright © {new Date().getFullYear()} TimeOffer (Pty) Ltd. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}
