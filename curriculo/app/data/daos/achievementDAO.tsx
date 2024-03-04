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

    allSortedByDate (achievements: Achievement[] = []): Achievement[] {
        if(achievements.length == 0) {
            achievements = this.getAll();
        }

        return achievements.sort((a, b) => {
            let result = a.compareDate(a.date, b.date, true)
            return result;
        });
    }
}

var achievDao = new AchievementDAO();
export default achievDao;