import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, Label, ResponsiveContainer, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { getTotalTradesGrossPnL } from '@/store/features/trades/tradesSlice';

const data = [
    { date: '2022-01-01', grossPL: 10000 },
    { date: '2022-01-02', grossPL: 10500 },
    { date: '2022-01-03', grossPL: 10200 },
    { date: '2022-01-04', grossPL: 10700 },
    { date: '2022-01-05', grossPL: 11000 },
  ];
  

function AccountPerformance() {
    const reduxTrades = useSelector((state:any) => state.trades);
    const trades = reduxTrades.trades
    const totalGrossPnL = getTotalTradesGrossPnL()
 

    console.log("totla ross", totalGrossPnL)
  return (
    <div className="h-[400px] w-full bg-white relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
    <div className="h-full">

        <div className="p-4">
            <h3 className="mb-2 text-xl font-bold text-gray-900">Total Gross P&L £{totalGrossPnL}</h3>
        </div>

        <div className="h-full pr-4">
        <ResponsiveContainer>
        <BarChart data={trades} barCategoryGap={0} margin={{ height: "220%" }}>
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
            <Bar dataKey="grossPL" >
                {trades.map((entry, index) => (
                    <Cell fill={entry.grossPL <= 0 ? '#c23e74' : '#00867a' }/>
                ))}
            </Bar>
        </BarChart>
        </ResponsiveContainer>
        </div>
    
    </div>
    </div>
    )
}

export default AccountPerformance;