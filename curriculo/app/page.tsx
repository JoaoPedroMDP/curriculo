'use client';
import curriculumData from './data/data';
import BannerSection from './components/sections/bannerSection';
import LearnablesSection from './components/sections/learnablesSection';
import { Skill, Tool } from './objects/learnables';
import ExperiencesSection from './components/sections/experiencesSection';

export default function Home() {
    let tools = Tool.collectTools(["Python", "Django", "Flask", "FastAPI", "NodeJS", "Express", "React", "NextJS", "TypeScript", "JavaScript", "HTML", "CSS", "SASS"]);
    let skills = Skill.collectSkills(["Liderança", "Comunicação", "Trabalho em equipe", "Proatividade", "Resiliência", "Adaptabilidade", "Empatia", "Organização", "Pensamento crítico"]);

    return(
        <section id="site" className="flex flex-col">
            <BannerSection curriculumData={curriculumData}/>
            <LearnablesSection tools={tools} skills={skills}/>
            <ExperiencesSection professionalExperiences={curriculumData.professional_experiences} academicExperiences={curriculumData.academic_experiences} />
        </section>
    );
}