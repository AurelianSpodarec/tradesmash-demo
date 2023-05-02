import Card from "@/views/atoms/Card";
import Container from "../_components/Container";

import PageHeader from "@/views/components/PageHeader";
import CardMetric from "@/views/components/Card/CardMetric";

import { getBiggestLoss, getBiggestProfit, getProfitLossRatio, getTotalScalpGrossPL, getTotalSwingGrossPL, getTotalTradesGrossPnL } from "@/store/features/trades/tradeSliceSelectors";


function HomeIndex() {
    const totalGrossPnL = getTotalTradesGrossPnL()
    const biggestProfit = getBiggestProfit()    
    const biggestLoss = getBiggestLoss()
    const totalScalpGrossPL = getTotalScalpGrossPL()
    const totalSwingGrossPL = getTotalSwingGrossPL()
    const profitLossRatio = getProfitLossRatio();

    return (
        <Container>
           
            <PageHeader title="Overview" />

            <section className="mb-4">

                <Card>
                    Chatjs
                </Card>

            </section>

            <section className="mb-4">

                <div className="grid grid-cols-4 gap-x-4">
                    <CardMetric title="Total Gross P&L £" value={totalGrossPnL} />
                    <CardMetric title="Biggest Profit £" value={biggestProfit} />
                    <CardMetric title="Biggest Loss £" value={biggestLoss} />
                    <CardMetric title="Total Return £ on Scalp" value={totalScalpGrossPL} />
                    <CardMetric title="Total Return £ on Swing" value={totalSwingGrossPL} />
                    <CardMetric title="Profit/Loss Ratio" value={profitLossRatio} />
                </div>

            </section>
           
        </Container>
    )
}

export default HomeIndex;