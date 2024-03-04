'use client';
import {curriculumData, institutions as raw_inst} from './data/data';
import BannerSection from './components/sections/bannerSection';
import LearnablesSection from './components/sections/learnablesSection';
import { Skill, Tool } from './objects/learnables';
import ExperiencesSection from './components/sections/experiencesSection';
import AchievementsSection from './components/sections/achievementsSection';

export default function Home() {
    let tools = Tool.collectTools(["Python", "Django", "Flask", "FastAPI", "NodeJS", "Express", "React", "NextJS", "TypeScript", "JavaScript", "HTML", "CSS", "SASS"]);
    let skills = Skill.collectSkills(["Liderança", "Comunicação", "Trabalho em equipe", "Proatividade", "Resiliência", "Adaptabilidade", "Empatia", "Organização", "Pensamento crítico"]);
    
    return(
        <section id="site" className="flex flex-col">
            <BannerSection curriculumData={curriculumData}/>
            <ExperiencesSection />
            <LearnablesSection tools={tools} skills={skills}/>
            <AchievementsSection />
        </section>
    );
}