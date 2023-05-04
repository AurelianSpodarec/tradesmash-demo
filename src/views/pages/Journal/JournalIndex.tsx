import { useDispatch, useSelector } from 'react-redux';
import JournalNavIndex from './Navigation/JournalNavIndex';
import JournalContent from './Content/JournalContentIndex';

function JournalIndex() {
    const reduxJournal = useSelector((state:any) => state.notes);
    const notes = reduxJournal && reduxJournal.notes

    return (
        <div className="h-full">
            <div className="grid grid-cols-11 h-full">

                <aside className="col-span-4">
                    <JournalNavIndex data={notes} />
                </aside>
                <section className="col-span-7">
                    <JournalContent />
                </section>

            </div>
        </div>
    )
}

export default JournalIndex;