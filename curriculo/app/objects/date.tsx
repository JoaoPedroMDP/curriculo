
export default class CustomDate extends Date{
    constructor(date: string){
        let pieces = date.split("/").map((piece) => parseInt(piece));
        super(pieces[2], pieces[1], pieces[0])
    }
}