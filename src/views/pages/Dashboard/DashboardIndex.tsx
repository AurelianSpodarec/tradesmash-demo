// @ts-nocheck
import LayoutDashboard from "./_components/LayoutDashboard/LayoutDashboard";

import AccountPerformance from "./AccountPerformance";
import TradesSidebar from "./TradesSidebar";
import { ScalableContainer, ScalableContent } from './_components/ScalableCell';
import StatBox from "@/views/components/StatBox";
import { getBiggestLoss, getBiggestProfit, getProfitLossRatio, getTotalScalpGrossPL, getTotalSwingGrossPL, getTotalTradesGrossPnL } from "@/store/features/trades/tradesSlice";


function DashboardIndex() {

    const totalGrossPnL = getTotalTradesGrossPnL()
    const profitLossRatio = getProfitLossRatio()
    const biggestLoss = getBiggestLoss()
    const biggestProfit = getBiggestProfit()
    const totalSwinGrossPL = getTotalSwingGrossPL()
    const totalScalpGrossPL = getTotalScalpGrossPL()

    return (
        <LayoutDashboard>
        

            <div className="grid grid-cols-10 h-full">


                <div className="col-span-7 h-full w-full">
                {/* <div className="p-6"> */}
                <ScalableContainer>
                <ScalableContent className="p-6 h-full">
                    {/* <div className="relative overflow-auto h-full"> */}

                    <AccountPerformance />
                  
                    <div className="h-full mt-8">
                        <h3 className="mb-4 text-3xl font-bold text-gray-900">Return</h3>

                        <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-4">
                            { //@ts-ignore 
                            }<StatBox title="Total Gross P&L £" value={totalGrossPnL} />
                            <StatBox title="Total Return £ on Swing" value={totalSwinGrossPL} />
                            <StatBox title="Total Return £ on Scalp" value={totalScalpGrossPL} />
                            <StatBox title="Profit/Loss Ratio" value={profitLossRatio} />
                            <StatBox title="Biggest Loss £" value={biggestLoss} />
                            <StatBox title="Biggest Profit £" value={biggestProfit} />
                        </div>
                    </div> 
                    {/* </div> */}

                </ScalableContent>
                </ScalableContainer>
                {/* </div> */}
                
                </div>

                <div className="col-span-3">
                    <TradesSidebar />
                </div>
            </div>

        </LayoutDashboard>
    )
}

export default DashboardIndex;