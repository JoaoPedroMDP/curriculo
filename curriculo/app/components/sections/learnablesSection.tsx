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

export default function LearnablesSection({filters}: {filters: string[]}){
    const [skills, tools] = collectAllLearnables();

    return(
        <section id="learnables" className="flex flex-row flex-wrap align-middle w-full">
            <div className="flex flex-col lg:flex-grow">
                <div id="skills" className=" flex flex-row flex-wrap bg-mediumBlue text-whiteBlue align-middle">
                    {skills.map((skill) => 
                        <LearnableC key={skill.id} learnable={skill.toObject()}/>
                    )}
                </div>
            </div>
            <div className="flex flex-col lg:flex-grow">
                <div id="tools" className="flex flex-row flex-wrap bg-lightBlue text-darkBlue align-middle">
                    {tools.map((tool) => 
                        <LearnableC key={tool.id} learnable={tool.toObject()}/>
                    )}
                </div>
            </div>
        </section>
    );
};