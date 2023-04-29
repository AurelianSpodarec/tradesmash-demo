import LayoutDashboard from "../../layouts/LayoutDashboard/LayoutDashboard";
import AccountPerformance from "./AccountPerformance";
import TradingIndex from "./Trading/TradingIndex";


function DashboardIndex() {
    return (
        <LayoutDashboard>

            {/* All Profit
            Profit this Month
            Profit today */}
           
            <AccountPerformance />

        </LayoutDashboard>
    )
}

export default DashboardIndex;