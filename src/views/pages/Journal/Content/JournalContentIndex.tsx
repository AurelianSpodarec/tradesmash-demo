import { useDispatch, useSelector } from 'react-redux';
import JournalContentEditor from './_components/JournalContentEditor';
import JournalContentHeader from './_components/JournalContentHeader';


function JournalContent({ data }:any) {
    const reduxJournal = useSelector((state:any) => state.notes);
 
    // const notes = reduxJournal.notes
    // const activeNoteIndex = reduxJournal.activeNoteIndex
    
    // if(notes === undefined) return <>Loading...</>
    return (
        <div className="flex flex-col h-full">
            <JournalContentHeader />
            <JournalContentEditor />
        </div>
    )
}

export default JournalContent;