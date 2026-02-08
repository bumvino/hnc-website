import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Image from "next/image";

import projectsHero from "../../../public/images/hero/projects.jpg";

type Project = {
    title: string;
    location?: string;
    image: string;
};

const projects: Project[] = [
    { title: "Commercial Renovation", image: "/images/projects/placeholder.jpg" },
    { title: "Apartment Building Upgrade", image: "/images/projects/placeholder.jpg" },
    { title: "Retail Store Fit-Out", image: "/images/projects/placeholder.jpg" },
    { title: "Roofing Replacement", image: "/images/projects/placeholder.jpg" },
    { title: "HVAC System Upgrade", image: "/images/projects/placeholder.jpg" },
    { title: "Turnkey Delivery", image: "/images/projects/placeholder.jpg" },
];

export default function ProjectsPage() {
    return (
        <>
            <Header />

            {/* Title ON the photo */}
            <PageHero title="Projects" image={projectsHero} />

            <main className="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6">
                {/* Title BELOW the photo */}
                <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
                    Projects
                </h1>

                <div className="mx-auto mt-10 max-w-4xl text-center">
                    <p className="text-xl leading-relaxed text-black/80 sm:text-2xl">
                        A selection of commercial work delivered by Hana Contractors.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => (
                        <article key={p.title} className="border-t border-black/10 pt-4">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-black/5">
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            <h2 className="mt-3 text-sm font-semibold text-black/80">
                                {p.title}
                            </h2>
                        </article>
                    ))}
                </div>
            </main>
        </>
    );
}