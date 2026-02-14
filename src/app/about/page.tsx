import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Link from "next/link";

import aboutHero from "../../../public/images/hero/about.jpg";

function SectionHeader({
                           title,
                           description,
                       }: {
    title: string;
    description?: string;
}) {
    return (
        <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                {title}
            </h1>
            {description ? (
                <p className="mx-auto mt-6 max-w-3xl text-lg text-black/70 sm:text-xl">
                    {description}
                </p>
            ) : null}
        </div>
    );
}

export default function AboutPage() {
    return (
        <>
            <Header />

            {/* Title ON the photo */}
            <PageHero title="About HNC" image={aboutHero} />

            <main className="mx-auto max-w-6xl px-4 pt-16 pb-24 sm:px-6">
                <SectionHeader
                    title="Built for Property Teams"
                    description="HNC (Hana Contractors) provides turnkey maintenance and renovation services for multifamily and commercial properties across Metro Atlanta."
                />

                {/* Three value cards (matches Services/Home styling) */}
                <section className="mt-14">
                    <div className="grid gap-5 md:grid-cols-3">
                        {[
                            {
                                title: "Turnkey + Trades",
                                desc: "Unit turns, renovations, and specialty services—delivered with one accountable team and a clear scope.",
                            },
                            {
                                title: "Clear Communication",
                                desc: "We coordinate with property managers and maintenance teams to keep timelines, access, and expectations aligned.",
                            },
                            {
                                title: "Quality Closeout",
                                desc: "From kickoff through final inspection, we focus on clean finishes and approval-ready results.",
                            },
                        ].map((card) => (
                            <div
                                key={card.title}
                                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
                            >
                                <h2 className="text-lg font-semibold">{card.title}</h2>
                                <p className="mt-2 text-sm leading-relaxed text-black/70">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Story / positioning */}
                <section className="mx-auto mt-16 max-w-4xl border-t border-black/10 pt-16">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Renovation, Maintenance, and Make-Ready Support
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-black/70">
                        We help teams maintain and improve properties with dependable labor,
                        responsive scheduling, and consistent communication. Whether you need
                        a full renovation scope or quick turn work, our goal is simple:
                        reduce friction for your team and deliver results you can approve
                        with confidence.
                    </p>
                </section>

                {/* Experience */}
                <section className="mx-auto mt-16 max-w-4xl border-t border-black/10 pt-16">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        20+ Years of Experience in Metro Atlanta
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-black/70">
                        With over 20 years of experience across residential and commercial
                        remodeling and new construction in Metro Atlanta, HNC brings
                        craftsmanship and project discipline to every job—small or large.
                    </p>
                </section>

                {/* What we cover (quick list) */}
                <section className="mx-auto mt-16 max-w-4xl border-t border-black/10 pt-16">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        What We Cover
                    </h2>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        {[
                            "Renovation & Remodeling",
                            "Turnkey Construction Solutions",
                            "Make Ready & Unit Turns",
                            "Interior & Exterior Painting",
                            "Drywall & Carpentry",
                            "Resurfacing",
                            "Roofing",
                            "HVAC",
                            "Custom Cabinetry & Millwork",
                            "Countertops (Quartz & Granite)",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-start gap-3 rounded-3xl border border-black/10 bg-white p-5 shadow-sm"
                            >
                                <span className="mt-[2px] text-yellow-500">▶</span>
                                <span className="text-sm font-semibold text-black/80">
                  {item}
                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <Link
                            href="/services"
                            className="inline-flex rounded-full border border-black/15 bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
                        >
                            View Services
                        </Link>
                    </div>
                </section>

                {/* CTA */}
                <section className="mx-auto mt-20 max-w-4xl rounded-3xl border border-black/10 bg-white p-10 text-center shadow-sm">
                    <p className="text-lg text-black/70">Have a project in mind?</p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Let’s talk scope and timeline.
                    </h2>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex rounded-full bg-yellow-500 px-7 py-3 text-sm font-semibold text-black hover:bg-yellow-400"
                        >
                            Contact HNC
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