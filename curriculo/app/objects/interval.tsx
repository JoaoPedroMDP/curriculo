export default class Interval{
    start: string
    end: string 

    constructor(start: string, end?: string){
        this.start = start
        this.end = end == null ? "Atual" : end
    }

    render(){
        return(
            <span className="font-raleway text-[24px]">{this.start} - {this.end}</span>
        )
    }
}