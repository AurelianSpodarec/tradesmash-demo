import INote from "@/interface/INote";
import NoteItem from "./NoteItem";
import { ScalableContainer, ScalableHeader, ScalableContent } from '../../_components/ScalableCell';
import { useDispatch, useSelector } from "react-redux";
import { getActiveNotebook, setActiveNote } from "@/store/features/notebook/notebookSlice";

function NoteNavigation({ data }:NoteNavigationProps) {

    const dispatch = useDispatch()
    const reduxNotebook = useSelector((state:any) => state.notebook)
    const activeNoteIndex = reduxNotebook.activeNoteIndex
    
    const activeNote = getActiveNotebook()

    function setNoteIndex(id:any) {
        console.log("fire", id)
        dispatch(setActiveNote(id))
    }

    return (
        <aside className="w-full h-full border-r border-r-gray-300">
        <ScalableContainer header={`Heloooooooopomodsmfos mdfodsmfosfdm osdmf osdm osmd`}>

            <ScalableHeader>
            <header className="border-b py-4 px-4 bg-white">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">May 2023</h3>
                    {/* August 2023, Tue 16th */}
                    {/* <h3 className="text-xl font-semibold">{dateHelper.todayDate()}</h3> */}
                </div>

                <section>
                    <div>
                        Your Results: {data && data.length} Notes
                    </div>
                    <input placeholder="Search " className="w-full" />
                </section>

            </header>
            </ScalableHeader>

            <ScalableContent>
            
            <section>

                <ol>
                    {data && data.map((item:INote) => <NoteItem onClick={() => setNoteIndex(item.id)} key={item.createdAt} item={item} isActive={item.id === activeNote.id} />)}
                </ol>

            </section>
            </ScalableContent>

        </ScalableContainer>
        </aside>
    )
}

export default NoteNavigation;

interface NoteNavigationProps {
    data: INote[];
}