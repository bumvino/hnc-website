import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Link from "next/link";

import processHero from "../../../public/images/hero/process.jpg";

const steps = [
    { title: "Assessment & Scope", text: "We review the site, goals, and requirements." },
    { title: "Plan & Estimate", text: "Clear scope, timeline, and cost alignment." },
    { title: "Execute & Coordinate", text: "Trades managed and work delivered efficiently." },
    { title: "Quality & Handover", text: "Final checks, cleanup, and project delivery." },
];

export default function ProcessPage() {
    return (
        <>
            <Header />

            {/* Title ON the photo */}
            <PageHero title="How We Do It" image={processHero} />

            <main className="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6">
                {/* Title BELOW the photo */}
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    How We Do It
                </h1>

                <p className="mt-4 max-w-3xl text-lg text-black/70">
                    A simple, reliable process for commercial contracting and turnkey delivery.
                </p>

                <div className="mt-14 grid gap-8 sm:grid-cols-2">
                    {steps.map((s) => (
                        <div key={s.title} className="border-t border-black/10 pt-6">
                            <h2 className="text-lg font-semibold">{s.title}</h2>
                            <p className="mt-2 text-black/70">{s.text}</p>
                        </div>
                    ))}
                </div>

                <Link
                    href="/contact"
                    className="mt-16 inline-flex rounded-full bg-yellow-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-yellow-400"
                >
                    Contact HNC
                </Link>
            </main>
        </>
    );
}