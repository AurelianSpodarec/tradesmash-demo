import react, {useEffect, useRef, useState} from 'react';
import { useSelector } from 'react-redux';

import LayoutDashboard from '../_components/LayoutDashboard/LayoutDashboard';

import NoteContent from './NoteContent';
import NoteNavigation from './NoteNavigation/NoteNavigation';
import { getNoteByTradeID } from '@/store/features/notes/notesSlice';

function NotebookIndex() {
    const reduxNotes = useSelector((state:any) => state.notes);

    const notes = reduxNotes.notes

    // const [activeNote, setActiveNote] = useState({});
    const activeNote = getNoteByTradeID(9)

    // getNo

    useEffect(() => {
    }, [])

    return (
        <LayoutDashboard container="none">
        <div className="grid grid-cols-12 h-full">

            <div className="col-span-4">
                {/* ALL Notes */}
                <NoteNavigation data={notes} />     
            </div>

            <div className="col-span-8">
                {/* Single Active note */}
                <NoteContent data={activeNote} />
            </div>

        </div>
        </LayoutDashboard>
    )
}

export default NotebookIndex;