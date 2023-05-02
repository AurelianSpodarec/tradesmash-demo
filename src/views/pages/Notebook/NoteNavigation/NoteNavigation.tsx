import INote from "@/interface/INote";
import NoteItem from "./NoteItem";
import { useDispatch } from "react-redux";
import { getActiveNotebook, setActiveNote } from "@/store/features/notebook/notebookSlice";

function NoteNavigation({ data }:NoteNavigationProps) {

    const dispatch = useDispatch()
    const activeNote = getActiveNotebook()

    function setNoteIndex(id:any) {
        console.log("fire", id)
        dispatch(setActiveNote(id))
    }

    return (
        <div className="w-full bg-white h-full border-r border-r-gray-300">
            <ol>
                {data && data.map((item:INote) => (
                    <NoteItem 
                        onClick={() => setNoteIndex(item.id)} 
                        key={item.createdAt} 
                        item={item} 
                        isActive={activeNote} 
                    />
                ))}
            </ol>
        </div>
    )
}

export default NoteNavigation;

interface NoteNavigationProps {
    data: INote[];
}