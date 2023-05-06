import { useSelector } from 'react-redux';

import mapNames from '@/utils/mapNames';
import ITrade from '@/interface/ITrade';

import Container from '../_components/Container';

import PageHeader from '@/views/components/PageHeader';
import Card from '@/views/atoms/Card';
import Button from '@/views/atoms/Button/Button';
import TableTDList from '@/views/components/Table/TableTD/TableTDList';
import TableTHList from '@/views/components/Table/TableTH/TableTHList';

// - Emotions and thoughts, confidence, reason for trade

function TradesIndex() {
    const reduxTrades = useSelector((state:any) => state.trades);
    const trades = reduxTrades.trades
    const mappedTradeNames = mapNames.trades({exclude: ["createdAt", "updatedAt"]})

    return (
        <Container>

            <PageHeader title="Trades" className="flex justify-between items-center">
                <div>
                    <Button label="Add Trade" />
                </div>
            </PageHeader>

            <section>
            <Card className="p-0">

                <div className="overflow-x-auto">
                <div className="relative">

                    <table aria-describedby="trades_table" className="min-w-full table-fixed divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                                    <input
                                        type="checkbox"
                                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        // ref={checkbox}
                                        // checked={checked}
                                        // onChange={toggleAll}
                                    />
                                </th>
                                <TableTHList mappedNames={mappedTradeNames} />
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {trades && trades.map((trade:ITrade) => (
                            <tr key={trade.id} className="border-b border-b-gray-200">

                                <td className="relative px-7 sm:w-12 sm:px-6">
                                    <input
                                        type="checkbox"
                                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        // value={person.email}
                                        // checked={selectedPeople.includes(person)}
                                        // onChange={(e) =>
                                        //     setSelectedPeople(
                                        //     e.target.checked
                                        //         ? [...selectedPeople, person]
                                        //         : selectedPeople.filter((p) => p !== person)
                                        //     )
                                        // }
                                    />
                                </td>
                                <TableTDList mappedNames={mappedTradeNames} data={trade} /> 
                                <td>
                                    <button type="button" className="w-4">
                                        <svg className="h-full w-full" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
                                    </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    
                </div>
                </div>

            </Card>
            </section>

        </Container>
    )
}


export default TradesIndex;