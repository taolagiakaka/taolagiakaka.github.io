export interface Experience {
    company: string;
    position: string;
    period: string;
    description: string;
}

export interface Project {
    name: string;
    description: string;
    link: string;
    technologies: string[];
}

export interface Education {
    institution: string;
    degree: string;
    period: string;
}

export interface ResumeData {
    name: string;
    title: string;
    location: string;
    description: string;
    email: string;
    github: string;
    linkedin: string;
    phone: string;
    experiences: Experience[];
    projects: Project[];
    skills: string[];
    education: Education[];
}
