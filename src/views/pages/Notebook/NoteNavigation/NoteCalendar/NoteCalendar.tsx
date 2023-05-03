    import React, { useState, useEffect } from 'react';
    import NoteCalendarDay from './_components/NoteCalendarDay';


    function NoteCalendar() {
        const [selectedDate, setSelectedDate] = useState()

        const [previousWeek, setPreviousWeek] = useState([]);
        const [activeWeek, setActiveWeek] = useState(0)
        const today = new Date();
    
        function setWeek() {
            const week = []
            for (let i = 0; i < 7; i++) {
                const currentDate = new Date(today);
                currentDate.setDate(today.getDate() - i + activeWeek);
            
                const dayName = new Intl.DateTimeFormat('en-GB', { weekday: 'short' }).format(currentDate);
                const dayNumber = new Intl.DateTimeFormat('en-GB', { day: 'numeric' }).format(currentDate);
                const formattedDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(currentDate);
                const currentDay = currentDate.toDateString() === today.toDateString();
                const isActive = selectedDate?.toDateString() === today.toDateString();
console.log(today)
                const dayInfo = {
                    dayName,
                    dayNumber,
                    formattedDate,
                    date: currentDate,
                    currentDay,
                    isActive
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
            console.log("click", day.date)
            setSelectedDate(day.date);
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
                            <NoteCalendarDay 
                                onClick={() => onDayClick(day)}
                                dayName={day.dayName} 
                                dayNumber={day.dayNumber} 
                                hasNote={false} 
                                currentDay={day.currentDay} 
                                isActive={day.isActive}
                            />
                        )
                    })}
                </ol>

            </div>
        )
    }

    export default NoteCalendar;