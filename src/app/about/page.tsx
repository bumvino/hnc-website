import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Link from "next/link";

import aboutHero from "../../../public/images/hero/about.jpg";

export default function AboutPage() {
    return (
        <>
            <Header />

            {/* Title ON the photo */}
            <PageHero title="Who We Are" image={aboutHero} />

            <main className="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6">
                {/* Title BELOW the photo */}
                <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
                    Who We Are
                </h1>

                {/* Hero statement */}
                <div className="mx-auto mt-10 max-w-4xl text-center">
                    <p className="text-xl leading-relaxed text-black/80 sm:text-2xl">
                        Hana Contractors is a commercial contracting company delivering renovation,
                        refurbishment, remodeling, roofing, HVAC, and turnkey solutions for
                        apartments, retail spaces, and commercial buildings.
                    </p>
                </div>

                {/* Divider */}
                <div className="mx-auto mt-16 max-w-4xl border-t border-black/10" />

                {/* What we do */}
                <section className="mx-auto mt-16 max-w-4xl">
                    <h2 className="text-2xl font-semibold tracking-tight">What We Do</h2>
                    <p className="mt-4 text-lg leading-relaxed text-black/70">
                        We support property owners, developers, and businesses with major commercial
                        upgrades and coordinated building works. Our scope includes structural
                        improvements, system upgrades, and complete project delivery.
                    </p>
                </section>

                {/* How we work */}
                <section className="mx-auto mt-16 max-w-4xl border-t border-black/10 pt-16">
                    <h2 className="text-2xl font-semibold tracking-tight">How We Work</h2>
                    <p className="mt-4 text-lg leading-relaxed text-black/70">
                        Our approach is built on planning, coordination, and accountability. We manage
                        trades, timelines, and communication to reduce complexity and deliver projects
                        with consistency and control.
                    </p>
                </section>

                {/* CTA */}
                <div className="mx-auto mt-24 max-w-4xl border-t border-black/10 pt-16 text-center">
                    <p className="text-lg text-black/70">Have a project in mind?</p>
                    <Link
                        href="/contact"
                        className="mt-6 inline-flex rounded-full bg-yellow-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-yellow-400"
                    >
                        Contact HNC
                    </Link>
                </div>
            </main>
        </>
    );
}