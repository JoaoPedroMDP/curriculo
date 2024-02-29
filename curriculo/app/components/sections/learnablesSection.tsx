import { Skill, Tool } from "../../objects/learnables";
import LearnableC from "../learnableC";


export default function LearnablesSection({skills, tools}: 
    {skills: Skill[], tools: Tool[]})
{

    return(
        <section id="learnables" className="flex flex-row flex-wrap align-middle w-full">
            <div className="flex flex-col lg:flex-grow">
                <div id="tools" className="flex flex-row flex-wrap bg-lightBlue align-middle">
                    {tools.map((tool) => 
                        <LearnableC key={tool.id} learnable={tool.toObject()}/>
                    )}
                </div>            </div>
            <div className="flex flex-col lg:flex-grow">
                <div id="skills" className="flex flex-row flex-wrap bg-yellow align-middle">
                    {skills.map((skill) => 
                        <LearnableC key={skill.id} learnable={skill.toObject()}/>
                    )}
                </div>
            </div>
        </section>
    );
};