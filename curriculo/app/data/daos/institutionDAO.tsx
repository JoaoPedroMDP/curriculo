import { Institution } from "@/app/objects/institution";
import { institutions } from "../data";
import BaseDAO from "./baseDAO";

class InstitutionDAO extends BaseDAO {
    dataSource: any[] = institutions;
    
    build(data: any): any {
        return new Institution(data);
    }
    
    buildAll(data: any[]): Institution[] {
        let institutions: Institution[] = [];
        data.forEach((institutionData) => {
            institutions.push(this.build(institutionData));
        });
        return institutions;
    }
};

var instDao = new InstitutionDAO();
export default instDao;