interface SkillsProps {
    skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
    return (
        <section id="skills">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Skills</h3>

            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}
