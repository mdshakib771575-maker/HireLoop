"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";



const navLinks = [
  {
    name: "Browse Jobs",
    href: "/jobs",
  },
  {
    name: "Companies",
    href: "/companies",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];

export default function Navbar() {

  const { data: session, isPending, } = authClient.useSession();
  const user = session?.user
  // console.log(user)
  const handalSignOut = async ()=>{
      await authClient.signOut();
  }

  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="w-full  ">
      <nav className="">
        <div className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10 px-4">
          <div className="h-20 flex items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <h1 className="text-3xl font-bold">
                <span className="text-blue-500">hire</span>
                <span className="text-orange-500">loop</span>
              </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center ml-auto">
              {/* Navigation Links */}
              <div className="flex items-center gap-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Vertical Divider */}
              <div className="mx-8 h-6 w-px bg-white/20" />

              {/* Auth Buttons */}
              <div className="flex items-center gap-6">
               { user? <>
                 <p className="text-white">{user.name}</p>
                <Button variant="danger" onClick={handalSignOut}>SignOut</Button>
               </>
               :
                <Link
                  href="/signin"
                  className="text-violet-400 hover:text-violet-300 font-medium transition-colors">
                  Sign In
                </Link>}
                <Link href="signup">
                  <Button
                    color="secondary"
                    className="px-6 font-medium">
                    Get Started
                  </Button>
                </Link>

              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden ml-auto text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden border-t border-white/10 py-5">
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="border-t border-white/10 pt-5 flex flex-col gap-4">
                  <Link
                    href="/signin"
                    onClick={() => setIsOpen(false)}
                    className="text-violet-400 font-medium">
                    Sign In
                  </Link>

                  <Link href={"/signup"}>
                    <Button
                      color="secondary"
                      className="px-6 font-medium w-full">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}