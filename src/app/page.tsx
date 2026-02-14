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

const hero: Block = {
    title: "HANA CONTRACTORS",
    description: "",
    href: "/contact",
    linkLabel: "Request a Quote",
    image: "/images/home/block-1.jpg", // KEEP FIRST MAIN IMAGE
};

const serviceBlocks: Block[] = [
    {
        title: "Commercial Turnkey Solutions",
        description: "",
        href: "/services",
        linkLabel: "Learn more",
        image: "/images/home/block-2.jpg",
    },
    {
        title: "Renovation & Remodeling",
        description: "",
        href: "/services",
        linkLabel: "Learn more",
        image: "/images/home/block-3.jpg",
    },
    {
        title: "Custom Cabinetry & Millwork",
        description: "",
        href: "/services",
        linkLabel: "Learn more",
        image: "/images/home/block-4.jpg",
    },
    {
        title: "Countertops (Quartz & Granite)",
        description: "",
        href: "/services",
        linkLabel: "Learn more",
        image: "/images/home/block-5.jpg",
    },
    {
        title: "Roofing",
        description: "",
        href: "/services",
        linkLabel: "Learn more",
        image: "/images/home/block-6.jpg",
    },
    {
        title: "HVAC Services",
        description: "",
        href: "/services",
        linkLabel: "Learn more",
        image: "/images/home/block-7.jpg",
    },
];

function PhotoBlock({ block }: { block: Block }) {
    return (
        <section className="relative min-h-[80vh] border-b border-black/10 pt-20">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${block.image})` }}
            />
            <div className="absolute inset-0 bg-black/45" />

            <div className="relative mx-auto flex min-h-[80vh] max-w-6xl items-center px-4 py-24 sm:px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="whitespace-nowrap text-[clamp(22px,3.8vw,60px)] font-semibold tracking-tight text-white">
                        {block.title}
                    </h2>

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
                {/* Main hero */}
                <section className="relative min-h-[80vh] border-b border-black/10 pt-20">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${hero.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/45" />

                    {/* Top-center label */}
                    <div className="pointer-events-none absolute top-7 left-1/2 -translate-x-1/2">
                        <div className="text-base font-semibold tracking-[0.35em] text-white sm:text-lg">
                            THEHNC.COM
                        </div>
                    </div>

                    <div className="relative mx-auto flex min-h-[80vh] max-w-6xl items-center px-4 py-24 sm:px-6">
                        <div className="mx-auto max-w-4xl text-center">
                            <h1 className="whitespace-nowrap text-[clamp(28px,6vw,72px)] font-semibold tracking-[0.12em] text-white">
                                {hero.title}
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Service hero sections */}
                {serviceBlocks.map((block) => (
                    <PhotoBlock key={block.title} block={block} />
                ))}

                {/* Final CTA */}
                <section className="border-b border-black/10 bg-white">
                    <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
                        <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                            Ready to start your project?
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg text-black/70 sm:text-xl">
                            Tell us about your property and timeline — we’ll respond with next
                            steps.
                        </p>

                        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex rounded-full bg-yellow-500 px-7 py-3 text-sm font-semibold text-black hover:bg-yellow-400"
                            >
                                Request a Quote
                            </Link>

                            <Link
                                href="mailto:info@theHNC.com"
                                className="inline-flex rounded-full border border-black/15 bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
                            >
                                Email info@theHNC.com
                            </Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}