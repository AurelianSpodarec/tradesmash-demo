import INote from "@/interface/INote";
import { getTradeByID } from "@/store/features/trades/tradeSliceSelectors";
import dateFormatter from "@/utils/dateFormatter";
import Button from "@/views/atoms/Button/Button";

function JournalContentHeader({ note, onClickSaveJournal }:JournalContentHeaderProps) {
    const trade = note && getTradeByID(note.tradeID);

    return (
        <div className=" bg-white p-6 border-b border-b-gray-300 flex justify-between items-start w-full">
                {/* <h3>Journal: {dateHelper.formatDate(notes[0].createdAt)}</h3> */}
            <div className="flex flex-col">

                <div className="flex space-x-4 mb-2">
                    <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 bg-blue-300 rounded"></div>
                        {trade ?
                            <span className="text-xl font-bold">Trade #{trade && trade.id}</span>
                            :
                            <span>Assign a trade</span>
                        }
                    </div>
                    
                    {/* <span className="text-xl font-bold">Net P&L: £2323.94</span> */}
                </div>


                <div className="flex space-x-4">
                    {trade && 
                        <div>
                            <span className="font-medium">Emotional State:</span> {trade && trade.emotionalState}
                        </div>
                    }
                    <div>
                        <span className="font-medium">Last Saved:</span> {note && dateFormatter.formatDate(note.updatedAt)}
                        {/* Saving... */}
                        {/* Last saved a few seconds ago */}
                    </div>
                </div>

                {/* <time className="text-gray-700">15th August Wed, 2020</time> */}
                <div className="flex space-x-4">
                    {/* <span><span className="font-semibold">Created At:</span> {dateHelper.formatDate(activeJournal.createdAt)}</span> */}
                    {/* <span><span className="font-semibold">Updated At:</span> {dateHelper.formatDate(activeJournal.updatedAt)}</span> */}
                </div>
            </div>

            <Button onClick={onClickSaveJournal}>
                Save
            </Button>
        </div>
    )
}

export default JournalContentHeader;

interface JournalContentHeaderProps {
    note?: INote;
    onClickSaveJournal: any;
}