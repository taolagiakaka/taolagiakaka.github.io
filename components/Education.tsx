import { Education as EducationType } from "@/types";
import { GraduationCap } from "lucide-react";

interface EducationProps {
    education: EducationType[];
}

export default function Education({ education }: EducationProps) {
    return (
        <section id="education">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                Education
            </h3>

            <div className="space-y-6">
                {education.map((edu, index) => (
                    <div key={index} className="p-5 bg-gray-50 rounded-xl">
                        <h4 className="font-bold text-gray-900">
                            {edu.institution}
                        </h4>
                        <p className="text-gray-600 mt-2">{edu.degree}</p>
                        <p className="text-gray-400 text-sm mt-2">
                            {edu.period}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
