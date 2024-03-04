import CustomDate from "./customDate"

export default class Achievement{
    id: string
    title: string
    description: string
    date: CustomDate
    institution_name: string

    constructor({id, title, description, date, institution_name}: Achievement){
        this.id = id
        this.title = title
        this.description = description
        this.institution_name = institution_name
        this.date = new CustomDate(date as unknown as string)
    }

    static collectAll(raw_achievements: any[]){
        let all: Achievement[] = [];
        raw_achievements.forEach((raw_achiev, index)=>{
            all.push(new Achievement(raw_achiev));
        });

        return all;
    }

    render(institution: string){
        return (
            <div key={this.id}
            className="flex flex-col items-center justify-between p-5 min-w-[20vw] 
            sm:max-w-[25vw] rounded-3xl border-[1px] shadow-2xl text-center 
            text-darkBlue hover:text-yellow border-darkBlue hover:bg-darkBlue
            transition-all duration-300 ease-out m-5"
            >
                <h2 className="font-raleway font-bold text-[32px]">{this.title}</h2>
                <p className="font-raleway text-[24px]">{this.description}</p>
                <span className="font-raleway font-bold text-[32px] italic">{this.institution_name}</span>
                <span className="font-raleway text-[24px]">{this.date.toMonthYear()}</span>
            </div>
        );
    }
}