// @ts-nocheck
import { LineChart, Line, Label, ResponsiveContainer, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function GraphBox({ title, value, chart}:GraphBoxProps) {
    return (
        <article className="overflow-hidden rounded-xl border border-gray-200">
        <div className="p-4">
            <header>
                <h3>{title}</h3>
                <span className="text-2xl font-semibold">£{value}</span>
            </header>
            <section>
            {chart ? 
            <ResponsiveContainer>
            <BarChart data={chart} barCategoryGap={0}>
                <CartesianGrid yAxis={false}  strokeDasharray="3 3"/>
                <XAxis 
                    dataKey="date" 
                    strokeWidth={2} 
                    height={80} 
                    tick={{ angle: -70, textAnchor: 'end' }} 
                    interval={0}  
                />
                <YAxis 
                    tickFormatter={(value) => `£${value / 1000}k`}
                    axisLine={false}
                    strokeDasharray="0"
                />
                <Tooltip />
                <Bar dataKey="accountValue" >
                    {chart.map((entry, index) => (
                        <Cell fill={entry.accountValue <= 0 ? '#c23e74' : '#00867a' }/>
                    ))}
                </Bar>
            </BarChart>
            </ResponsiveContainer>
            : "" }
            </section>
        </div>
        </article>
    )
}

export default GraphBox;

interface GraphBoxProps {
    title: string;
    value: string;
    chart?: any;
}