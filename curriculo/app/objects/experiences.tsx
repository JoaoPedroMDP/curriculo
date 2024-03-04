import { JSX } from "react"
import Interval from "./interval"
import { Skill, Tool } from "./learnables"
import CustomDate from "./customDate"
import HasDate from "./base/hasDate"


class Experience extends HasDate{
    id: string
    type: string
    description: string
    tools?: Tool[] = []
    skills?: Skill[] = []
    start: string

    constructor({id, type, start, description, tools, skills}: Experience) {
        super();
        this.id = id
        this.type = type
        this.description = description
        this.start = start;
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

    renderDates(interval: string = ""){
        return <p className="font-raleway text-[17px] sm:text-[20px]">{interval}</p>;
    }

    renderHeaders(){
        return (
            <>
            {this.renderPosition()}
            {this.renderDates()}
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
    end: string

    constructor({position, end, ...experience}: Job & Experience) {
        experience.type = "job";
        super(experience as Experience);
        this.position = position;
        this.end = end;
    }

    renderPosition(position: string = ""){
        return super.renderPosition(this.position);
    }

    renderDates(interval: string = ""){
        return super.renderDates(new Interval(this.start, this.end).render());
    }
}

class Course extends Experience {
    name: string
    end: string
    level: string

    constructor({name, end, level, ...experience}: Course & Experience) {
        experience.type = "course";
        super(experience as Experience);
        this.name = name;
        this.end = end;
        this.level = level;
    }

    renderPosition(position: string = ""){
        return super.renderPosition(this.level + ': '+ this.name);
    }

    renderDates(interval: string = ""){
        return super.renderDates(new Interval(this.start, this.end).render());
    }
}

class Research extends Experience {
    subject: string
    end: string

    constructor({subject, end, ...experience}: Research & Experience) {
        experience.type = "research";
        super(experience as Experience);
        this.subject = subject
        this.end = end;
    }

    renderPosition(position: string = ""){
        return super.renderPosition("Pesquisa sobre " + this.subject);
    }

    renderDates(interval: string = ""){
        return super.renderDates(new Interval(this.start, this.end).render());
    }
}

class Paper extends Experience {
    title: string
    magazine: string

    constructor({title, magazine, ...experience}: Paper & Experience) {
        experience.type = "paper";
        super(experience as Experience);
        this.title = title;
        this.magazine = magazine;
    }

    renderPosition(position?: string): JSX.Element {
        return super.renderPosition(`Artigo: "${this.title}"`);
    }

    renderDates(interval?: string): JSX.Element {
        return super.renderDates(`Revista ${this.magazine}. ${this.start ? `Publicado em ${this.start}.` : "Em revisão."}`);
    }
}

export { Experience, Job, Course, Research, Paper }