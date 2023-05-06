import { useState } from "react";

import ModalTradeGeneral from "./TradeGeneral/TradeGeneral";
import ModalTradeJournal from "./TradeJournal/TradeJournal";



function TabMenuButton({ name, isActive, id, onClick }:any) {
    return (
        <button type="button" className={` ${isActive === id ? "bg-gray-100" : ""} rounded py-2 w-full`} onClick={onClick}>
            {name}
        </button>
    )
}

function ModalTrade() {

    const [tabOption, setTabOption] = useState("general");

    function switchTab(tab:"general" | "journal") {
        setTabOption(tab)
    }



    return (
        <div>
            <header>
                <div className="flex justify-between items-center  border-b">

                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-900">New/Update Trade</h3>
                    </div>

                    <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button type="button" className="rounded-md bg-white text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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
                {tabOption === 'journal' && <ModalTradeJournal />}
            </section>
            
            <footer className="bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <div className="sm:flex sm:flex-row-reverse">
                <button type="button" className="inline-flex w-full justify-center rounded-md bg-skin-brand-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-skin-brand-500 sm:ml-3 sm:w-auto">Save</button>
                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
            </div>
            </footer>

        </div>
    )
}

export default ModalTrade;