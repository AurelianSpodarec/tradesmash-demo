import { useSelector } from "react-redux";
import { 
    getBiggestLoss, 
    getBiggestProfit, 
    getProfitLossRatio, 
    getTotalScalpGrossPL, 
    getTotalSwingGrossPL, 
    getTotalTrades, 
    getTotalTradesGrossPnL 
} from "@/store/features/trades/tradeSliceSelectors";

import Container from "../_components/Container";

import Card from "@/views/atoms/Card";
import ChartLine from "@/views/components/Charts/ChartLine";
import PageHeader from "@/views/components/PageHeader";
import CardMetric from "@/views/components/Card/CardMetric";

import ChartPerformance from "../../components/Charts/ChartPerfomance";

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

            <div className="grid md:grid-cols-3 gap-x-4">
                <CardMetric title="Total Trades" value={getTotalTrades()} />
                <CardMetric title="Acccumulative returns" value={"66%"} chart={<ChartLine aspect={3} legend={false} xAxies={false} />} />
                <CardMetric title="Best performing stock" value="TSLA" />
            </div>

            <section className="mb-4">
            <div className="grid md:grid-cols-10 gap-x-4">
                <Card className="col-span-7 h-[600px]">
                    <ChartPerformance data={trades} />
                </Card>
                <Card className="col-span-3">

                </Card>
            </div>
            </section>

            <section className="mb-4">
            <div className="grid md:grid-cols-4 gap-x-4">
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
