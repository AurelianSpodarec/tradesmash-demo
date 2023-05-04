import INote from "@/interface/INote";
import NoteItem from "./Notes/NoteItem";
import { useDispatch, useSelector } from "react-redux";
import { getTradesByDate } from "@/store/features/trades/tradeSliceSelectors";
import { setActiveNote } from "@/store/features/journal/journalSlice";

function NoteList({ data }:any) {

    const dispatch = useDispatch()
    const tradesByDate = getTradesByDate("2023-05-04") // later this should be based on what the user clicks/sets


    function setActiveJournal(note:INote) {
        console.log("fire", note)
        dispatch(setActiveNote(note))
    }

    console.log("ppp", tradesByDate)
    if(!tradesByDate) <>Loading</>
    return (
        <div>
        <ol>
            {tradesByDate && tradesByDate.map((item:INote) => (
                <NoteItem 
                    onClick={() => setActiveJournal(item)} 
                    key={item.id} 
                    item={item} 
                    // isActive={activeNote} 
                />
            ))}
        </ol>
        </div>
    )
}

export default NoteList;