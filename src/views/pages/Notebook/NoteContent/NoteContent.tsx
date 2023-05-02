
import { updateNote } from '@/store/features/notes/notesSlice';
import { useDispatch, useSelector } from 'react-redux';
import dateHelper from '@/utils/dateHelper';
import { getActiveNotebook } from '@/store/features/notebook/notebookSlice';
import NoteContentEditor from './_components/NoteContentEditor';
import NoteContentHeader from './_components/NoteContentHeader';


function NoteContent({ data }:any) {
    const reduxNotes = useSelector((state:any) => state.notes);
    const reduxNotebook = useSelector((state:any) => state.notebook)
 
    const notes = reduxNotes.notes
    const activeNoteIndex = reduxNotebook.activeNoteIndex
    const activeNote = getActiveNotebook()
    
    if(activeNote === undefined) return <>Loading...</>
    return (
        <div className="flex flex-col h-full">
            <NoteContentHeader />
            <NoteContentEditor />
        </div>
    )
}

export default NoteContent;