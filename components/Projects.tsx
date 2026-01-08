import { Project } from "@/types";
import { ExternalLink } from "lucide-react";

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Projects</h3>

            <div className="grid grid-cols-1 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 transition-shadow duration-200"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h4 className="font-bold text-gray-900">
                                {project.name}
                            </h4>
                            {/* <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                            >
                                <ExternalLink className="w-4 h-4" />
                                View Project
                            </a> */}
                        </div>

                        <p className="text-gray-600 mb-5">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
