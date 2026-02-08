import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Block = {
    title: string;
    description: string;
    href: string;
    linkLabel: string;
    image: string;
};

const blocks: Block[] = [
    {
        title: "Hello. We Are HNC.",
        description:
            "Hana Contractors delivers commercial renovation, refurbishment, and turnkey solutions for apartments, retail spaces, and commercial buildings.",
        href: "/about",
        linkLabel: "Who We Are",
        image: "/images/home/block-1.jpg",
    },
    {
        title: "We Build & Upgrade Commercial Spaces.",
        description:
            "Major renovation and remodeling projects delivered with quality execution, clear communication, and reliable timelines.",
        href: "/services",
        linkLabel: "What We Do",
        image: "/images/home/block-2.jpg",
    },
    {
        title: "Roofing & HVAC Solutions.",
        description:
            "Integrated building systems designed for performance, efficiency, and long-term durability in commercial environments.",
        href: "/services",
        linkLabel: "Our Capabilities",
        image: "/images/home/block-3.jpg",
    },
    {
        title: "Turnkey Project Delivery.",
        description:
            "From planning and coordination to execution and handover — one team, one process, one accountable delivery.",
        href: "/process",
        linkLabel: "How We Do It",
        image: "/images/home/block-4.jpg",
    },
    {
        title: "See Our Work.",
        description:
            "A selection of commercial projects delivered by Hana Contractors.",
        href: "/projects",
        linkLabel: "View Projects",
        image: "/images/home/block-5.jpg",
    },
];

function PhotoBlock({ block }: { block: Block }) {
    return (
        <section className="relative min-h-[80vh] border-b border-black/10">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${block.image})` }}
            />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Content */}
            <div className="relative mx-auto flex min-h-[80vh] max-w-6xl items-center px-4 py-20 sm:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                        {block.title}
                    </h2>

                    <p className="mt-5 text-lg leading-relaxed text-white/85 sm:text-xl">
                        {block.description}
                    </p>

                    <Link
                        href={block.href}
                        className="mx-auto mt-10 inline-flex rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
                    >
                        {block.linkLabel}
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <>
            <Header />

            <main>
                {blocks.map((block) => (
                    <PhotoBlock key={block.title} block={block} />
                ))}

                {/* Final CTA (no image, white background like IA) */}
                <section className="border-b border-black/10 bg-white">
                    <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
                        <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                            Ready to start your project?
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg text-black/70 sm:text-xl">
                            Tell us about your space and timeline — we’ll respond with next steps.
                        </p>

                        <Link
                            href="/contact"
                            className="mx-auto mt-10 inline-flex rounded-full bg-yellow-500 px-7 py-3 text-sm font-semibold text-black hover:bg-yellow-400"
                        >
                            Contact HNC
                        </Link>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}

