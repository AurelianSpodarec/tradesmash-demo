import { useSelector } from 'react-redux';
import JournalContentEditor from './_components/JournalContentEditor';
import JournalContentHeader from './_components/JournalContentHeader';
import { getNoteByTradeID } from '@/store/features/journal/journalSliceSelectors';

function JournalContent() {
    const activeNoteId = useSelector((state:any) => state.journal.activeNote?.id);
    const note = getNoteByTradeID(activeNoteId);

    if(!note) return (
        <div className="w-full flex items-center justify-center h-full bg-white">
            <div className="flex flex-col items-center">
                <svg className="w-16 h-16 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.7a15.9,15.9,0,0,1-4.7,11.3L168,219.3a15.9,15.9,0,0,1-11.3,4.7H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.7,168Z"></path></svg>
                <h3 className="text-lg italic">Select a note to open the editor</h3>
            </div>
        </div>
    )
    return (
        <div className="flex flex-col h-full">
            <JournalContentHeader note={note} />
            <JournalContentEditor data={note} />
        </div>
    );
}

export default JournalContent;