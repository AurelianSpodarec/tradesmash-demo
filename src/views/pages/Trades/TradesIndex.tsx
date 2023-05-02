import { useDispatch, useSelector } from 'react-redux';
import Container from '../_components/Container';
import Card from '@/views/atoms/Card';
import PageHeader from '@/views/components/PageHeader';
import ITrade from '@/interface/ITrade';


function TableTH({ name }:any) {
    return (
        <th scope="col" className="min-w-[6rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
            {name}
        </th>
    )
}


function TableTD({ name }:any) {
    return (
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {name}
        </td>
    )
}



function TradesIndex() {
    const reduxTrades = useSelector((state:any) => state.trades);
    const trades = reduxTrades.trades

    console.log(trades)

    return (
        <Container>

            <PageHeader title="Trades" />

            {/* <section className="pt-8"> */}

                <Card>
                <div className="overflow-x-auto">
                <div className="relative">
                <table aria-describedby="trades_table" className="min-w-full table-fixed divide-y divide-gray-300">
                    <thead>
                        <tr>
                            {/* <TableTH name="Trade #" />
                            <TableTH name="Status" />
                            <TableTH name="Date" />
                            <TableTH name="Symbol" />
                            <TableTH name="B/S" />
                            
                            <TableTH name="Open date" />
                            <TableTH name="Open price" />
                            <TableTH name="Unit" />
                            <TableTH name="Close date" />

                            <TableTH name="Fees" />
                            <TableTH name="Stop" />
                            <TableTH name="Target" />

                            <TableTH name="Strategy" />
                            <TableTH name="Value" />
                            <TableTH name="Risk %" />
                            <TableTH name="AOP" />                                
                            <TableTH name="ACP" />
                            <TableTH name="R/R Ratio" />
                            <TableTH name="Gross P&L" /> */}
                            <TableTH name="Trade No." />
                            <TableTH name="Date" />
                            <TableTH name="Status" />

                            <TableTH name="Symbol" />
                            <TableTH name="B/S" />
                            <TableTH name="Entry Date" />
                            <TableTH name="Entry Price" />
                            <TableTH name="Units" />
                            <TableTH name="Exit Date" />
                            <TableTH name="Exit Price" />
                            <TableTH name="Fees" />
                            <TableTH name="Stop Loss" />
                            <TableTH name="Take Profit" />
                            <TableTH name="Strategy" />
                            <TableTH name="Value" />
                            <TableTH name="Risk %" />
                            <TableTH name="Avg Entry Price" />
                            <TableTH name="Avg Exit Price" />
                            <TableTH name="R-R Ratio" />
                            <TableTH name="P/L" />
                            <TableTH name="Market" />
                            <TableTH name="Duration" />
                            <TableTH name="Type" />
                            <TableTH name="Emotion" />
                            <TableTH name="Entry Reason" />
                            <TableTH name="Exit Reason" />
                            <TableTH name="Max Profit" />
                            <TableTH name="Max Loss" />
                            <TableTH name="Wins" />
                            <TableTH name="Losses" />
                            <TableTH name="Win %" />
                            <TableTH name="Score" />
                            <TableTH name="Notes" />


                            <TableTH name="Updated At" />
                            <TableTH name="Created At" />
                        </tr>
                    </thead>
                    <tbody>
                        {trades && trades.map((trade:ITrade) => (
                        <tr key={trade.id}>
                            <TableTD name={trade.id} />
                            <TableTD name={trade.date} />
                            <TableTD name={trade.status} />



                            <TableTD name={trade.createdAt} />
                            <TableTD name={trade.updatedAt} />
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                </div>
                </Card>

            {/* </section> */}

        </Container>
    )
}


export default TradesIndex;