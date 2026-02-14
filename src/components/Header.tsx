"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../public/logo.png";

const menu = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/process" }, // remove if you delete /process
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

function cx(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Close on ESC
    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    // Lock body scroll when open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // Change header style after scroll
    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 12);
        }
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cx(
                "fixed top-0 z-50 w-full transition-colors",
                scrolled
                    ? "bg-white/90 backdrop-blur border-b border-black/10"
                    : "bg-transparent"
            )}
        >
            <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
                <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setOpen(false)}
                >
                    <Image
                        src={logo}
                        alt="HNC - Hana Construction"
                        priority
                        className="h-10 w-auto"
                    />
                    <span className="sr-only">HNC - Hana Construction</span>
                </Link>

                {/* Hamburger only */}
                <button
                    type="button"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className={cx(
                        "inline-flex h-10 w-10 items-center justify-center rounded-md transition",
                        scrolled ? "hover:bg-black/5" : "hover:bg-white/10"
                    )}
                >
                    <span className="sr-only">Menu</span>

                    <span className="relative block h-4 w-5">
            <span
                className={cx(
                    "absolute left-0 top-0 h-[2px] w-5 drop-shadow transition-transform",
                    scrolled ? "bg-black" : "bg-white",
                    open ? "translate-y-[7px] rotate-45" : ""
                )}
            />
            <span
                className={cx(
                    "absolute left-0 top-[7px] h-[2px] w-5 drop-shadow transition-opacity",
                    scrolled ? "bg-black" : "bg-white",
                    open ? "opacity-0" : "opacity-100"
                )}
            />
            <span
                className={cx(
                    "absolute left-0 top-[14px] h-[2px] w-5 drop-shadow transition-transform",
                    scrolled ? "bg-black" : "bg-white",
                    open ? "translate-y-[-7px] -rotate-45" : ""
                )}
            />
          </span>
                </button>
            </div>

            {/* Mobile dropdown (same style as your previous) */}
            {open && (
                <div className="fixed inset-0 z-50">
                    <button
                        aria-label="Close menu overlay"
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setOpen(false)}
                    />

                    <div className="absolute right-4 top-4 w-[min(360px,calc(100%-2rem))] rounded-xl bg-white p-4 shadow-lg">
                        <div className="flex items-center justify-between pb-2">
                            <p className="text-sm font-semibold text-black/70">Menu</p>
                            <button
                                onClick={() => setOpen(false)}
                                className="rounded-md px-2 py-1 text-sm font-semibold hover:bg-black/5"
                            >
                                Close
                            </button>
                        </div>

                        <nav className="mt-2 flex flex-col">
                            {menu.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="rounded-md px-3 py-3 text-sm font-semibold text-black hover:bg-black/5"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-yellow-500 px-5 py-3 text-sm font-semibold text-black hover:bg-yellow-400"
                        >
                            Request a Quote
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}