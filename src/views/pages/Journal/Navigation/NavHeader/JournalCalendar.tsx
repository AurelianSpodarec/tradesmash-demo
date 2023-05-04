import React, { useState, useEffect } from 'react';
import JournalCalendarDay from './_components/JournalCalendarDay';
import { getTradesByDate } from '@/store/features/trades/tradeSliceSelectors';
import dateFormatter from '@/utils/dateFormatter';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate } from '@/store/features/journal/journalSlice';
  

function JournalCalendar({ data }:any) {

    const tradingData = data
    const reduxJournal = useSelector((state:any) => state.journal);
    const selectedDate = reduxJournal.filterByDate
    const dispatch = useDispatch()

    const hasNote = false;
    
    
    // console.log("Journal calendar", tradingData)


    const [previousWeek, setPreviousWeek] = useState([]);
    const [activeWeek, setActiveWeek] = useState(0)
    const today = new Date();


    // const tradeByDate = getTradesByDate("2023-04-26")
    // console.log("tradeByDate", tradeByDate)

    function setWeek() {
        const week = []
        for (let i = 0; i < 7; i++) {
            const currentDate = new Date(today);
            const dateISO = dateFormatter.formatDateISO(currentDate)
            currentDate.setDate(today.getDate() - i + activeWeek);
        
            const dayName = new Intl.DateTimeFormat('en-GB', { weekday: 'short' }).format(currentDate);
            const dayNumber = new Intl.DateTimeFormat('en-GB', { day: 'numeric' }).format(currentDate);
            const formattedDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(currentDate);
            const currentDay = currentDate.toDateString() === today.toDateString();
            const isActive = selectedDate === dateFormatter.formatDateISO(today);
            const hasNote = tradingData.find(trade => trade.date === dateFormatter.formatDateISO(currentDate) && trade.notes === true)


            // console.log("hasNote", tradingData.find(trade => trade.date === dateFormatter.formatDateISO(currentDate) && trade.notes === true))

            // console.log("woo", tradingData.find(trade => trade.date === formatDateISO(currentDate)))
            // console.log(formatDateISO(currentDate))
            // console.log("hasNote",  tradingData.find(trade => trade.date === dateISO))
            // console.log(dateISO)
            // console.log("current today", formatDateISO(currentDate) === tradingData)
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
                <span className="font-semibold text-lg">April - May 2023</span>
                <div>
                    <button type="button" onClick={() => dispatch(setSelectedDate(dateFormatter.formatDateISO(new Date())))} className="border p-1 mr-2">Today</button>
                    <button type="button" className="h-6 w-6 border p-1" onClick={() => navigatePreviousWeek()}>
                    <svg className="h-full w-full" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                    </button>
                    <button type="button" className="h-6 w-6 border p-1" onClick={() => navigateNextWeek()}>
                        <svg className="h-full w-full" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </button>
                </div>
            </div>

            <ol className="grid grid-cols-7">
                {previousWeek && previousWeek.map((day) => {
                    return (
                        <>
                        {console.log("day")}
                        <JournalCalendarDay 
                            key={day.formattedDate}
                            item={day}
                            onClick={() => onDayClick(day)}
                            isActive={selectedDate}
                        />
                        </>
                    )
                })}
            </ol>

        </div>
    )
}

export default JournalCalendar;