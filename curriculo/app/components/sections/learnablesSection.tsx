'use client';
import { Skill, Tool } from "../../objects/learnables";
import LearnableC from "../learnableC";
import {default as expDao} from "../../data/daos/experienceDAO";
import { Experience } from "@/app/objects/experiences";

function collectAllLearnables(): [Tool[], Skill[]]{
    let tools: {[key: string]: Tool} = {};
    let skills: {[key: string]: Skill} = {};
    let experiences: Experience[] = expDao.getAll();
    
    experiences.forEach((experience) => {
        if(experience.tools != undefined){
            experience.tools.forEach((tool) => {tools[tool.name] = tool;});
        }
        
        if(experience.skills != undefined){
            experience.skills.forEach((skill) => {skills[skill.name] = skill;});
        }
    });

    return [Object.values(skills), Object.values(tools)];
}

export default function LearnablesSection({filters, updateFilters}: {filters: string[], updateFilters: CallableFunction}){
    const [skills, tools] = collectAllLearnables();

    return(
        <section id="learnables" className="font-raleway flex flex-col flex-wrap align-middle w-full">
            <h1 className="text-center mt-5 text-[50px] font-bold">Ferramentas</h1>
            <span className="text-yellow text-center text-[20px]">&#40;Você pode selecionar itens abaixo para filtrar as experiências acima ;&#41;</span>
            <div className="flex flex-col px-20 my-5 gap-5">
                <div className="flex rounded-3xl flex-col lg:flex-grow bg-mediumBlue text-whiteBlue">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-center basis-1/2 text-[50px]">Soft skills</h1>
                    </div>
                    <div id="skills" className=" flex flex-row flex-wrap align-middle">
                        {skills.map((skill) => 
                            <LearnableC key={skill.name} learnable={skill} onClickHandler={updateFilters}/>
                        )}
                    </div>
                </div>
                <div className="flex flex-col rounded-3xl lg:flex-grow bg-lightBlue text-darkBlue">
                    <h1 className="text-center text-[50px]">Hard skills</h1>
                    <div id="tools" className="flex flex-row flex-wrap align-middle">
                        {tools.map((tool) => 
                            <LearnableC key={tool.name} learnable={tool} onClickHandler={updateFilters}/>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};