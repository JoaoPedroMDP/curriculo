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

    renderPosition(position: string = ""){
        return <p className="font-raleway font-bold text-[18px] sm:text-[28px]">{position}</p>;
    }

    renderInterval(interval: string = ""){
        return <p className="font-raleway text-[17px] sm:text-[20px]">{interval}</p>;
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
            <div className="my-5">
                {this.renderHeaders()}
                <p className="pt-2 text-[15px] sm:text-[20px]">{this.description}</p>
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

    renderPosition(position: string = ""){
        return super.renderPosition(this.position);
    }

    renderInterval(interval: string = ""){
        return super.renderInterval(this.interval.render());
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

    renderPosition(position: string = ""){
        return super.renderPosition(this.level + ': '+ this.name);
    }

    renderInterval(interval: string = ""){
        return super.renderInterval(this.interval.render());
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

    renderPosition(position: string = ""){
        return super.renderPosition("Pesquisa sobre " + this.subject);
    }

    renderInterval(interval: string = ""){
        return super.renderInterval(this.interval.render());
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

    renderPosition(position?: string): JSX.Element {
        return super.renderPosition(`Artigo: "${this.title}"`);
    }

    renderInterval(interval?: string): JSX.Element {
        return super.renderInterval(`Revista ${this.magazine}. ${this.publication_date ? `Publicado em ${this.publication_date}.` : "Em revisão."}`);
    }
}

export { ExpBuilder, Experience, Job, Course, Research, Paper }