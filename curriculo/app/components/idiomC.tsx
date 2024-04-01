import Idiom from "../objects/idiom";


export default function IdiomC({idiom}: {idiom: Idiom}){
    return(
        <div>
            <p>{idiom.name}</p>
            <p>Writing: {idiom.writing}</p>
            <p>Reading: {idiom.reading}</p>
            <p>Speaking: {idiom.speaking}</p>
            <p>Listening: {idiom.listening}</p>
        </div>
    );
}