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
    getTotalTradesGrossPnL 
} from "@/store/features/trades/tradeSliceSelectors";


import { LineChart, Line, Label, ResponsiveContainer, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useSelector } from "react-redux";
import ITrade from "@/interface/ITrade";
function ChartPerformance() {
    const reduxTrades = useSelector((state:any) => state.trades)
    const trades = reduxTrades.trades
    console.log(reduxTrades)
    return (
        <ResponsiveContainer>
        <BarChart data={trades} barCategoryGap={0}>
            <CartesianGrid yAxis={false}  strokeDasharray="3 3"/>
            <XAxis 
                dataKey="date" 
                strokeWidth={2} 
                height={80} 
                tick={{ 
                    angle: -70, 
                    textAnchor: 'end' 
                }} 
                interval={0}  
            />
            <YAxis 
                tickFormatter={(value) => `£${value / 1000}k`}
                axisLine={false}
                strokeDasharray="0"
            />
            <Tooltip />
            <Bar dataKey="grossProfitAndLoss" >
                {trades.map((entry:ITrade, index:any) => (
                    <Cell key={index} fill={entry.grossProfitAndLoss <= 0 ? '#c23e74' : '#00867a' }/>
                ))}
            </Bar>
        </BarChart>
        </ResponsiveContainer>
    )
}


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

                <Card className="h-[500px]">
                    <ChartPerformance />
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