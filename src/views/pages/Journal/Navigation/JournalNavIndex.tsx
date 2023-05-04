import INote from "@/interface/INote";
import { useDispatch } from "react-redux";
import NoteCalendar from "./NavHeader/JournalCalendar";
import NoteList from "./NavNotes/NotesList";
import { getTradesByDate } from "@/store/features/trades/tradeSliceSelectors";


// If one note exists on the day, no navigation sould show, and instead it should show "add another note"

function JournalNavIndex({ data }:JournalNavIndexProps) {

    const dispatch = useDispatch()
    // const activeNote = getActiveJournal()
    const trades = getTradesByDate()

    function setNoteIndex(id:any) {
        console.log("fire", id)
        // dispatch(setActiveNote(id))
    }
    
    // if(!data) return <>Loading</>
    return (
        <div className="w-full bg-white h-full border-r border-r-gray-300">
            <NoteCalendar />
            <NoteList data={trades} />
        </div>
    )
}

export default JournalNavIndex;

interface JournalNavIndexProps {
    data: INote[];
}