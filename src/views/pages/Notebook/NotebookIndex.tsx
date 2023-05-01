import react, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

function NotebookIndex() {
    const reduxNotes = useSelector((state:any) => state.notes);
    const reduxNotebook = useSelector((state:any) => state.notebook)
    const notes = reduxNotes.notes

    return (
        <div>
            Notebook
        </div>
    )
}

export default NotebookIndex;