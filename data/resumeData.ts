import { ResumeData } from "@/types";

export const resumeData: ResumeData = {
    name: "Nguyen Truong Gia",
    title: ".NET Developer",
    location: "Ho Chi Minh City, Vietnam",
    description:
        "I'm a .Net Developer with experience in C#.NET technologies and Angular Framework, with good knowledge of Object-Oriented Analysis and Database Design, and Design Patterns. I seeking a full-time position in the IT industry, working as a professional .Net developer, apply all of my knowledge, skills, and understanding of software designing and developing to become a Professional Software Developer, and more than that to become a Solution Architect, and or become a Project Manager in the future.",
    phone: "+84 933 488 010",
    email: "truonggia1708@gmail.com",
    github: "https://github.com/taolagiakaka",
    linkedin: "https://linkedin.com/in/",
    experiences: [
        {
            company: "GSoft",
            position: ".NET Developer",
            period: "Apr 2020 - Dec 2021",
            description:
                "Developed and maintained .NET applications. Worked with SQL Server and Entity Framework.",
        },
        {
            company: "3S Software",
            position: "Internship",
            period: "May 2019 - Dec 2019",
            description:
                "Develop a system to schedule work for sales staff. Develop process management of the order.",
        },
    ],
    projects: [
        {
            name: "GAMSPRO SYSTEM BVB",
            description:
                "Investment management system for procurement and asset management for the Viet Capital Bank. \n Develop the process of creating a new purchase order.",
            link: "#",
            technologies: ["C#", ".NET", "SQL", "Angular"],
        },
        {
            name: "GAMSPRO BVNT",
            description:
                "Investment management system for procurement and asset management forthe Baoviet Life. \n Deploy software based on customer requirements.",
            link: "#",
            technologies: ["C#", ".NET", "SQL", "Angular"],
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
    education: [
        {
            institution: "Open University",
            degree: "Bachelor's Degree in Computer Science",
            period: "Oct 2016 - Oct 2020",
        },
    ],
};
