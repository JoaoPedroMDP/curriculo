
export default class CustomDate extends Date{
    constructor(date: string){
        let pieces = date.split("/").map((piece) => parseInt(piece));
        super(pieces[2], pieces[1] - 1 , pieces[0]);
    }

    toMonthYear(){
        let full = this.toLocaleDateString('pt-BR', {month: 'long'}) + " " + this.getFullYear();
        return full
    }
}