import { ResumeData } from "@/types";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";

export default function ResumeSection({ data }: { data: ResumeData }) {
    return (
        <section id="resume" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                    {/* About Section */}
                    <div
                        id="about"
                        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pb-12 border-b border-gray-100"
                    >
                        <div className="md:w-2/3">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                {data.name}
                            </h2>
                            <p className="text-xl text-gray-600 mb-4">
                                {data.title}
                            </p>
                            <p className="text-gray-500 max-w-2xl">
                                {data.description}
                            </p>
                        </div>

                        <div className="mt-6 md:mt-0 md:text-right">
                            <a
                                href={`mailto:${data.email}`}
                                className="block text-gray-600 hover:text-blue-600 transition-colors mb-2"
                            >
                                {data.email}
                            </a>
                            <p className="text-gray-600 mb-4">
                                {data.location}
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href={data.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-gray-900 transition-colors"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={data.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-gray-900 transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Left Column */}
                        <div className="lg:col-span-2 space-y-10">
                            <Experience experiences={data.experiences} />
                            <Projects projects={data.projects} />
                        </div>

                        {/* Right Column */}
                        <div className="space-y-10">
                            <Skills skills={data.skills} />
                            <Education education={data.education} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
