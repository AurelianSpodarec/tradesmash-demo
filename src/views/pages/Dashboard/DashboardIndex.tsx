import LayoutDashboard from "../../layouts/LayoutDashboard/LayoutDashboard";
import AccountPerformance from "./AccountPerformance";
import TradingIndex from "./Trading/TradingIndex";





function DashboardIndex() {
    return (
        <LayoutDashboard>

            {/* All Profit
            Profit this Month
            Profit today */}
           
            <div className="flex flex-row">
                <div className="space-y-8 w-full">
                    <AccountPerformance />
                    <div>
                        <h3 className="text-3xl">Return</h3>
                    </div>
                </div>
                
                <aside className="w-[450px]">
                    Hi
                </aside>
            </div>

        </LayoutDashboard>
    )
}

export default DashboardIndex;