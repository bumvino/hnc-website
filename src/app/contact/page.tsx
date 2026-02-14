"use client";

import { useState } from "react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";

import contactHero from "../../../public/images/hero/contact.jpg";

type Status = "idle" | "sending" | "sent" | "error";

const serviceOptions = [
    "Renovation & Remodeling",
    "Turnkey Construction",
    "Make Ready / Unit Turns (Multifamily)",
    "Roofing",
    "HVAC",
    "Cabinetry & Millwork",
    "Countertops (Quartz/Granite)",
    "Other",
];

export default function ContactPage() {
    const [status, setStatus] = useState<Status>("idle");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");

        const form = new FormData(e.currentTarget);
        const payload = {
            name: String(form.get("name") || ""),
            company: String(form.get("company") || ""),
            email: String(form.get("email") || ""),
            phone: String(form.get("phone") || ""),
            property: String(form.get("property") || ""),
            service: String(form.get("service") || ""),
            message: String(form.get("message") || ""),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Request failed");
            setStatus("sent");
            e.currentTarget.reset();
        } catch {
            setStatus("error");
        }
    }

    return (
        <>
            <Header />

            {/* Photo hero like other pages */}
            <PageHero title="Contact" image={contactHero} />

            <main className="mx-auto max-w-6xl px-4 pt-16 pb-24 sm:px-6">
                {/* Title BELOW the photo (same pattern as other pages) */}
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                        Contact HNC
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-black/70 sm:text-xl">
                        Tell us what you need and your timeline — we’ll respond with next
                        steps.
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="mt-14 grid gap-6 lg:grid-cols-5">
                    {/* Info card */}
                    <section className="lg:col-span-2">
                        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
                            <h2 className="text-2xl font-semibold tracking-tight">
                                Get in touch
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-black/70">
                                For pricing requests, unit turns, renovations, roofing, HVAC, or
                                urgent service, reach out here. We serve Metro Atlanta and
                                surrounding areas.
                            </p>

                            <div className="mt-8 space-y-4">
                                <div className="rounded-2xl border border-black/10 bg-white p-4">
                                    <p className="text-xs font-semibold tracking-wide text-black/50">
                                        PHONE
                                    </p>
                                    <a
                                        href="tel:4707999243"
                                        className="mt-1 block text-sm font-semibold text-black underline decoration-black/20 underline-offset-4 hover:decoration-black/60"
                                    >
                                        470-799-9243
                                    </a>
                                </div>

                                <div className="rounded-2xl border border-black/10 bg-white p-4">
                                    <p className="text-xs font-semibold tracking-wide text-black/50">
                                        EMAIL
                                    </p>
                                    <a
                                        href="mailto:info@theHNC.com"
                                        className="mt-1 block text-sm font-semibold text-black underline decoration-black/20 underline-offset-4 hover:decoration-black/60"
                                    >
                                        info@theHNC.com
                                    </a>
                                </div>

                                <div className="rounded-2xl border border-black/10 bg-white p-4">
                                    <p className="text-xs font-semibold tracking-wide text-black/50">
                                        WHAT TO INCLUDE
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm text-black/70">
                                        {[
                                            "Property/location",
                                            "Service needed",
                                            "Timeline/urgency",
                                            "Any photos or notes",
                                        ].map((item) => (
                                            <li key={item} className="flex gap-2">
                                                <span className="mt-[2px] text-yellow-500">▶</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Form card */}
                    <section className="lg:col-span-3">
                        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
                            <h2 className="text-2xl font-semibold tracking-tight">
                                Request a quote
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-black/70">
                                Submit the form and we’ll follow up.
                            </p>

                            <form onSubmit={onSubmit} className="mt-8 space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <input
                                        className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black/30"
                                        placeholder="Name"
                                        name="name"
                                        required
                                    />
                                    <input
                                        className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black/30"
                                        placeholder="Company (optional)"
                                        name="company"
                                    />
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <input
                                        className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black/30"
                                        placeholder="Email"
                                        name="email"
                                        type="email"
                                        required
                                    />
                                    <input
                                        className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black/30"
                                        placeholder="Phone"
                                        name="phone"
                                        required
                                    />
                                </div>

                                <input
                                    className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black/30"
                                    placeholder="Property / Location (City or Address)"
                                    name="property"
                                    required
                                />

                                <select
                                    name="service"
                                    required
                                    defaultValue=""
                                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
                                >
                                    <option value="" disabled>
                                        Select a service
                                    </option>
                                    {serviceOptions.map((s) => (
                                        <option key={s} value={s}>
                                            {s}
                                        </option>
                                    ))}
                                </select>

                                <textarea
                                    className="h-36 w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black/30"
                                    placeholder="Project details (scope, timeline, unit count, etc.)"
                                    name="message"
                                    required
                                />

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full rounded-full bg-yellow-500 px-5 py-3 text-sm font-semibold text-black hover:bg-yellow-400 disabled:opacity-60"
                                >
                                    {status === "sending" ? "Sending..." : "Send Message"}
                                </button>

                                {status === "sent" && (
                                    <p className="text-center text-sm text-black/70">
                                        Message sent. We’ll get back to you soon.
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className="text-center text-sm text-red-600">
                                        Something went wrong. Please try again.
                                    </p>
                                )}
                            </form>

                            <p className="mt-6 text-center text-xs text-black/50">
                                By submitting this form you agree to be contacted by HNC.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}