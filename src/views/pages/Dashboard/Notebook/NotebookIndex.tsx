import react, {useEffect, useRef, useState} from 'react';

import LayoutDashboard from '../_components/LayoutDashboard/LayoutDashboard';

import { fakeNotes } from '@/database/fakeNotes';
import NoteContent from './NoteContent';
import NoteNavigation from './NoteNavigation/NoteNavigation';

// import ScalableContainer from '../_components/ScalableCell/ScalableContainer';
// import ScalableHeader from '../_components/ScalableCell/ScalableHeader';
// import ScalableContent from '../_components/ScalableCell/ScalableContent';



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