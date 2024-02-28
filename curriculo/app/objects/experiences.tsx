import { JSX } from "react"
import Interval from "./interval"
import { Skill, Tool } from "./learnables"

class ExpBuilder{
    static build(data: any): Experience{
        let experience: Experience;
        switch(data.type){
            case "job":
                experience = Job.fromData(data);
                break;
            case "course":
                experience = Course.fromData(data);
                break;
            case "research":
                experience = Research.fromData(data);
                break;
            case "paper":
                experience = Paper.fromData(data);
                break;
            default:
                experience = Experience.fromData(data);
                break;
        }
        return experience;
    }

    static buildAll(data: any[]): Experience[]{
        let experiences: Experience[] = [];
        data.forEach((experienceData) => {
            experiences.push(ExpBuilder.build(experienceData));
        });
        return experiences;
    }
}

class Experience {
    id: string
    institution: string
    type: string
    description: string
    raw_tools: string[] = []
    raw_skills: string[] = []
    tools: Tool[] = []
    skills: Skill[] = []
    constructor({id, institution, type, description, raw_tools, raw_skills}: Experience) {
        this.id = id
        this.institution = institution
        this.type = type
        this.description = description
        this.raw_tools = raw_tools
        this.raw_skills = raw_skills

        this.tools = Tool.collectTools(this.raw_tools);
        this.skills = Skill.collectSkills(this.raw_skills);
    }

    static fromData(data: any){
        return new Experience(data);
    }

    renderPosition(){
        return <></>;
    }

    renderInterval(){
        return <></>;
    }

    renderHeaders(){
        return (
            <>
            {this.renderPosition()}
            {this.renderInterval()}
            </>
        );
    }

    render(): JSX.Element{
        return (
            <div key={this.id} className="mt-10">
                <p className="font-raleway font-bold text-[34px]">{this.institution}</p>
                {this.renderHeaders()}
                <p className="pt-5 text-[20px]">{this.description}</p>
            </div>
        );
    }
}

class Job extends Experience {
    position: string
    interval: Interval

    constructor({position, interval, ...experience}: Job & Experience) {
        experience.type = "job"
        super(experience as Experience)
        this.position = position
        this.interval = Interval.fromData(interval);
    }

    renderPosition(){
        return <p className="font-raleway font-bold text-[28px]">{this.position}</p>;
    }

    renderInterval(){
        return <p className="font-raleway text-[24px]">{this.interval.render()}</p>;
    }
}

class Course extends Experience {
    name: string
    interval: Interval
    level: string

    constructor({name, interval, level, ...experience}: Course & Experience) {
        experience.type = "course";
        super(experience as Experience);
        this.name = name;
        this.interval = Interval.fromData(interval);
        this.level = level;
    }

    renderPosition(){
        return <p className="font-raleway font-bold text-[28px]">{this.level + ': '+ this.name}</p>;
    }

    renderInterval(){
        return <p className="font-raleway text-[24px]">{this.interval.render()}</p>;
    }
}

class Research extends Experience {
    subject: string
    interval: Interval

    constructor({subject, interval, ...experience}: Research & Experience) {
        experience.type = "research";
        super(experience as Experience);
        this.subject = subject
        this.interval = Interval.fromData(interval);
    }

    renderPosition(){
        return <p className="font-raleway font-bold text-[28px]">Pesquisa sobre {this.subject}</p>;
    }

    renderInterval(){
        return <p className="font-raleway text-[24px]">{this.interval.render()}</p>;
    }
}

class Paper extends Experience {
    title: string
    publication_date: string
    magazine: string

    constructor({title, publication_date, magazine, ...experience}: Paper & Experience) {
        experience.type = "paper";
        super(experience as Experience);
        this.title = title
        this.publication_date = publication_date
        this.magazine = magazine
    }

    renderHeaders(){
        return(
            <>
                <p className="font-raleway font-bold text-[28px]">Artigo: &quot;{this.title}&quot;</p>
                <p className="font-raleway text-[24px]">Revista {this.magazine}. {
                    this.publication_date 
                    ? `Publicado em ${this.publication_date}.`
                    : "Em revisão."
                    }</p>
            </>
        );
    }
}

export { ExpBuilder, Experience, Job, Course, Research, Paper }