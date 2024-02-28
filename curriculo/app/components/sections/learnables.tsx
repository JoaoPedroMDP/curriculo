import { Learnable, Skill, Tool } from "../../objects/learnables";
import LearnableC from "../learnableC";

function chunkArray(array: any[], size: number){
    let chunkedArray = [];
    for(let i = 0; i < array.length; i += size){
        chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
}

export default function Learnables({skills, tools}: 
    {skills: Skill[], tools: Tool[], learnableFilters: string[], updateLearnablesFilter: any})
{
    let chunkedSkills = chunkArray(skills, 4);
    let chunkedTools = chunkArray(tools, 4);

    return(
        <section id="learnables" className="flex flex-row justify-center align-middle w-full">
            <div className="flex flex-col flex-grow">
                {chunkedTools.map((chunk, index) => 
                    <div id="tools" key={index} className="flex flex-row flex-wrap justify-evenly bg-lightBlue align-middle">
                    {chunk.map((tool) => 
                        <LearnableC key={tool.id} learnable={tool.toObject()}/>
                    )}
                    </div>    
                )}
            </div>
            <div className="flex flex-col flex-grow">
                {chunkedSkills.map((chunk, index) => 
                    <div id="skills" key={index} className="flex flex-row flex-wrap justify-evenly bg-yellow align-middle">
                    {chunk.map((skill) => 
                        <LearnableC key={skill.id} learnable={skill.toObject()}/>
                    )}
                    </div>    
                )}
            </div>
        </section>
    );
};