import Link from "next/link";

const links = [
    { label: "Who We Are", href: "/about" },
    { label: "What We Do", href: "/services" },
    { label: "How We Do It", href: "/process" },
    { label: "Projects", href: "/projects" },
    { label: "Find HNC", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="border-t border-black/10 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Useful links */}
                    <div>
                        <p className="text-xs font-semibold tracking-wide text-black/50">
                            Useful links
                        </p>
                        <nav className="mt-4 flex flex-col gap-3">
                            {links.map((l) => (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className="text-sm font-semibold text-black/80 hover:underline underline-offset-4"
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-xs font-semibold tracking-wide text-black/50">
                            Contact
                        </p>
                        <div className="mt-4 space-y-3 text-sm text-black/80">
                            <p>
                                <span className="font-semibold">Phone:</span>{" "}
                                <a
                                    className="hover:underline underline-offset-4"
                                    href="tel:+14707999243"
                                >
                                    +1 (470) 799-9243
                                </a>
                            </p>
                            <p>
                                <span className="font-semibold">Email:</span>{" "}
                                <a
                                    className="hover:underline underline-offset-4"
                                    href="mailto:info@theHNC.com"
                                >
                                    info@theHNC.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <p className="text-xs font-semibold tracking-wide text-black/50">
                            Social
                        </p>
                        <div className="mt-4 flex flex-col gap-3">
                            <a
                                className="text-sm font-semibold text-black/80 hover:underline underline-offset-4"
                                href="#"
                            >
                                Instagram
                            </a>
                            <a
                                className="text-sm font-semibold text-black/80 hover:underline underline-offset-4"
                                href="#"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="mt-14 flex flex-col gap-4 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs text-black/60">
                        © {new Date().getFullYear()} Hana Contractors (HNC). All rights reserved.
                    </div>

                    <div className="flex gap-6 text-xs font-semibold text-black/70">
                        <Link href="/privacy" className="hover:underline underline-offset-4">
                            Privacy Policy
                        </Link>
                        <Link href="/contact" className="hover:underline underline-offset-4">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
