// import { LogoFacebook, LogoLinkedin } from "@gravity-ui/icons";
import {LogoFacebook,LogoLinkedin,LogoGithub} from '@gravity-ui/icons';;
import { PinOffIcon } from "lucide-react";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div>
            <Link href="/" className="inline-block">
              <h2 className="text-4xl font-bold">
                <span className="text-blue-500">hire</span>
                <span className="text-orange-500">loop</span>
              </h2>
            </Link>

            <p className="mt-6 text-gray-400 leading-7 max-w-xs">
              The AI-native career platform. Built for people who
              take their work seriously.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-8">
              <Link
                href="#"
                className="w-10 h-10 rounded-lg text-black bg-white flex items-center justify-center transition"
              >
                <LogoFacebook size={18} />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-[#4F46E5] flex items-center justify-center transition"
              >
                <LogoGithub size={18} />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-white flex items-center justify-center transition"
              >
                <LogoLinkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-violet-400 font-semibold mb-6">
              Product
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <Link href="/jobs">Job Discovery</Link>
              <Link href="/ai">Worker AI</Link>
              <Link href="/companies">Companies</Link>
              <Link href="/salary">Salary Data</Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-violet-400 font-semibold mb-6">
              Navigations
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <Link href="/help-center">Help Center</Link>
              <Link href="/career-library">Career Library</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-violet-400 font-semibold mb-6">
              Resources
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <Link href="/brand-guideline">
                Brand Guideline
              </Link>

              <Link href="/newsroom">
                Newsroom
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            Copyright 2026 — Hireloop
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/terms">
              Terms & Policy
            </Link>

            <Link href="/privacy">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}