import react, {useEffect, useRef, useState} from 'react';

import LayoutDashboard from "@/views/layouts/LayoutDashboard/LayoutDashboard";
import { Editor } from '@tinymce/tinymce-react';
import { fakeNotes } from '@/database/fakeNotes';
import NoteContent from './NoteContent';
import NoteNavigation from './NoteNavigation';





// show all calendar
// show only where notes are




  


function NotebookIndex() {

    const [editorValue, setEditorValue] = useState(`<p>This is the initial content of the editor.</p>`)
    const editorRef = useRef(null);

    const [notes, setNotes] = useState(fakeNotes)
    const [activeNote, setActiveNote] = useState(0)


    function onChange(e:any) {
        setEditorValue(e)
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
            <NoteContent />


        </div>
        </LayoutDashboard>
    )
}

export default NotebookIndex;