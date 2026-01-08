import { Experience as ExperienceType } from "@/types";
import { Calendar } from "lucide-react";

interface ExperienceProps {
    experiences: ExperienceType[];
}

export default function Experience({ experiences }: ExperienceProps) {
    return (
        <section id="experience">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                Work Experience
            </h3>

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="relative pl-8 border-l-2 border-gray-200"
                    >
                        <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>

                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3">
                            <h4 className="font-bold text-lg text-gray-900">
                                {exp.company}
                            </h4>
                            <span className="text-sm font-mono text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                {exp.period}
                            </span>
                        </div>

                        <p className="font-semibold text-gray-700 mb-3">
                            {exp.position}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
