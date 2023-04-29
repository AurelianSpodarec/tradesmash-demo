import LayoutDashboard from "../../layouts/LayoutDashboard/LayoutDashboard";
import TradingIndex from "./Trading/TradingIndex";



function AccountPerformance() {
    return (
        <div>
            <div>
                <h3>Account Performance</h3>
            </div>
            <div>
                Chart
            </div>
        </div>
    )
}



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