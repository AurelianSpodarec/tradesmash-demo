// @ts-nocheck
import { useState, useEffect } from 'react';
import JournalCalendarDay from './_components/JournalCalendarDay';

import dateFormatter from '@/utils/dateFormatter';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate } from '@/store/features/journal/journalSlice';
import ITrade from '@/interface/ITrade';
    
function JournalCalendar({ data }:any) {

    const tradingData = data
    const reduxJournal = useSelector((state:any) => state.journal);
    const selectedDate = reduxJournal.filterByDate
    const dispatch = useDispatch()

    const [previousWeek, setPreviousWeek] = useState([]);
    const [activeWeek, setActiveWeek] = useState(0)
    const today = new Date();

    const [date, setDate] = useState()
    function setWeek() {
        const week:any = []

        for (let i = 0; i < 7; i++) {
            const currentDate:any = new Date(today);
            const dateISO = dateFormatter.formatDateISO(currentDate)
            currentDate.setDate(today.getDate() - i + activeWeek);
        
            const dayName = new Intl.DateTimeFormat('en-GB', { weekday: 'short' }).format(currentDate);
            const dayNumber = new Intl.DateTimeFormat('en-GB', { day: 'numeric' }).format(currentDate);
            const formattedDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(currentDate);
            const currentDay = currentDate.toDateString() === today.toDateString();
            const isActive = selectedDate === dateFormatter.formatDateISO(today);
            const hasNote = tradingData.find((trade:ITrade) => trade.date === dateFormatter.formatDateISO(currentDate) && trade.hasNote === true)

            const dayInfo = {
                dateISO,
                dayName,
                dayNumber,
                formattedDate,
                date: currentDate,
                currentDay,
                isActive,
                hasNote
            };
            setDate(currentDate)
            week.unshift(dayInfo);
        }
        
        setPreviousWeek(week)
    }

    function navigateNextWeek() {
        setActiveWeek(activeWeek => activeWeek + 7)
    }

    function navigatePreviousWeek() {
        setActiveWeek(activeWeek => activeWeek - 7)
    }

    function onDayClick(day:any) {
        dispatch(setSelectedDate(day.date));
    }

    useEffect(() => {
        setWeek()
    }, [activeWeek])

    return (
        <div className="border border-b-gray-300 px-8 pt-8 mb-2">
            <div className="flex justify-between items-center mb-8">
                <span className="font-semibold text-lg">{date && dateFormatter.getMonthName(date.getMonth() + 1)} - {date && date.getFullYear() }</span>
                <div className="flex items-center">
                    <button type="button" onClick={() => setDate(new Date())} className="text-xs border px-2 h-6 mr-2">Today</button>
                    <button type="button" className="h-6 w-6 border p-1" onClick={() => navigatePreviousWeek()}>
                    <svg className="h-full w-full" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                    </button>
                    <button type="button" className="h-6 w-6 border p-1" onClick={() => navigateNextWeek()}>
                        <svg className="h-full w-full" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </button>
                </div>
            </div>

            <ol className="grid grid-cols-7">
                {previousWeek && previousWeek.map((day:any) => {
                    return (
                        <JournalCalendarDay 
                            key={day.date}
                            item={day}
                            onClick={() => onDayClick(day)}
                            isActive={selectedDate}
                        />
                    )
                })}
            </ol>

        </div>
    )
}

export default JournalCalendar;