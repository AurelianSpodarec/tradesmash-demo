import { useDispatch, useSelector } from "react-redux";

import { setActiveNote } from "@/store/features/journal/journalSlice";
import { getTradesByDate } from "@/store/features/trades/tradeSliceSelectors";

import INote from "@/interface/INote";
import NoteItem from "./Notes/NoteItem";

function NoteList() {
    const dispatch = useDispatch()
    const reduxJournal = useSelector((state:any) => state.journal);
    const selectedDate = reduxJournal.selectedDate
    const tradesByDate = getTradesByDate(selectedDate) // later this should be based on what the user clicks/sets

    function setActiveJournal(note:INote) {
        // console.log("fire", note.id === reduxJournal.activeNoteIndex)
        console.log(note)
        dispatch(setActiveNote(note))
    }


    if(tradesByDate.length === 0) return <>No Notes on that day - Add Note</>
    return (
        <div>
        <ol>
            {tradesByDate && tradesByDate.map((item:INote) => (
                <NoteItem 
                    onClick={() => setActiveJournal(item)} 
                    key={item.id} 
                    item={item} 
                    isActive={item.id === reduxJournal.activeNoteIndex} 
                />
            ))}
        </ol>
        </div>
    )
}

export default NoteList;