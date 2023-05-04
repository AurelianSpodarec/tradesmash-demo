import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JournalNavIndex from './Navigation/JournalNavIndex';
import JournalContent from './Content/JournalContentIndex';
import { setSelectedDate } from '@/store/features/journal/journalSlice';

function JournalIndex() {
    const reduxJournal = useSelector((state:any) => state.notes);
    const notes = reduxJournal && reduxJournal.notes
    const dispatch = useDispatch()

    const date = new Date()

    useEffect(() => {
        dispatch(setSelectedDate(date))
    }, [])

    return (
        <div className="h-full overflow-hidden">
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