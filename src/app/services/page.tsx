"use client";

import Header from "@/components/Header";
import PageHero from "@/components/PageHero";

import servicesHero from "../../../public/images/hero/services.jpg";

type Service = {
    title: string;
    description: string;
    bullets: string[];
};

const services: Service[] = [
    {
        title: "Renovation & Remodeling",
        description:
            "Complete interior and exterior renovation and remodeling solutions for residential, commercial, and multifamily properties.",
        bullets: ["Interior & Exterior Renovation", "Remodeling & Refurbishment"],
    },
    {
        title: "Turnkey Construction Solutions",
        description:
            "End-to-end construction services from planning and demolition to final installation and completion.",
        bullets: ["Full-service Turnkey Projects", "Design to Completion Solutions"],
    },
    {
        title: "Make Ready & Turn Services for Multifamily",
        description:
            "Apartment turns, punch-out repairs, resurfacing, cleaning coordination, and vacancy preparation.",
        bullets: [
            "Unit Turns",
            "Interior & Exterior Painting",
            "Drywall & Carpentry",
            "Punch-Out Repairs",
            "Resurfacing",
        ],
    },
    {
        title: "Custom Cabinetry & Millwork",
        description:
            "Custom cabinet fabrication, installation, and refinishing for kitchens, bathrooms, and built-in storage or closets.",
        bullets: [
            "Design & Custom Cabinet Fabrication",
            "Cabinet Installation & Refinishing",
        ],
    },
    {
        title: "Countertops (Quartz & Granite)",
        description:
            "Fabrication and installation of high-quality quartz and granite countertops.",
        bullets: [
            "Quartz Countertop Fabrication & Installation",
            "Granite Countertop Fabrication & Installation",
        ],
    },
    {
        title: "HVAC Services",
        description:
            "HVAC installation, replacement, repair, and maintenance for heating and cooling.",
        bullets: ["Installation & Replacement", "Repair & Maintenance"],
    },
    {
        title: "Roofing",
        description:
            "Roof repair, replacement, and exterior waterproofing services.",
        bullets: ["Roof Repair & Replacement", "Exterior Waterproofing"],
    },
];

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

export default function ServicesPage() {
    return (
        <>
            <Header />

            {/* keep your photo hero component */}
            <PageHero title="Services" image={servicesHero} />

            <main className="mx-auto max-w-6xl px-4 pt-16 pb-24 sm:px-6">
                <SectionHeader
                    title="Services Built for Property Teams"
                    description="Turnkey renovation, make-ready turns, and specialty trades delivered with clear communication and dependable timelines across Metro Atlanta."
                />

                {/* Services grid (matches the Home page card style) */}
                <section className="mt-14">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((s) => (
                            <div
                                key={s.title}
                                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
                            >
                                <h2 className="text-lg font-semibold">{s.title}</h2>
                                <p className="mt-2 text-sm leading-relaxed text-black/70">
                                    {s.description}
                                </p>

                                <ul className="mt-4 space-y-2 text-sm text-black/75">
                                    {s.bullets.map((b) => (
                                        <li key={b} className="flex gap-2">
                                            <span className="mt-[2px] text-yellow-500">▶</span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="mt-20 rounded-3xl border border-black/10 bg-white p-10 text-center shadow-sm">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Need pricing or a quick turnaround?
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-black/70 sm:text-lg">
                        Tell us what you need and your timeline — we’ll respond with next
                        steps.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href="/contact"
                            className="inline-flex rounded-full bg-yellow-500 px-7 py-3 text-sm font-semibold text-black hover:bg-yellow-400"
                        >
                            Request a Quote
                        </a>
                        <a
                            href="tel:4707999243"
                            className="inline-flex rounded-full border border-black/15 bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
                        >
                            Call 470-799-9243
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}