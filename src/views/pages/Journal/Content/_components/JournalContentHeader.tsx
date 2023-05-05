import INote from "@/interface/INote";
import ITrade from "@/interface/ITrade";
import dateFormatter from "@/utils/dateFormatter";

function JournalContentHeader({ note, trade }:JournalContentHeaderProps) {
    return (
        <div className=" bg-white p-6 border-b border-b-gray-300 flex justify-between items-start w-full">
                {/* <h3>Journal: {dateHelper.formatDate(notes[0].createdAt)}</h3> */}
            <div className="flex flex-col">

                <div className="flex space-x-4 mb-2">
                    <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 bg-blue-300 rounded"></div>
                        <span className="text-xl font-bold">Trade #{trade.id}</span>
                    </div>
                    
                    {/* <span className="text-xl font-bold">Net P&L: £2323.94</span> */}
                </div>


                <div className="flex space-x-4">
                    <div>
                        <span className="font-medium">Emotional State:</span> {trade.emotionalState}
                    </div>
                    <div>
                        <span className="font-medium">Last Saved:</span> {dateFormatter.formatDate(note.updatedAt)}
                    </div>
                </div>

                {/* <time className="text-gray-700">15th August Wed, 2020</time> */}
                <div className="flex space-x-4">
                    {/* <span><span className="font-semibold">Created At:</span> {dateHelper.formatDate(activeJournal.createdAt)}</span> */}
                    {/* <span><span className="font-semibold">Updated At:</span> {dateHelper.formatDate(activeJournal.updatedAt)}</span> */}
                </div>
            </div>

            <button type="button" className="block rounded-md bg-skin-brand-600 px-3 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-skin-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skin-brand-600">
                Save
            </button>
        </div>
    )
}

export default JournalContentHeader;

interface JournalContentHeaderProps {
    note: INote;
    trade: ITrade;
}