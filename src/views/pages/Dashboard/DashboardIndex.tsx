import LayoutDashboard from "./_components/LayoutDashboard/LayoutDashboard";

import AccountPerformance from "./AccountPerformance";
import GraphBox from "./GraphBox";
import TradesSidebar from "./TradesSidebar";
import TradingIndex from "./Trading/TradingIndex";

const data2 = [
    { date: '2022-01-01', accountValue: 10000 },
    { date: '2022-01-02', accountValue: 10500 },
    { date: '2022-01-03', accountValue: 10200 },
    { date: '2022-01-04', accountValue: 10700 },
    { date: '2022-01-05', accountValue: 11000 },
    { date: '2022-01-06', accountValue: 11300 },
    { date: '2022-01-07', accountValue: -4100 },
    { date: '2022-01-08', accountValue: -5800 },
    { date: '2022-01-09', accountValue: -16000 },
    { date: '2022-01-10', accountValue: 200 },
    { date: '2022-01-11', accountValue: 1800 },
    { date: '2022-01-12', accountValue: 3400 },
    { date: '2022-01-13', accountValue: 7900 },
    { date: '2022-01-14', accountValue: 14600 },
    { date: '2022-01-15', accountValue: 17600 },
    { date: '2022-01-16', accountValue: 18600 },
    { date: '2022-01-17', accountValue: 19600 },
    { date: '2022-01-18', accountValue: 23600 },
    { date: '2022-01-19', accountValue: 25600 },
    { date: '2022-01-20', accountValue: 27600 },
    { date: '2022-01-21', accountValue: 28600 },
    { date: '2022-01-22', accountValue: 29600 },
    { date: '2022-01-23', accountValue: 32600 },
    { date: '2022-01-24', accountValue: 40600 },
    { date: '2022-01-25', accountValue: 34600 },
    { date: '2022-01-26', accountValue: 36600 },
    { date: '2022-01-27', accountValue: 39600 },
    { date: '2022-01-28', accountValue: 47600 },
    { date: '2022-01-29', accountValue: 49600 },
    { date: '2022-02-30', accountValue: 57600 },
    { date: '2022-02-31', accountValue: 53600 },
    { date: '2022-02-01', accountValue: 57600 },
    { date: '2022-02-02', accountValue: 56600 },
    { date: '2022-02-03', accountValue: 59600 },
    { date: '2022-02-04', accountValue: 62600 },
    { date: '2022-02-05', accountValue: 63600 },
    { date: '2022-02-06', accountValue: 46600 },
    { date: '2022-02-07', accountValue: 47600 },
    { date: '2022-02-08', accountValue: 39600 },
    { date: '2022-02-09', accountValue: 67600 },
    { date: '2022-02-10', accountValue: 79600 },
    { date: '2022-02-11', accountValue: 87600 },
  ];

  const data3 = [
    { date: '2022-01-01', accountValue: 10000 },
    { date: '2022-01-02', accountValue: 10500 },
    { date: '2022-01-03', accountValue: 10200 },
    { date: '2022-01-04', accountValue: 10700 },
    { date: '2022-01-05', accountValue: 11000 },
    { date: '2022-01-06', accountValue: 11300 },
    { date: '2022-01-07', accountValue: -4100 },
    { date: '2022-01-08', accountValue: -5800 },
    { date: '2022-01-09', accountValue: -16000 },
    { date: '2022-01-10', accountValue: 200 },
    { date: '2022-01-11', accountValue: 1800 },
    { date: '2022-01-12', accountValue: 3400 },
    { date: '2022-01-13', accountValue: 7900 },
    { date: '2022-01-14', accountValue: 14600 },
    { date: '2022-01-15', accountValue: 17600 },
    { date: '2022-01-16', accountValue: 18600 },
    { date: '2022-01-17', accountValue: 19600 },
    { date: '2022-01-18', accountValue: 23600 },
    { date: '2022-01-19', accountValue: 25600 },
    { date: '2022-01-20', accountValue: 27600 },
    { date: '2022-01-21', accountValue: 28600 },
    { date: '2022-01-22', accountValue: 29600 },
    { date: '2022-01-23', accountValue: 32600 },
    { date: '2022-01-24', accountValue: 40600 },
    { date: '2022-01-25', accountValue: 34600 },
    { date: '2022-01-26', accountValue: 36600 },
    { date: '2022-01-27', accountValue: 39600 },
    { date: '2022-01-28', accountValue: 47600 },
    { date: '2022-01-29', accountValue: 49600 },
    { date: '2022-02-30', accountValue: 57600 },
    { date: '2022-02-31', accountValue: 53600 },
    { date: '2022-02-01', accountValue: 57600 },
    { date: '2022-02-02', accountValue: 56600 },
    { date: '2022-02-03', accountValue: 59600 },
    { date: '2022-02-04', accountValue: 62600 },
    { date: '2022-02-05', accountValue: 63600 },
    { date: '2022-02-06', accountValue: 46600 },
    { date: '2022-02-07', accountValue: 47600 },
    { date: '2022-02-08', accountValue: 39600 },
    { date: '2022-02-09', accountValue: 67600 },
    { date: '2022-02-10', accountValue: 79600 },
    { date: '2022-02-11', accountValue: 87600 },
  ];


function DashboardIndex() {
    return (
        <LayoutDashboard>

            {/* All Profit
            Profit this Month
            Profit today */}
           
            <div className="grid grid-cols-12 space-x-4">

                <div className="col-span-12 lg:col-span-8 space-y-8 w-full">
                    <AccountPerformance />
                    <div>
                        <h3 className="text-3xl">Return</h3>

                        <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-4">
                            <GraphBox title="Accumulative Return £" value="23,323.53" chart={data2} />
                            <GraphBox title="Accumulative Return Net £" value="23,323.53" chart={data3} />
                            <GraphBox title="Account Balance" value="23,323.53" chart="" />
                            <GraphBox title="Daily Return £" value="23,323.53" chart="" />

                            <GraphBox title="Return on Winners £" value="23,323.53" chart="" />
                            <GraphBox title="Return on Losers £" value="-43,123.53" chart="" />
                            <GraphBox title="Return £ on Long" value="25,323.53" chart="" />
                            <GraphBox title="Return £ on Short" value="-3,323.53" chart="" />

                            <GraphBox title="Biggest Profit £" value="5,323.53" chart="" />
                            <GraphBox title="Biggest Loss £" value="-1,323.53" chart="" />
                            <GraphBox title="Profit/Loss Ratio" value="1.2:1" />
                        </div>
                    </div>
                </div>
                
                <aside className="col-span-12 lg:col-span-4 overflow-y-auto">
                    <TradesSidebar />
                </aside>
            </div>

        </LayoutDashboard>
    )
}

export default DashboardIndex;