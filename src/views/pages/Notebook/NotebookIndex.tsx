import react, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NoteContent from './NoteContent/NoteContent';
import NoteNavigation from './NoteNavigation/NoteNavigation';
import { getNoteByTradeID } from '@/store/features/notes/notesSlice';
import { getActiveNotebook, setActiveNote } from '@/store/features/notebook/notebookSlice';

function NotebookIndex() {
    const dispatch = useDispatch()
    const reduxNotes = useSelector((state:any) => state.notes);
    const reduxNotebook = useSelector((state:any) => state.notebook)
     const notes = reduxNotes.notes

    return (
        <div>
        <div className="grid grid-cols-12 h-full">

            <div className="col-span-4">
                {/* ALL Notes */}
                <NoteNavigation data={notes} />     
            </div>

            <div className="col-span-8">
                <NoteContent />
            </div>

        </div>
        </div>
    )
}

export default NotebookIndex;