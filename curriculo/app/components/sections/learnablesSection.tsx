'use client';
import { Skill, Tool } from "../../objects/learnables";
import LearnableC from "../learnableC";
import {default as expDao} from "../../data/daos/experienceDAO";
import { Experience } from "@/app/objects/experiences";
import { useMemo } from "react";

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

    let allSKills = Object.values(skills);
    let allTools = Object.values(tools);
    allSKills.sort((a, b) => a.name.localeCompare(b.name));
    allTools.sort((a, b) => a.name.localeCompare(b.name));
    return [allSKills, allTools];
}

export default function LearnablesSection({updateFilters}: {updateFilters: CallableFunction}){
    const [skills, tools] = useMemo(() => collectAllLearnables(), []);

    return(
        <section id="learnables" className="bg-black">
            <div className="font-raleway flex flex-col flex-wrap align-middle py-2">
                <h1 className="text-center mt-4 text-[50px] lg:text-[60px] font-bold">Ferramentas</h1>
                <div className="flex flex-col lg:flex-row px-5 sm:px-10 my-5 gap-5">
                    <div className="lg:basis-1/2 flex rounded-3xl flex-col bg-mediumBlue text-whiteBlue">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-center basis-1/2 text-[40px] sm:text-[50px]">Soft skills</h1>
                        </div>
                        <div id="skills" className="flex flex-col sm:flex-row flex-wrap align-middle">
                            {skills.map((skill) => 
                                <LearnableC key={skill.name} learnable={skill} onClickHandler={updateFilters}/>
                            )}
                        </div>
                    </div>
                    <div className="lg:basis-1/2 flex flex-col rounded-3xl bg-lightBlue text-darkBlue">
                        <h1 className="text-center text-[50px]">Hard skills</h1>
                        <div id="tools" className="flex flex-row flex-wrap align-middle">
                            {tools.map((tool) => 
                                <LearnableC key={tool.name} learnable={tool} onClickHandler={updateFilters}/>
                            )}
                        </div>
                    </div>
                </div>
                <span className="text-yellow text-center text-[20px]">&#40;Você pode selecionar itens acima para filtrar as experiências abaixo ;&#41;</span>
            </div>
        </section>
    );
};