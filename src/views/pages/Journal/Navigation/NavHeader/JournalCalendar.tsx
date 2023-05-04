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
        <div className="border border-b-gray-300 px-8 pt-8 pb-4">
            <div className="flex justify-between items-center mb-8">
                <span className="font-semibold text-lg">April - May 2023</span>
                <div>
                    <span>Today</span>
                    <button type="button" onClick={() => navigatePreviousWeek()}>Prev Week</button>
                    <button type="button" onClick={() => navigateNextWeek()}>Next Week</button>
                </div>
            </div>

            <ol className="flex justify-between items-center">
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