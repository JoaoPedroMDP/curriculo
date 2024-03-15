import instDao from "../data/daos/institutionDAO"
import HasDate from "./base/hasDate"
import CustomDate from "./customDate"

export default class Achievement extends HasDate{
    id: string
    title: string
    description: string
    date: string
    institution_name: string

    constructor({id, title, description, date, institution_id}: {id: string, title: string, description: string, date: string, institution_id: string}){
        super();
        this.id = id
        this.title = title
        this.description = description
        this.institution_name = this.getInstitutionName(institution_id);
        this.date = date
    }

    getInstitutionName(institution_id: string){
        let filters = [{field: "id", value: institution_id}]
        let institution = instDao.filter(filters)[0];
        return institution.name;
    }

    static collectAll(raw_achievements: any[]){
        let all: Achievement[] = [];
        raw_achievements.forEach((raw_achiev, index)=>{
            all.push(new Achievement(raw_achiev));
        });

        return all;
    }

    render(){
        let date = new CustomDate(this.date as unknown as string) ;

        return (
            <div key={this.id}
            className="flex flex-col items-center justify-between p-5 min-w-[150px] rounded-3xl border-[1px] shadow-2xl text-center 
            text-darkBlue hover:text-yellow border-darkBlue hover:bg-darkBlue
            transition-all duration-300 ease-out m-5"
            >
                <h2 className="font-raleway font-bold text-[32px]">{this.title}</h2>
                <p className="font-raleway text-[24px]">{this.description}</p>
                <span className="font-raleway font-bold text-[32px] italic">{this.institution_name}</span>
                <span className="font-raleway text-[24px]">{date.toMonthYear()}</span>
            </div>
        );
    }
}