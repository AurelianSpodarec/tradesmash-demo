import INote from "@/interface/INote";
import { useDispatch } from "react-redux";
import NoteCalendar from "./NavHeader/JournalCalendar";
import NoteList from "./NavNotes/NotesList";
import { getTradesByDate } from "@/store/features/trades/tradeSliceSelectors";
import { getTrades } from "@/services/apis/demo/requests/trades";


// If one note exists on the day, no navigation sould show, and instead it should show "add another note"

function JournalNavIndex({ data }:JournalNavIndexProps) {

    // const dispatch = useDispatch()
    // const activeNote = getActiveJournal()
    const trades = getTrades()


    
    // if(!data) return <>Loading</>
    return (
        <div className="w-full bg-white h-full border-r border-r-gray-300">
            <NoteCalendar data={trades} />
            <NoteList />
        </div>
    )
}

export default JournalNavIndex;

interface JournalNavIndexProps {
    data: INote[];
}