import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";


    
function CustomTooltip({ active, payload }:any) {
    if (!active) return <></>
    return (
        <div
            className="custom-tooltip"
            style={{
                backgroundColor: "#ffff",
                padding: "5px",
                border: "1px solid #cccc"
            }}
        >
            <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
    );
}


function ChartPie({ aspect, legend, xAxies, yAxies, toolTip }:any) {
    const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
    const pieData = [
        {
            name: "Apple",
            value: 54.85
        },
        {
            name: "Samsung",
            value: 47.91
        },
        {
            name: "Redmi",
            value: 16.85
        },
        {
            name: "One Plus",
            value: 16.14
        },
        {
            name: "Others",
            value: 10.25
        }
    ];

    return (
        <ResponsiveContainer aspect={aspect}>
        <PieChart>
            <Pie
                data={pieData}
                color="#000000"
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
            >
                {pieData.map((_, index:any) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                    />
                ))}
            </Pie>
            {toolTip && <Tooltip content={<CustomTooltip />} />}
            {legend && <Legend /> }
        </PieChart>
        </ResponsiveContainer>
    )
}

export default ChartPie;