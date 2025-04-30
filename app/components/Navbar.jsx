"use client";
import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  const menuVariants = {
    open: { x: 0, transition: { duration: 1, ease: "easeInOut" } },
    closed: { x: "-100%", transition: { duration: 1, ease: "easeInOut" } },
  };

  const pathname = usePathname();
  const isCategoryPage = pathname === "/categories";
  const isHomePage = pathname === "/";
  const isAboutPage = pathname === "/aboutme";
  const isContactPage = pathname === "/contact";

  return (
    <div className="relative h-full w-full">
      <nav
        className={`absolute top-0 left-0 z-50 flex w-full items-center justify-between px-[10vw] py-5 transition-colors duration-300 ${
          isContactPage || isCategoryPage ? "text-black" : "text-white"
        }`}
      >
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <RxCross1 className="text-2xl" />
          ) : (
            <FiAlignJustify className="text-2xl" />
          )}
        </button>
        <div className="hidden items-center justify-center text-xl md:flex">
          <Link href="/">Personal Travel Blog</Link>
        </div>
        <ul className="flex items-center justify-between text-2xl">
          <Link href="/search">
            <CiSearch />
          </Link>
        </ul>
      </nav>
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            key="menu"
            className="fixed left-0 top-0 z-40 h-full w-full bg-black/95 text-white p-[10vw]"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between pt-14 md:pt-10">
            <ul className="flex flex-col gap-5 md:gap-10">
              <li>
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`lg:text-6xl md:text-4xl text-4xl font-mono ${
                    isHomePage ? "border-b-2" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutme"
                  onClick={() => setIsMenuOpen(false)}
                  className={`lg:text-6xl md:text-4xl text-4xl font-mono ${
                    isAboutPage
                      ? "border-b-2"
                      : ""
                  }`}
                >
                  About me
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  onClick={() => setIsMenuOpen(false)}
                  className={`lg:text-6xl md:text-4xl text-4xl font-mono ${
                    isCategoryPage ? "border-b-2" : ""
                  }`}
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`lg:text-6xl md:text-4xl text-4xl font-mono ${
                    isContactPage ? "border-b-2" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="hidden md:flex border-[1px] border-zinc-400 h-fit w-1/2 px-10 py-8  items-center justify-center">
                <div className="text-left flex flex-col gap-3">
                  <h3 className="text-3xl font-mono">Newsletter</h3>
                  <h4 className="text-sm text-zinc-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non esse sit at dignissimos.</h4>
                  <div className="flex flex-col text-left">
                    <label htmlFor="">Email address</label>
                    <input type="email" placeholder="example@gmail.com" className="border-none " />
                    <button className="bg-white px-4 py-3 text-black mt-5 font-mono font-semibold">subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
