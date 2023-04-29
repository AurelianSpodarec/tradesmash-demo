import { fakeDailyStats } from "@/database/fakeDailyStats";
import StatItem from "./StatItem";
import IDailyStats from "@/interface/IDailyStat";


function StatsList() {
    return (
        <div className="space-y-8">
        {fakeDailyStats && fakeDailyStats.map((dailyStat:IDailyStats) => <StatItem item={dailyStat} />)}
        </div>
    )
}

export default StatsList;