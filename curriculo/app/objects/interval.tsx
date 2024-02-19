import CustomDate from "./customDate";

export default class Interval{
    start: string
    end: string 

    constructor(start: string, end?: string){
        this.start = new CustomDate(start).toMonthYear();
        this.end = end == null ? "Atual" :  new CustomDate(end).toMonthYear();
    }

    static fromData(data: any){
        return new Interval(data.start, data.end);
    }

    render(){
        return(
            <span className="font-raleway text-[24px]">{this.start} - {this.end}</span>
        )
    }
}