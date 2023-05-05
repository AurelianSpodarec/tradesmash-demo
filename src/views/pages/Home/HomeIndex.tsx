import Card from "@/views/atoms/Card";
import Container from "../_components/Container";

import PageHeader from "@/views/components/PageHeader";
import CardMetric from "@/views/components/Card/CardMetric";

import { 
    getBiggestLoss, 
    getBiggestProfit, 
    getProfitLossRatio, 
    getTotalScalpGrossPL, 
    getTotalSwingGrossPL, 
    getTotalTrades, 
    getTotalTradesGrossPnL 
} from "@/store/features/trades/tradeSliceSelectors";
import { useSelector } from "react-redux";
import ChartPerformance from "../../components/Charts/ChartPerfomance";
import ChartLine from "@/views/components/Charts/ChartLine";
import ChartPie from "@/views/components/Charts/ChartPie";


function HomeIndex() {    
    const reduxTrades = useSelector((state:any) => state.trades)
    const trades = reduxTrades.trades

    const totalGrossPnL = getTotalTradesGrossPnL()
    const biggestProfit = getBiggestProfit()    
    const biggestLoss = getBiggestLoss()
    const totalScalpGrossPL = getTotalScalpGrossPL()
    const totalSwingGrossPL = getTotalSwingGrossPL()
    const profitRiskRatio = getProfitLossRatio();

    return (
        <Container>
           
            <PageHeader title="Overview" />


            <div className="grid grid-cols-3 gap-x-4">
                {/* <CardMetric title="Average PnL" value={0} /> */}
                <CardMetric title="Total Trades" value={getTotalTrades()} />
                <CardMetric title="Acccumulative returns" value={"66%"} chart={<ChartLine aspect={3} legend={false} xAxies={false} />} />
                <CardMetric title="Best performing stock" value="TSLA" chart={<ChartPie aspect={3} legend={false} xAxies={false} yAxies={false} tooltip={false} /> } />
                {/* Best performing stock company */}

                {/* maybe have icon for the above? */}
                {/* Total Trades - buy/sell pie chart */}
            </div>
            <section className="mb-4">

                <Card className="h-[500px]">
                    <ChartPerformance data={trades} />
                </Card>

            </section>

            <section className="mb-4">

                <div className="grid grid-cols-4 gap-x-4">
                    <CardMetric title="Total Gross P&L £" value={totalGrossPnL} />
                    <CardMetric title="Biggest Profit £" value={biggestProfit} />
                    <CardMetric title="Biggest Loss £" value={biggestLoss} />
                    <CardMetric title="Total Return £ on Scalp" value={totalScalpGrossPL} />
                    <CardMetric title="Total Return £ on Swing" value={totalSwingGrossPL} />
                    <CardMetric title="Profit/Loss Ratio" value={profitRiskRatio} type="profitRiskRatio" />
                </div>

            </section>
           
        </Container>
    )
}

export default HomeIndex;