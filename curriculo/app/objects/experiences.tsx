import Interval from "./interval"

class Experience {
    institution: string
    type: string
    description: string

    constructor(institution: string, type: string, description: string) {
        this.institution = institution
        this.type = type
        this.description = description
    }
}

class Job extends Experience {
    position: string
    interval: Interval

    constructor(institution: string, type: string, description: string, position: string, interval: Interval) {
        super(institution, type, description)
        this.position = position
        this.interval = interval
    }
}

class Course extends Experience {
    name: string
    interval: Interval

    constructor(institution: string, type: string, description: string, name: string, interval: Interval) {
        super(institution, type, description)
        this.name = name
        this.interval = interval
    }
}

class Paper extends Experience {
    title: string
    publication_date: string

    constructor(institution: string, type: string, description: string, title: string, publication_date: string) {
        super(institution, type, description)
        this.title = title
        this.publication_date = publication_date
    }
}

export { Job, Course, Paper }