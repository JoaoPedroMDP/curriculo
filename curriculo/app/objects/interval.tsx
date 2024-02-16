export default class Interval{
    start: string
    end: string

    constructor(start: string, end: string = null){
        this.start = start
        this.end = end == null ? "Atual" : end
    }

    render(){
        return(
            <p className="font-raleway text-[24px]">{this.start} - {this.end}</p>
        )
    }
}