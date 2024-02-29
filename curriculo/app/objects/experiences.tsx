import { JSX } from "react"
import Interval from "./interval"
import { Skill, Tool } from "./learnables"

class ExpBuilder{
    static build(data: any): Experience{
        let experience: Experience;
        switch(data.type){
            case "job":
                experience = new Job(data);
                break;
            case "course":
                experience = new Course(data);
                break;
            case "research":
                experience = new Research(data);
                break;
            case "paper":
                experience = new Paper(data);
                break;
            default:
                experience = new Experience(data);
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
    type: string
    description: string
    tools?: Tool[] = []
    skills?: Skill[] = []

    constructor({id, type, description, tools, skills}: Experience) {
        this.id = id
        this.type = type
        this.description = description
        // Essee 'as unknown as string[]' é uma gambiarra para contornar o erro de tipagem. 
        // No construtor sempre vem como string, mas não queria criar uma tipagem enorme aqui no objeto.
        if(tools != undefined){
            this.tools = Tool.collectTools(tools as unknown as string[]);
        }

        if(skills != undefined){
            this.skills = Skill.collectSkills(skills as unknown as string[]);
        }
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
            <div>
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