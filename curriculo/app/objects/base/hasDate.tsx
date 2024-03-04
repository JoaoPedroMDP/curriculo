import CustomDate from "../customDate";

export default class HasDate{
    compareDate(a?: string, b?: string, reverse: boolean = false){
        if(a == undefined){
            return -1;
        }else if(b == undefined){
            return 1;
        }

        let result = new CustomDate(a).getTime() - new CustomDate(b).getTime();
        return reverse ? -result : result;
    }
}