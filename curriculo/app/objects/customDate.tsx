
export default class CustomDate extends Date{
    constructor(date: string){
        // date está no formato mm/yyyy
        let pieces = date.split("/").map((piece) => parseInt(piece));
        super(pieces[1], pieces[0] - 1);
    }

    toMonthYear(){
        let full = this.toLocaleDateString('pt-BR', {month: 'long'}) + " " + this.getFullYear();
        return full
    }

    static compareDate(a?: string, b?: string, reverse: boolean = false){
        if(a == undefined){
            return -1;
        }else if(b == undefined){
            return 1;
        }
    
        let result = new CustomDate(a).getTime() - new CustomDate(b).getTime();
        return reverse ? -result : result;
    }
}