"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle",
    );

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");

        const form = new FormData(e.currentTarget);
        const payload = {
            name: String(form.get("name") || ""),
            email: String(form.get("email") || ""),
            phone: String(form.get("phone") || ""),
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

            <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
                <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
                    Find HNC
                </h1>

                <div className="mx-auto mt-14 max-w-4xl text-center">
                    <p className="text-xl leading-relaxed text-black/80 sm:text-2xl">
                        Tell us about your project. We’ll respond with next steps.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-xl border-t border-black/10 pt-10">
                    <form onSubmit={onSubmit} className="space-y-4">
                        <input
                            className="w-full rounded-md border border-black/10 px-4 py-3 outline-none focus:border-black/30"
                            placeholder="Name"
                            name="name"
                            required
                        />
                        <input
                            className="w-full rounded-md border border-black/10 px-4 py-3 outline-none focus:border-black/30"
                            placeholder="Email"
                            name="email"
                            type="email"
                            required
                        />
                        <input
                            className="w-full rounded-md border border-black/10 px-4 py-3 outline-none focus:border-black/30"
                            placeholder="Phone (optional)"
                            name="phone"
                        />
                        <textarea
                            className="h-32 w-full rounded-md border border-black/10 px-4 py-3 outline-none focus:border-black/30"
                            placeholder="Project details"
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

                    <div className="mt-10 text-center text-sm text-black/60">
                        <p>Email: info@theHNC.com</p>
                        <p className="mt-2">Phone: +1 470 799 9243 </p>
                    </div>
                </div>
            </main>
        </>
    );
}
