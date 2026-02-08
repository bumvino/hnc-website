"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";

import servicesHero from "../../../public/images/hero/services.jpg";

const categories = [
    {
        key: "commercial",
        label: "COMMERCIAL",
        content:
            "We deliver commercial renovation and refurbishment solutions for apartment buildings, including unit upgrades, common areas, roofing, and HVAC integration.",
    },
    {
        key: "retail",
        label: "RETAIL",
        content:
            "Our team supports retail and commercial store fit-outs, remodeling, and building upgrades designed to meet operational and customer-facing requirements.",
    },
    {
        key: "turnkey",
        label: "TURNKEY",
        content:
            "From planning and coordination to execution and handover, Hana Contractors manages complete turnkey projects with a single point of responsibility.",
    },
];

export default function ServicesPage() {
    const [active, setActive] = useState("commercial");

    const activeItem = useMemo(
        () => categories.find((c) => c.key === active),
        [active]
    );

    return (
        <>
            <Header />

            {/* Title ON the photo */}
            <PageHero title="What We Do" image={servicesHero} />

            <main className="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6">
                {/* Title BELOW the photo */}
                <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
                    What We Do
                </h1>

                {/* Categories */}
                <div className="mt-14 border-b border-black/10">
                    <div className="flex flex-wrap justify-center gap-10 pb-6 text-sm font-semibold tracking-wide">
                        {categories.map((cat) => {
                            const isActive = cat.key === active;

                            return (
                                <button
                                    key={cat.key}
                                    onClick={() => setActive(cat.key)}
                                    className={`flex items-center gap-2 transition-colors ${
                                        isActive ? "text-black" : "text-black/40 hover:text-black"
                                    }`}
                                >
                  <span
                      className={`text-xs ${
                          isActive ? "text-yellow-500" : "text-black/40"
                      }`}
                  >
                    ▶
                  </span>
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Content */}
                <div className="mx-auto mt-16 max-w-4xl text-center">
                    <p className="text-xl leading-relaxed text-black/80 sm:text-2xl">
                        {activeItem?.content}
                    </p>
                </div>
            </main>
        </>
    );
}