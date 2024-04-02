import Idiom from "../objects/idiom";

export default function IdiomC({idiom}: {idiom: Idiom}){

    function rating_from_int(rating: number){
        let points = [];
        let i = 0;
        let point_classes = "rounded-full w-[20px] h-[10px]"
        while(i < rating){
            points.push(<div className={`${point_classes} bg-yellow`}>&nbsp;</div>);
            i++;
        }
    
        while(i < 5){
            points.push(<div className={`${point_classes} bg-white`}>&nbsp;</div>);
            i++;
        }
    
        return points;
    }

    function get_rating(label: string, rating: number){
        return(
            <div className="flex flex-row justify-between">
                <span className="text-center mr-2">{label}</span>
                <div className="flex flex-row items-center gap-1 print:hidden">
                    {rating_from_int(rating)}
                </div>
                <span className="hidden print:block">{rating}</span>
            </div>
        );
    }

    console.log(idiom);


    return(
        <div className="flex flex-col">
            <p className="font-bold text-[20px]">{idiom.name}</p>
            {get_rating("Escreve:", idiom.writing)}
            {get_rating("Lê:", idiom.reading)}
            {get_rating("Fala:", idiom.speaking)}
            {get_rating("Escuta:", idiom.listening)}
        </div>
    );
}