import LayoutDashboard from "@/views/layouts/LayoutDashboard/LayoutDashboard";
import StatsList from "./_components/StatsList";

function StatsIndex() {
    return (
        <LayoutDashboard>

            <div>
                <h2 className="text-2xl font-bold mb-8">Daily Stats</h2>
            </div>

            <StatsList />
        </LayoutDashboard>
    )
}

export default StatsIndex;