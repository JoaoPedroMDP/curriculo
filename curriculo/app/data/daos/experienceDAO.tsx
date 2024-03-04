import { Course, Experience, Job, Paper, Research } from "@/app/objects/experiences";
import { experiences } from "../data";
import BaseDAO from "./baseDAO";

class ExpDAO extends BaseDAO{
    dataSource: any[] = experiences;

    build(data: any): Experience {
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

    buildAll(data: any[]): Experience[]{
        let experiences: Experience[] = [];
        data.forEach((experienceData) => {
            experiences.push(this.build(experienceData));
        });
        return experiences;
    }
}

var experienceDao = new ExpDAO();
export default experienceDao;