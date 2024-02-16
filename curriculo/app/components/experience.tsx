import { Course, Job, Paper } from "../objects/experiences";
import Interval from "../objects/interval";
import { Skill, Tool } from "../objects/learnables";

export default function Experience({ experience_data }: any) {

    var tools: Tool[] = [];
    if (experience_data.tools !== undefined) {
        tools = experience_data.tools.map((raw_t: string) => new Tool(raw_t))
    }

    var skills: Skill[] = [];
    if (experience_data.skills !== undefined) {
        skills = experience_data.skills.map((raw_s: string) => new Skill(raw_s))
    }

    var interval: Interval;
    if (experience_data.dates !== undefined) {
        interval = new Interval(experience_data.dates.start, experience_data.dates.end);
    }


    var exp;
    if (experience_data.type === "job") {
        exp = new Job(
            experience_data.id,
            experience_data.institution,
            experience_data.position,
            interval,
            experience_data.description,
        );
    } else if (experience_data.type === "course" || experience_data.type === "research") {
        exp = new Course(
            experience_data.id,
            experience_data.institution,
            experience_data.name,
            interval,
            experience_data.description,
        );
    } else if (experience_data.type === "paper") {
        exp = new Paper(
            experience_data.id,
            experience_data.institution,
            experience_data.title,
            experience_data.publication_date,
            experience_data.description,
        );
    }

    if (exp === undefined) {
        console.log(experience_data);
        return (<></>);
    }

    return (
        <div className="mt-10">
            <p className="font-raleway font-bold text-[34px]">{exp.institution}</p>
                {exp.hasPosition()
                    ?<div className="flex flex-row justify-start gap-10">
                        <p className="font-raleway text-[24px]">{exp.position}</p>
                    </div>
                    : null
                }

                {exp.hasInterval()
                    ? exp.interval.render()
                    : null
                }
                
                {tools.length > 0
                    ?<div className="flex flex-row flex-wrap gap-2 pt-2">
                    {tools.map((tool) => {
                        return tool.render();
                    })}
                    </div>
                    : null
                }
                {skills.length > 0
                    ?<div className="flex flex-row flex-wrap gap-2 pt-2">
                    {skills.map((skill) => {
                        return skill.render();
                    })}
                    </div>
                    : null
                }
            <p className="pt-5 text-[20px]">{exp.description}</p>
        </div>
    );
};