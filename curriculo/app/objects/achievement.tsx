import CustomDate from "./customDate"

export default class Achievement{
    id: string
    title: string
    description: string
    institution: string
    date: CustomDate

    constructor(id: string, title: string, description: string, institution: string, date: string){
        this.id = id
        this.title = title
        this.description = description
        this.institution = institution
        this.date = new CustomDate(date)
    }

    static fromData(achiev_data: any){
        return new Achievement(achiev_data.id, achiev_data.title, achiev_data.description, achiev_data.institution, achiev_data.date)
    }

    render(){
        return (
            <div key={this.id}
            className="flex flex-col items-center justify-between p-5 min-w-[20vw] 
            sm:max-w-[25vw] rounded-3xl border-[1px] shadow-2xl text-center 
            text-darkBlue hover:text-yellow border-darkBlue hover:bg-darkBlue
            transition-all duration-300 ease-out m-5
            ">
                <h2 className="font-raleway font-bold text-[32px]">{this.title}</h2>
                <p className="font-raleway text-[24px]">{this.description}</p>
                <span className="font-raleway font-bold text-[32px] italic">{this.institution}</span>
                <span className="font-raleway text-[24px]">{this.date.toMonthYear()}</span>
            </div>
        );
    }
}