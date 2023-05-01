import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNoteByTradeID } from '@/store/features/notes/notesSlice';
import { closeModal, openModal } from '@/store/features/modals/modalsSlice';

import Modal from '@/views/features/Modal/Modal';
import { ScalableContainer, ScalableContent, ScalableHeader } from '../_components/ScalableCell';
 
import CellBuySell from './CellBuySell';
import CellStatus from './CellStatus';
import { addNewTrade, hasTradeNotes } from '@/store/features/trades/tradesSlice';
import ITrade from '@/interface/ITrade';



function TradesIndex() {
    const reduxTrades = useSelector((state:any) => state.trades);
    const reduxModal = useSelector((state:any) => state.modal);

    const dispatch = useDispatch()
    const trades = reduxTrades.trades

    const checkbox = useRef()
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const [selectedTrades, setSelectedTrades] = useState([])
 
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedTrade, setSelectedTrade] = useState(0);
    
    const bo = getNoteByTradeID(selectedTrade)


    function addTrade(numTrades:number) {
        const newTrades: ITrade[] = [];

        for (let i = 0; i < numTrades; i++) {
            const newTrade:ITrade = {
                id: trades.length + 1 + i,
                date:  new Date(new Date().getTime() + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000)
                .toLocaleDateString("en-GB"),
                symbol:  Math.random() < 0.5 ? "CTAG" : "REAT",
                bs: Math.random() < 0.5 ? "buy" : "sell",
                size: Math.floor(Math.random() * 999),
                price: Math.floor(Math.random() * 15),
                fees: Math.floor(Math.random() * 10001),
                stop: Math.floor(Math.random() * 25),
                target:Math.floor(Math.random() * 25),
                strategy: Math.random() < 0.5 ? "scalp" : "swing",
                value: Math.floor(Math.random() * 120),
                risk: Math.floor(Math.random() * 6).toFixed(1),
                aop: Math.floor(Math.random() * 60),
                acp: Math.floor(Math.random() * 71),
                rrRatio: 0,
                grossPL: Math.floor(Math.random() * 11000) - 2500,
                status: Math.random() < 0.5 ? "open" : "increased",
            };
            newTrades.push(newTrade);
        }
        // dispatch(addNewTrade(newTrade))
        dispatch(addNewTrade(newTrades));
    }

    
    function modalOpen(tradeID:number) {
        dispatch(openModal({
            selectedTrade, 
            content: { 
                tradeID,
                note: bo
            }
        }))
    }

    function modalClose() {
        dispatch(closeModal())
    }

    function manageNote(tradeID:number) {
        modalOpen(tradeID)
    }

    useLayoutEffect(() => {
        const isIndeterminate = selectedTrades.length > 0 && selectedTrades.length < trades.length
        setChecked(selectedTrades.length === trades.length)
        setIndeterminate(isIndeterminate)
        checkbox.current.indeterminate = isIndeterminate
    }, [selectedTrades])

    function toggleAll() {
        setSelectedTrades(checked || indeterminate ? [] : trades)
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }
 

    return (
        <div>

        <Modal />

        <ScalableContainer>

            <div className="p-8">

            <section>
            <ScalableHeader>

            <div className="sm:flex sm:items-center bg-white z-10 relative p-4">
                <div className="sm:flex-auto">
                    <h1 className="text-2xl font-bold text-gray-900">Trades {trades.length}</h1>
                </div>

                <div className="mt-4 sm:ml-16 sm:mt-0 flex space-x-2">
                <button
                    onClick={() => addTrade(1)}
                    type="button"
                    className="block rounded-md bg-skin-brand-600 px-3 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-skin-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skin-brand-600"
                >
                    Add Trade
                </button>
                <button
                    onClick={() => addTrade(5)}
                    type="button"
                    className="block rounded-md bg-skin-brand-600 px-3 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-skin-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skin-brand-600"
                >
                    Add 5 more Trades
                </button>
                </div>
            </div>
            </ScalableHeader>
            </section>

            <ScalableContent>
            <div className="mt-8 flow-root">
                <div className="overflow-x-auto">
                <div className="inline-block min-w-full py-2 align-middle">
                    <div className="relative">
                    {selectedTrades.length > 0 && (
                        <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                        <button
                            type="button"
                            className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                        >
                            Bulk edit
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                        >
                            Delete all
                        </button>
                        </div>
                    )}
                    <table className="min-w-full table-fixed divide-y divide-gray-300 ">


                        <thead className="bg-white">
                        <tr>
                            <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                            <input
                                type="checkbox"
                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-skin-brand-600 focus:ring-skin-brand-600"
                                ref={checkbox}
                                checked={checked}
                                onChange={toggleAll}
                            />
                            </th>
                            <th scope="col" className="min-w-[6rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                            Trade No.
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Date
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Symbol
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            B/S
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Size
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Price
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Fees
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Stop
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Target
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Strategy
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Value
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Risk %
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            AOP
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            ACP
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            R/R Ratio
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Gross P&L
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Status
                            </th>
                            {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                            <span className="sr-only">Edit</span>
                            </th> */}
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                            <span className="sr-only">Add Note</span>
                            </th>
                        </tr>
                        </thead>



                        <tbody className="divide-y divide-gray-200 bg-white">
                        {trades.map((trade:ITrade) => (
                            <tr key={trade.id} className={selectedTrades.includes(trade) ? 'bg-gray-50' : undefined}>

                                <td className="relative px-7 sm:px-6">
                                    {selectedTrades.includes(trade) && (
                                        <div className="absolute inset-y-0 left-0 w-0.5 bg-skin-brand-600" />
                                    )}
                                    <input
                                        type="checkbox"
                                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-skin-brand-600 focus:ring-skin-brand-600"
                                        value={trade.id}
                                        checked={selectedTrades.includes(trade)}
                                        onChange={(e) =>
                                            setSelectedTrades(
                                            e.target.checked
                                                ? [...selectedTrades, trade]
                                                : selectedTrades.filter((p) => p !== trade)
                                            )
                                        }
                                    />
                                </td>

                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">#{trade.id}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.date}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.symbol}</td>
                                <CellBuySell item={trade.bs} />
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.size && trade.size.toFixed(3)}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.price}p</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">£{trade.fees && trade.fees.toFixed(2)}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.stop}p</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.target}p</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.strategy}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.value}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.risk}%</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.aop}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.acp}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trade.rrRatio}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">£{trade.grossPL && trade.grossPL.toFixed(2)}</td>
                                <CellStatus item={trade.status} />
                                {/* <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                <button type="button" className="text-skin-brand-600 hover:text-skin-brand-900">
                                    Edit<span className="sr-only">, {trade.id}</span>
                                </button>
                                </td> */}
                                <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                <button type="button" onClick={() => manageNote(trade.id)} className="text-skin-brand-600 hover:text-skin-brand-900">
                                    {trade.hasNote ? "Edit" : "Add"} Note <span className="sr-only">, {trade.id}</span>
                                </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>


                    </table>
                    </div>
                </div>
                </div>
            </div>
            </ScalableContent>


        </div>
        </ScalableContainer>
        </div>
    )
}


export default TradesIndex;


