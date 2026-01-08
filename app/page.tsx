import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/NavBar";
import ResumeSection from "@/components/ResumeSection";
import { resumeData } from "@/data/resumeData";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <HeroSection
                name={resumeData.name}
                title={resumeData.title}
                location={resumeData.location}
            />
            <ResumeSection data={resumeData} />
        </main>
    );
}
