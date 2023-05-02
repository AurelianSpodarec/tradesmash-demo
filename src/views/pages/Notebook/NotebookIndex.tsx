import { useDispatch, useSelector } from 'react-redux';
import NoteNavigation from './NoteNavigation/NoteNavigation';
import NoteContent from './NoteContent/NoteContent';

function NotebookIndex() {
    const reduxNotes = useSelector((state:any) => state.notes);
    const reduxNotebook = useSelector((state:any) => state.notebook)
    const notes = reduxNotes.notes

    return (
        <div className="h-full">
            <div className="grid grid-cols-11 h-full">

                <aside className="col-span-4">
                    <NoteNavigation data={notes} />
                </aside>
                <section className="col-span-7">
                    <NoteContent />
                </section>

            </div>
        </div>
    )
}

export default NotebookIndex;