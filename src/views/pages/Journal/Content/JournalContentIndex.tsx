import { useSelector } from 'react-redux';
import JournalContentEditor from './_components/JournalContentEditor';
import JournalContentHeader from './_components/JournalContentHeader';
import { getNoteByTradeID } from '@/store/features/journal/journalSliceSelectors';

function JournalContent() {
    const reduxJournal = useSelector((state:any) => state.journal);
    const activeNote = reduxJournal && reduxJournal.activeNote

    const note = getNoteByTradeID(activeNote.id)
    console.log("note", note)
    console.log("note active", activeNote)
    // find note by trade id
 
    // const notes = reduxJournal.notes
    // const activeNoteIndex = reduxJournal.activeNoteIndex
    
    // if(notes === undefined) return <>Loading...</>
    return (
        <div className="flex flex-col h-full">
            <JournalContentHeader />
            <JournalContentEditor data={note} />
        </div>
    )
}

export default JournalContent;