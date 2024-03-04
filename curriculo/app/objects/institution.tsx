import {default as expDao} from "@/app/data/daos/experienceDAO";
import HasDate from "./base/hasDate";

class Institution extends HasDate{
    id: number
    name: string;
    start?: string;

    constructor({id, name}: {id: number, name: string}){
        super();
        this.id = id;
        this.name = name;
        this.start = this.getFirstExpDate();
    }

    getFirstExpDate(){
        let filters = [{"field": "institution_id", "value": this.id}];
        // Vou pegar a data de início da primeira experiência dessa instituição

        let allExpsOrdered = expDao.filter(filters).sort((a, b) => a.compareDate(a.start, b.start));
        if(allExpsOrdered){
            return allExpsOrdered[0].start;
        }

        return undefined;
    }

    static collectAll(raw_institutions: any[]){
        let all: Institution[] = [];
        raw_institutions.forEach((raw_inst, index)=>{
            all.push(new Institution(raw_inst));
        });

        return all;
    }

    getExperiences(type: string){
        switch(type){
            case "professional":
                return this.getProfessionalExperiences();
            case "academic":
                return this.getAcademicExperiences();
            default:
                return [];
        };
    }

    getProfessionalExperiences(){
        let filters = [
            {"field": "type", "value": "job"},
            {"field": "institution_id", "value": this.id}
        ];

        return expDao.filter(filters).sort((a, b)=> {return a.compareDate(a.start, b.start, true)});
    }

    getAcademicExperiences(){
        let filters = [
            {"field": "type", "operator": "neq","value": "job"},
            {"field": "institution_id", "value": this.id}
        ];
        return expDao.filter(filters).sort((a, b)=> {return a.compareDate(a.start, b.start, true)});
    }
}

export { Institution };