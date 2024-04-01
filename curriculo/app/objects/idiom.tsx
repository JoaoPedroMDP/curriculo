
export default class Idiom{
    id: string
    name: string
    writing: string
    reading: string
    speaking: string
    listening: string

    constructor({id, name, writing, reading, speaking, listening}: {id: string, name: string, writing: string, reading: string, speaking: string, listening: string}){
        this.id = id
        this.name = name
        this.writing = writing
        this.reading = reading
        this.speaking = speaking
        this.listening = listening
    }

    static collectAll(raw_idioms: any[]){
        let all: Idiom[] = [];
        raw_idioms.forEach((raw_idiom, index)=>{
            all.push(new Idiom(raw_idiom));
        });

        return all;
    }
}