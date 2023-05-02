import react, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../_components/Container';

function NotebookIndex() {
    const reduxNotes = useSelector((state:any) => state.notes);
    const reduxNotebook = useSelector((state:any) => state.notebook)
    const notes = reduxNotes.notes

    return (
        <Container>
            Notebook
        </Container>
    )
}

export default NotebookIndex;