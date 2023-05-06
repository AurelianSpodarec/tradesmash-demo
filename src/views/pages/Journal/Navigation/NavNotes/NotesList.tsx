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


    if(tradesByDate.length === 0) return (
        <div className="w-full flex items-center justify-center h-1/2">
            <div className="flex flex-col items-center">
                {/* <svg className="w-10 h-10 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.7a15.9,15.9,0,0,1-4.7,11.3L168,219.3a15.9,15.9,0,0,1-11.3,4.7H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.7,168Z"></path></svg> */}
                <svg className="w-10 h-10 mb-2 opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 4h10a2 2 0 0 1 2 2v10m-.588 3.417c-.362 .36 -.86 .583 -1.412 .583h-12a2 2 0 0 1 -2 -2v-12c0 -.552 .224 -1.053 .586 -1.414"></path>
                    <path d="M4 10h6m4 0h6"></path>
                    <path d="M10 4v2m0 4v10"></path>
                    <line x1="3" y1="3" x2="21" y2="21"></line>
                </svg>
                <h3 className="text-sm italic">No notes on this day</h3>
            </div>
        </div>
    )
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