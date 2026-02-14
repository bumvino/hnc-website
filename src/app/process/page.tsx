import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Link from "next/link";

import processHero from "../../../public/images/hero/process.jpg";

const steps = [
    {
        n: "1",
        title: "Request & Assessment",
        text: "Share your scope and timeline. We review the site conditions, goals, access requirements, and any property standards.",
    },
    {
        n: "2",
        title: "Scope & Estimate",
        text: "We confirm scope details and provide a clear estimate with schedule options—so expectations are aligned before work begins.",
    },
    {
        n: "3",
        title: "Schedule & Execute",
        text: "Our team coordinates crews and trades, manages on-site progress, and keeps communication consistent from start to finish.",
    },
    {
        n: "4",
        title: "Quality Check & Closeout",
        text: "We complete final walkthrough, cleanup, and punch items—delivering approval-ready results and closeout support.",
    },
];

export default function ProcessPage() {
    return (
        <>
            <Header />

            {/* Title ON the photo */}
            <PageHero title="How It Works" image={processHero} />

            <main className="mx-auto max-w-6xl px-4 pt-16 pb-24 sm:px-6">
                {/* Title BELOW the photo */}
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                        How We Work
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-black/70 sm:text-xl">
                        A simple, reliable process for multifamily turns, renovations, and
                        turnkey project delivery—built around clear communication and
                        dependable timelines.
                    </p>
                </div>

                {/* Steps (match the card style used across the site) */}
                <section className="mt-14">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((s) => (
                            <div
                                key={s.title}
                                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
                            >
                                <div className="text-sm font-semibold text-black/60">
                                    Step {s.n}
                                </div>
                                <h2 className="mt-1 text-lg font-semibold">{s.title}</h2>
                                <p className="mt-2 text-sm leading-relaxed text-black/70">
                                    {s.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What to expect (adds confidence without being long) */}
                <section className="mx-auto mt-16 max-w-4xl rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        What You Can Expect
                    </h2>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {[
                            "Clear scope and upfront expectations",
                            "Reliable scheduling and coordination",
                            "Responsive communication throughout",
                            "Approval-ready finish and closeout",
                        ].map((item) => (
                            <div key={item} className="flex items-start gap-3">
                                <span className="mt-[2px] text-yellow-500">▶</span>
                                <p className="text-sm leading-relaxed text-black/70">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="mt-16 text-center">
                    <p className="text-lg text-black/70">
                        Ready to discuss scope and timeline?
                    </p>

                    <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex rounded-full bg-yellow-500 px-7 py-3 text-sm font-semibold text-black hover:bg-yellow-400"
                        >
                            Request a Quote
                        </Link>

                        <Link
                            href="tel:4707999243"
                            className="inline-flex rounded-full border border-black/15 bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
                        >
                            Call 470-799-9243
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}