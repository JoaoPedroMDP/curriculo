import CustomDate from "./customDate";

export default class Interval{
    start: CustomDate
    end: CustomDate | string 

    constructor(start: string, end?: string){
        this.start = new CustomDate(start);
        this.end = end == null ? "Atual" :  new CustomDate(end);
    }

    static fromData(data: any){
        return new Interval(data.start, data.end);
    }

    render(){
        let end = this.end instanceof CustomDate ? this.end.toMonthYear() : this.end;
        return this.start.toMonthYear() + " - " + end;
    }
}