import { ExpBuilder, Experience } from "./experiences";

class Institution {
    id: string
    name: string;
    experiences: Experience[] | any[] = [];

    constructor({id, name, experiences}: Institution){
        this.id = id;
        this.name = name;
        this.experiences = ExpBuilder.buildAll(experiences);
    }

    static collectAll(raw_institutions: any[]){
        let all: Institution[] = [];
        raw_institutions.forEach((raw_inst, index)=>{
            all.push(new Institution(raw_inst));
        });

        return all;
    }
}

export { Institution };