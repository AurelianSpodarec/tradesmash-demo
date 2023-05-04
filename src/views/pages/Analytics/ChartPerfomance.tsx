import { ResponsiveContainer, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import ITrade from "@/interface/ITrade";

function ChartPerformance({ data }:any) {
    return (
        <div className="h-full">
            <div className="mb-8">
                <h1 className="text-lg font-semibold">Gross Profit and Loss</h1>
            </div>  
            <ResponsiveContainer>
            <BarChart data={data} barCategoryGap={0}>
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
                    {data.map((entry:ITrade, index:any) => (
                        <Cell key={index} fill={entry && entry.grossProfitAndLoss <= 0 ? '#c23e74' : '#00867a' }/>
                    ))}
                </Bar>
            </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartPerformance;