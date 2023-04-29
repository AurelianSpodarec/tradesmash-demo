import React from 'react';
import { LineChart, Line, Label, ResponsiveContainer, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const tradingLogs = [
    {
        "date": "2023-04-26",
        "netPnL": 2000
    },
    {
        "date": "2023-04-27",
        "netPnL": -500
    },
    {
        "date": "2023-04-28",
        "netPnL": 1000
    }
];
const data = [
    { date: '2022-01-01', accountValue: 10000 },
    { date: '2022-01-02', accountValue: 10500 },
    { date: '2022-01-03', accountValue: 10200 },
    { date: '2022-01-04', accountValue: 10700 },
    { date: '2022-01-05', accountValue: 11000 },
    { date: '2022-01-06', accountValue: 11300 },
    { date: '2022-01-07', accountValue: -1100 },
    { date: '2022-01-08', accountValue: -1800 },
    { date: '2022-01-09', accountValue: 12000 },
    { date: '2022-01-10', accountValue: 12200 },
    { date: '2022-01-11', accountValue: 11800 },
    { date: '2022-01-12', accountValue: 13400 },
    { date: '2022-01-13', accountValue: 14900 },
    { date: '2022-01-14', accountValue: 16600 },
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
  

// const accountPerformanceData = tradingLogs.reduce((acc, curr) => {
//     const previousValue = acc.length ? acc[acc.length - 1].y : 0;
//     const cumulativeReturn = previousValue + curr.netPnL;
//     acc.push({
//         x: new Date(curr.date),
//         y: cumulativeReturn
//     });
//     return acc;
// }, []);



function AccountPerformance() {
  const accumulativeReturnData = [];

  let runningTotal = 0;

  tradingLogs.forEach((trade) => {
    runningTotal += trade.netPnl;
    accumulativeReturnData.push({
      date: trade.date,
      accumulativeReturn: runningTotal
    });
  });

//   const CustomBar = (props:any) => {
//         const {years, fill} = props;
//         //business logic here to update fill color explicitly
//         if(years === 'Current') {
//             fill='#NewFillColor';
//         }
    
//         //use explicit fill here, or use the additional css class and make a css selector to update fill there
//         return <Rectangle {...props} fill={fill} className=`recharts-bar-rectangle ${years}` />
//     };

  return (
    <div className="w-full h-full">
      <h3>Account Return £</h3>

        <div className="h-[500px]">
        <ResponsiveContainer>
        <BarChart data={data} barCategoryGap={26}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
                dataKey="date" 
                strokeWidth={0} 
                height={80} 
                tick={{ angle: -70, textAnchor: 'end' }} 
                interval={0}  
            />
            <YAxis 
                tickFormatter={(value) => `${value / 1000}k`}
                axisLine={{ strokeWidth: 0 }}
                strokeDasharray="0"
            />
            <Tooltip />
            <Bar dataKey="accountValue" >
                {data.map((entry, index) => (
                    <Cell fill={entry.accountValue <= 0 ? 'red' : 'green' }/>
                ))}
            </Bar>
        </BarChart>
        </ResponsiveContainer>
        </div>
    </div>




  )
    // const chartOptions = {
    //     chart: {
    //         id: "account-performance",
    //         type: "line",
    //         height: 350,
    //         toolbar: {
    //             show: false
    //         }
    //     },
    //     xaxis: {
    //         type: "datetime",
    //         labels: {
    //             format: "dd MMM yyyy"
    //         }
    //     },
    //     yaxis: {
    //         labels: {
    //             formatter: function (value) {
    //                 return "$" + value.toFixed(2);
    //             }
    //         }
    //     },
    //     stroke: {
    //         width: 2
    //     },
    //     series: [
    //         {
    //             name: "Cumulative Return",
    //             data: accountPerformanceData
    //         }
    //     ]
    // };

    // return (
    //     <div>
    //         <div>
    //             <h3>Account Performance</h3>
    //         </div>
    //         <div>
    //         <Chart
    //             options={chartOptions}
    //             series={chartOptions.series}
    //             type="line"
    //             height={350}
    //         />
    //         </div>
    //     </div>
    // )
}

export default AccountPerformance;