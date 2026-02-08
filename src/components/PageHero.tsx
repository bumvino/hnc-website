import Image from "next/image";

type PageHeroProps = {
    title: string;
    image: any;
};

export default function PageHero({ title, image }: PageHeroProps) {
    return (
        <section className="relative h-[40vh] min-h-[320px] w-full">
            <Image
                src={image}
                alt={title}
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                    {title}
                </h1>
            </div>
        </section>
    );
}