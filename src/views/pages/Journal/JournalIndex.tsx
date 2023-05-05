import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedDate } from '@/store/features/journal/journalSlice';

import JournalNavIndex from './Navigation/JournalNavIndex';
import JournalContent from './Content/JournalContentIndex';

function JournalIndex() {
    const dispatch = useDispatch()
    const date = new Date()

    useEffect(() => {
        dispatch(setSelectedDate(date))
    }, [])

    return (
        <div className="h-full overflow-hidden">
            <div className="grid grid-cols-11 h-full">

                <aside className="col-span-4">
                    <JournalNavIndex />
                </aside>
                <section className="col-span-7">
                    <JournalContent />
                </section>

            </div>
        </div>
    )
}

export default JournalIndex;