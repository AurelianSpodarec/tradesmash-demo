import { useDispatch, useSelector } from 'react-redux';
import Container from '../_components/Container';
import Card from '@/views/components/Card';


function TableTH({ name }:any) {
    return (
        <th className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
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

    return (
        <Container>

            <h1 className="text-2xl font-bold">Trades</h1>

            {/* <section className="pt-8"> */}

                <Card>
                <div className="overflow-x-auto">
                <div className="relative">
                <table aria-describedby="trades_table" className="min-w-full table-fixed divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <TableTH name="Trade #" />
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
                            <TableTH name="Gross P&L" />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <TableTD name="HI" />
                        </tr>
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