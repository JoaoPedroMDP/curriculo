import { Course, Job, Paper } from "../objects/experiences";
import Interval from "../objects/interval";
import { Skill, Tool } from "../objects/learnables";

export default function Experience({ experience_data }: any): JSX.Element{

    var tools: Tool[] = [];
    if (experience_data.tools !== undefined) {
        tools = experience_data.tools.map((raw_t: string) => new Tool(raw_t))
    }

    var skills: Skill[] = [];
    if (experience_data.skills !== undefined) {
        skills = experience_data.skills.map((raw_s: string) => new Skill(raw_s))
    }

    if (experience_data.type === "job") {
        let interval: Interval = new Interval(experience_data.dates.start, experience_data.dates.end);
        
        var job: Job = new Job(
            experience_data.id,
            experience_data.institution,
            experience_data.position,
            interval,
            experience_data.description,
            tools,
            skills
        );

        return job.render();
    }
    
    if (experience_data.type === "course" || experience_data.type === "research") {
        let interval: Interval = new Interval(experience_data.dates.start, experience_data.dates.end);

        var acad = new Course(
            experience_data.id,
            experience_data.institution,
            experience_data.name,
            interval,
            experience_data.description,
            tools,
            skills
        );

        return acad.render();
    } 
    
    if (experience_data.type === "paper") {
        var paper = new Paper(
            experience_data.id,
            experience_data.institution,
            experience_data.title,
            experience_data.publication_date,
            experience_data.description,
        );

        return paper.render();
    }
    

    return <></>;

};