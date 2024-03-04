import Achievement from "@/app/objects/achievement";
import { achievements } from "../data";
import BaseDAO from "./baseDAO";

class AchievementDAO extends BaseDAO {
    dataSource: any[] = achievements;

    build(data: any) {
        return new Achievement(data);
    }

    buildAll(data: any[]): Achievement[] {
        let achievements: Achievement[] = [];
        data.forEach((achievementData) => {
            achievements.push(this.build(achievementData));
        });
        return achievements;
    }
}

var dao = new AchievementDAO();
export default dao;