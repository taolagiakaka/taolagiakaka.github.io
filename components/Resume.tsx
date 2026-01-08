import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const RESUME_DATA = {
    name: "Nguyen Truong Gia",
    initials: "NG",
    title: ".NET Developer",
    about: "Based in Ho Chi Minh City, Vietnam. I am a passionate .NET Developer with a strong focus on building scalable and efficient web applications.",
    contact: {
        email: "email@example.com",
        location: "Ho Chi Minh City, Vietnam",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/taolagiakaka",
            },
            {
                name: "LinkedIn",
                url: "https://linkedin.com/in/",
            },
        ],
    },
    education: [
        {
            school: "University Name",
            degree: "Bachelor's Degree in Computer Science",
            start: "2019",
            end: "2023",
        },
    ],
    experience: [
        {
            company: "Company Name",
            link: "https://company.com",
            badges: ["On-site"],
            title: ".NET Developer",
            start: "2023",
            end: "Present",
            description:
                "Developed and maintained .NET applications. Worked with SQL Server and Entity Framework.",
        },
    ],
    skills: [
        ".NET Core",
        "C#",
        "ASP.NET MVC",
        "Entity Framework",
        "SQL Server",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Git",
    ],
    projects: [
        {
            title: "Project Name",
            techStack: ["C#", ".NET", "SQL"],
            description:
                "A brief description of the project and your role in it.",
            link: {
                label: "github.com",
                href: "https://github.com/taolagiakaka",
            },
        },
    ],
};

const Resume = () => {
    return (
        <section className="bg-gray-50 py-16" id="resume">
            <MaxWidthWrapper>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                    {/* Header */}
                    <div
                        id="about"
                        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-gray-100 pb-10 scroll-mt-24"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                {RESUME_DATA.name}
                            </h2>
                            <p className="text-lg text-gray-600">
                                {RESUME_DATA.title}
                            </p>
                            <p className="text-sm text-gray-500 mt-2 max-w-md">
                                {RESUME_DATA.about}
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end gap-2">
                            <a
                                href={`mailto:${RESUME_DATA.contact.email}`}
                                className="text-sm text-gray-600 hover:text-primary transition-colors"
                            >
                                {RESUME_DATA.contact.email}
                            </a>
                            <p className="text-sm text-gray-600">
                                {RESUME_DATA.contact.location}
                            </p>
                            <div className="flex gap-4 mt-2">
                                {RESUME_DATA.contact.social.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gray-900 text-sm underline"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Left Column */}
                        <div className="md:col-span-2 space-y-10">
                            {/* Experience */}
                            <section id="experience" className="scroll-mt-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    Work Experience
                                </h3>
                                <div className="space-y-8">
                                    {RESUME_DATA.experience.map(
                                        (work, index) => (
                                            <div
                                                key={index}
                                                className="relative pl-6 border-l-2 border-gray-100"
                                            >
                                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm"></div>
                                                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                                                    <h4 className="font-semibold text-gray-900">
                                                        {work.company}
                                                    </h4>
                                                    <span className="text-xs font-mono text-gray-500">
                                                        {work.start} -{" "}
                                                        {work.end}
                                                    </span>
                                                </div>
                                                <p className="text-sm font-medium text-gray-700 mb-2">
                                                    {work.title}
                                                </p>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {work.description}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </section>

                            {/* Projects */}
                            <section>
                                <h3 className="text-xl font-bold text-gray-900 mb-6">
                                    Projects
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {RESUME_DATA.projects.map(
                                        (project, index) => (
                                            <div
                                                key={index}
                                                className="p-4 rounded-lg bg-gray-50 border border-gray-100"
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-semibold text-gray-900 text-sm">
                                                        {project.title}
                                                    </h4>
                                                    {project.link && (
                                                        <a
                                                            href={
                                                                project.link
                                                                    .href
                                                            }
                                                            className="text-xs text-blue-600 hover:underline"
                                                        >
                                                            View Project
                                                        </a>
                                                    )}
                                                </div>
                                                <p className="text-xs text-gray-600 mb-3">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.techStack.map(
                                                        (tech) => (
                                                            <span
                                                                key={tech}
                                                                className="px-2 py-1 rounded bg-white border border-gray-200 text-[10px] text-gray-600 uppercase font-medium"
                                                            >
                                                                {tech}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </section>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-10">
                            {/* Skills */}
                            <section id="skills" className="scroll-mt-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">
                                    Skills
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {RESUME_DATA.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            {/* Education */}
                            <section id="education" className="scroll-mt-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">
                                    Education
                                </h3>
                                <div className="space-y-6">
                                    {RESUME_DATA.education.map((edu, index) => (
                                        <div key={index}>
                                            <h4 className="font-semibold text-gray-900 text-sm">
                                                {edu.school}
                                            </h4>
                                            <p className="text-xs text-gray-600 mt-1">
                                                {edu.degree}
                                            </p>
                                            <p className="text-xs text-gray-400 mt-1">
                                                {edu.start} - {edu.end}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Resume;
