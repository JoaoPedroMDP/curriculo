import Interval from "./interval"
import { Skill, Tool } from "./learnables"

class Experience {
    id: string
    institution: string
    type: string
    description: string
    tools: Tool[] = []
    skills: Skill[] = []

    constructor(id: string, institution: string, type: string, description: string, tools: Tool[] = [], skills: Skill[] = []) {
        this.id = id
        this.institution = institution
        this.type = type
        this.description = description
        this.tools = tools
        this.skills = skills
    }

    hasPosition() {
        return false;
    }

    hasInterval() {
        return false;
    }
}

class Job extends Experience {
    position: string
    interval: Interval

    constructor(id: string, institution: string, position: string, interval: Interval, description: string) {
        super(id, institution, "job", description)
        this.position = position
        this.interval = interval
    }

    hasPosition() {
        return true;
    }

    hasInterval() {
        return true;
    }
}

class Course extends Experience {
    name: string
    interval: Interval

    constructor(id: string, institution: string, name: string, interval: Interval, description: string) {
        super(id, institution, "course", description)
        this.name = name
        this.interval = interval
    }

    hasInterval() {
        return true;
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

    hasInterval(): boolean {
        return false;
    }
}

export { Job, Course, Paper }