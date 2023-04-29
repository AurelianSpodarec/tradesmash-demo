import react, {useEffect, useRef, useState} from 'react';

import LayoutDashboard from '../_components/LayoutDashboard/LayoutDashboard';

import { fakeNotes } from '@/database/fakeNotes';
import NoteContent from './NoteContent';
import NoteNavigation from './NoteNavigation/NoteNavigation';

function NotebookIndex() {
  
    const [notes, setNotes] = useState(fakeNotes)
    const [activeNote, setActiveNote] = useState(0)


    function getNote() {

    }

    function setNote() {
        // setActiveNote()
    }
  
    function setInitialNote() {

    }

    useEffect(() => {
        setInitialNote()
    })
 
    return (
        <LayoutDashboard>
        <div className="flex justify-between ">

            
            <NoteNavigation data={notes} />
            <NoteContent data={notes} />


        </div>
        </LayoutDashboard>
    )
}

export default NotebookIndex;