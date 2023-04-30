import react, {useEffect, useRef, useState} from 'react';
import { useSelector } from 'react-redux';

import LayoutDashboard from '../_components/LayoutDashboard/LayoutDashboard';

import NoteContent from './NoteContent';
import NoteNavigation from './NoteNavigation/NoteNavigation';

function NotebookIndex() {
    const reduxNotes = useSelector((state:any) => state.notes);

    const notes = reduxNotes.notes

    const [activeNote, setActiveNote] = useState(0);

    // getNo

    return (
        <LayoutDashboard container="none">
        <div className="grid grid-cols-12 h-full">

            <div className="col-span-4">
                <NoteNavigation data={notes} />     
            </div>

            <div className="col-span-8">
                <NoteContent data={notes} />
            </div>

        </div>
        </LayoutDashboard>
    )
}

export default NotebookIndex;