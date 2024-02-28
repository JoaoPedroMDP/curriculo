'use client';
import curriculumData from './data/data';
import Banner from './components/sections/banner';
import Learnables from './components/sections/learnables';
import { Skill, Tool } from './objects/learnables';


export default function Home() {
    let tools = Tool.collectTools(["Python", "Django", "Flask", "FastAPI", "NodeJS", "Express", "React", "NextJS", "TypeScript", "JavaScript", "HTML", "CSS", "SASS"]);
    let skills = Skill.collectSkills(["Liderança", "Comunicação", "Trabalho em equipe", "Proatividade", "Resiliência", "Adaptabilidade", "Empatia", "Organização", "Pensamento crítico"]);
    let teste: string[] = []

    function test(learnable: Skill | Tool){
        console.log(learnable);
    }

    return(
        <section id="site" className="flex flex-col">
            <Banner curriculumData={curriculumData}/>
            <Learnables tools={tools} skills={skills} learnableFilters={teste} updateLearnablesFilter={test}/>
        </section>
    );
}