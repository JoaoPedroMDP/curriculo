import CustomDate from "./date"

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

    render(){
        let date = this.date.getMonth() + " de " + this.date.getFullYear();

        return (
            <div className="shadow-2xl flex flex-col items-center p-5 gap-5">
                <h2 className="font-raleway font-bold text-[32px]">{this.title}</h2>
                <p className="font-raleway text-[24px]">{this.description}</p>
                <span className="font-raleway font-bold text-[32px] italic">{this.institution}</span>
                <span className="font-raleway text-[24px]">{date}</span>
            </div>
        );
    }
}