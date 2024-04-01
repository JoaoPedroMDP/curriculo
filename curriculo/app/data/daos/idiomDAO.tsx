import Idiom from "@/app/objects/idiom";
import { idioms } from "../data";
import BaseDAO from "./baseDAO";

class IdiomDAO extends BaseDAO {
    dataSource: any[] = idioms;

    build(data: any) {
        return new Idiom(data);
    }

    buildAll(data: any[]): Idiom[] {
        let idioms: Idiom[] = [];
        data.forEach((idiomData) => {
            idioms.push(this.build(idiomData));
        });
        return idioms;
    }
}

var idiomDAO = new IdiomDAO();
export default idiomDAO;