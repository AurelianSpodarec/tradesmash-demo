import { useState, useEffect } from "react";
import useModal from "@/hooks/useModal";


import ModalTradeJournal from "./TradeJournal/TradeJournal";
import ModalTradeGeneral from "./TradeGeneral/TradeGeneral";

import TabMenuButton from "./_components/TabMenuButton";
import { createTrade, updateTrade } from "@/store/features/trades/tradesSlice";
import { useDispatch, useSelector } from "react-redux";
import { createJournal, createNote } from "@/store/features/journal/journalSlice";
import { getNoteByTradeID } from "@/store/features/journal/journalSliceSelectors";
import { getTradeByID } from "@/store/features/trades/tradeSliceSelectors";

function ModalTrade() {
    const ModalContext = useModal();
    const tradeID = ModalContext.data.id

    console.log("modal trade id", ModalContext.data)
    const dispatch = useDispatch();

    const reduxTrades = useSelector((state:any) => state.trades);
    const reduxJournal = useSelector((state:any) => state.journal);
    const trades = reduxTrades.trades
    const notes = reduxJournal.notes

    const [tradeExists, setStradeExists] = useState(false)
    const [tradeJournal, setTradeJournal] = useState({})

    // function checkTradeExists() {
    //     if(tradeID) {
    //         getTradeByID(tradeID)
    //         setStradeExists(true)
    //     }
    // }

    // function checkJournalExist() {
    //     if(tradeExists && tradeID) {
    //         getNoteByTradeID(tradeID)
    //     }
    // }

    // useEffect(() => {
    //     checkTradeExists()
    // }, [])

    // useEffect(() => {
    //     checkJournalExist()
    // }, [tradeExists])


    const [tabOption, setTabOption] = useState("general");

    function switchTab(tab:"general" | "journal") {
        setTabOption(tab)
    }

    function handleCancel(e:any) {
        e.preventDefault()
        ModalContext.close()
    }

    // check if the trade already exits, if not create a new one


    function saveTrade() {

        if(tradeID) {
            dispatch(updateTrade({
                id: tradeID,
                stockName: "woooooooooooo",
            }))
        } else {
            dispatch(createTrade([{
                id: trades.length + 1,
                date:  new Date(new Date().getTime() + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000).toLocaleDateString("en-GB"),
                stockName:  Math.random() < 0.5 ? "CTAG" : "REAT",
                bs: Math.random() < 0.5 ? "buy" : "sell",
                size: Math.floor(Math.random() * 999),
                price: Math.floor(Math.random() * 15),
                transactionFees: Math.floor(Math.random() * 10001),
                stop: Math.floor(Math.random() * 25),
                target:Math.floor(Math.random() * 25),
                strategy: Math.random() < 0.5 ? "cleaning" : "swiping",
                value: Math.floor(Math.random() * 120),
                riskPercentage: Math.floor(Math.random() * 6).toFixed(1),
                aop: Math.floor(Math.random() * 60),
                acp: Math.floor(Math.random() * 71),
                riskRewardRatio: 0,
                grossProfitAndLoss: Math.floor(Math.random() * 11000) - 2500,
                status: Math.random() < 0.5 ? "open" : "increased",
                hasNote: true,
            }]))
        }
        updateJournal()
    }

    function updateJournal() {
        dispatch(createJournal({
            id: notes.length + 1,
            tradeID: trades.length + 1,
            content: "Testtttt wosh"
        }))
    }


    return (
        <div>
            <header>
                <div className="flex justify-between items-center  border-b">

                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-900">New/Update Trade</h3>
                    </div>

                    <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button type="button" onClick={(e) => handleCancel(e)} className="rounded-md bg-white text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="sr-only">Close</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                
                <div className="p-4">
                    <div className="flex bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-1">
                        <TabMenuButton name="General" id="general" isActive={tabOption} onClick={() => switchTab('general')} />
                        <TabMenuButton name="Journal" id="journal" isActive={tabOption} onClick={() => switchTab('journal')} />
                    </div>
                </div>
            </header>

            <section className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                {tabOption === 'general' && <ModalTradeGeneral />}
                {tabOption === 'journal' && <ModalTradeJournal journal={reduxJournal} />}
            </section>
            
            <footer className="bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <div className="sm:flex sm:flex-row-reverse">
                <button type="button" onClick={() => saveTrade()} className="inline-flex w-full justify-center rounded-md bg-skin-brand-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-skin-brand-500 sm:ml-3 sm:w-auto">Save</button>
                <button type="button" onClick={(e) => handleCancel(e)}className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
            </div>
            </footer>

        </div>
    )
}

export default ModalTrade;