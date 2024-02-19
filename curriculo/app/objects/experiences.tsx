import Interval from "./interval"
import { Skill, Tool } from "./learnables"

class Experience {
    id: string
    institution: string
    type: string
    description: string
    tools: Tool[] = []
    skills: Skill[] = []

    constructor(id: string, institution: string, type: string, description: string, tools: string[] = [], skills: string[] = []) {
        this.id = id
        this.institution = institution
        this.type = type
        this.description = description
        this.tools = Tool.collectTools(tools);
        this.skills = Skill.collectSkills(skills);
    }

    renderPosition(){
        return <></>;
    }

    renderInterval(){
        return <></>;
    }

    render(): JSX.Element{
        return (
            <div key={this.id} className="mt-10">
                <p className="font-raleway font-bold text-[34px]">{this.institution}</p>
                    {this.renderPosition()}
                    {this.renderInterval()}
                    
                    {this.tools.length > 0
                        ?<div className="flex flex-row flex-wrap gap-2 pt-2">
                        {this.tools.map((tool) => {
                            return tool.render();
                        })}
                        </div>
                        : null
                    }
                    {this.skills.length > 0
                        ?<div className="flex flex-row flex-wrap gap-2 pt-2">
                        {this.skills.map((skill) => {
                            return skill.render();
                        })}
                        </div>
                        : null
                    }
                <p className="pt-5 text-[20px]">{this.description}</p>
            </div>
        );
    }
}

class Job extends Experience {
    position: string
    interval: Interval

    constructor(id: string, institution: string, position: string, interval: any, description: string, tools: string[] = [], skills: string[] = []) {
        super(id, institution, "job", description, tools, skills)
        this.position = position
        this.interval = Interval.fromData(interval);
    }

    renderPosition(){
        return <p className="font-raleway font-bold text-[32px]">{this.position}</p>;
    }

    renderInterval(){
        return <p className="font-raleway text-[24px]">{this.interval.render()}</p>;
    }
}

class Course extends Experience {
    name: string
    interval: Interval

    constructor(id: string, institution: string, name: string, interval: any, description: string, tools: string[] = [], skills: string[] = []) {
        super(id, institution, "course", description, tools, skills);
        this.name = name
        this.interval = Interval.fromData(interval);
    }

    renderPosition(){
        return <p className="font-raleway font-bold text-[32px]">{this.name}</p>;
    }

    renderInterval(){
        return <p className="font-raleway text-[24px]">{this.interval.render()}</p>;
    }
}

class Paper extends Experience {
    title: string
    publication_date: string

    constructor(id: string, institution: string, title: string, publication_date: string, description: string) {
        super(id, institution, "paper", description)
        this.title = title
        this.publication_date = publication_date
    }
}

export { Experience, Job, Course, Paper }