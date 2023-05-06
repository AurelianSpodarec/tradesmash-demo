import { useState } from "react";
import JournalEditor from "../../JournalEditor";


function ModalTradeGeneral() {
    return (
        <div>
            General
        </div>
    )
}

function ModalTradeJournal() {
    return (
        <div className="">
            <div className="h-[400px] max-h-[350px]">
                <JournalEditor editorValue="Hello"/>
            </div>
            <div className="pt-4">
                Confidence
            </div>
        </div>
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
                <div className="flex justify-between items-center">

                    <div className="p-4">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">New/Update Trade</h3>
                    </div>

                    <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button type="button" className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="sr-only">Close</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                
                <div className="flex justify-between items-center">
                    <button type="button" className="w-full" onClick={() => switchTab('general')}>
                        General
                    </button>
                    <button type="button" className="w-full" onClick={() => switchTab('journal')}>
                        Journal
                    </button>
                </div>
            </header>

            <section className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                {tabOption === 'general' && <ModalTradeGeneral />}
                {tabOption === 'journal' && <ModalTradeJournal />}
            </section>
            
            <footer className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

            </footer>
        </div>
    )
}

export default ModalTrade;