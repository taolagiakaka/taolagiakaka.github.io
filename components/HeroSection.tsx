import Image from "next/image";

interface HeroProps {
    name: string;
    title: string;
    location: string;
}

export default function HeroSection({ name, title, location }: HeroProps) {
    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 flex flex-col items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center">
                <div className="relative w-40 h-40 mx-auto mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30"></div>
                    <div className="relative bg-white rounded-full p-2 shadow-lg">
                        <div className="relative w-36 h-36 rounded-full overflow-hidden">
                            <Image
                                src="/profile.jpg"
                                alt={`${name} profile picture`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 144px) 100vw, 144px"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    Hello! I&apos;m {name}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">
                    {title}
                </h2>
                <p className="text-xl text-gray-600 mb-10">{location}</p>

                <a
                    href="#resume"
                    className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-10 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                    About Me
                </a>
            </div>
        </section>
    );
}
