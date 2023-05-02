import INote from "@/interface/INote";
import NoteItem from "./NoteItem";
import { useDispatch } from "react-redux";
import { getActiveNotebook, setActiveNote } from "@/store/features/notebook/notebookSlice";





import React, { useState, useEffect } from 'react';
// function PastSevenDays() {
//     const [activeDay, setActiveDay] = useState(new Date()); // set current date as active by default
//     const [firstIndex, setFirstIndex] = useState(0);
  
//     const handlePrevDay = () => {
//       setActiveDay(prevState => {
//         const prevDay = new Date(prevState);
//         prevDay.setDate(prevDay.getDate() - 1); // decrement date by 1 day
//         return prevDay;
//       });
//     };
  
//     const handleNextDay = () => {
//       setActiveDay(prevState => {
//         const nextDay = new Date(prevState);
//         nextDay.setDate(nextDay.getDate() + 1); // increment date by 1 day
  
//         const lastDay = new Date();
//         lastDay.setDate(lastDay.getDate() + 6); // set last day to 6 days from now
  
//         if (nextDay > lastDay) { // wrap around to first day if nextDay goes past last day
//           nextDay.setDate(nextDay.getDate() - 7);
//           setFirstIndex(prevState => prevState + 1);
//         }
  
//         return nextDay;
//       });
//     };
  
//     const getDateRange = () => {
//       const dateRange = [];
//       const today = new Date();
//       const firstDay = new Date(today);
//       firstDay.setDate(firstDay.getDate() - 6); // set first day to 6 days before now
//       for (let i = 0; i < 7; i++) { // loop over past 7 days
//         const date = new Date(firstDay);
//         date.setDate(date.getDate() + i);
//         dateRange.push(date);
//       }
//       return dateRange;
//     };
  
//     const dateRange = getDateRange();
  
//     useEffect(() => {
//       const activeIndex = dateRange.findIndex(date => date.toDateString() === activeDay.toDateString());
//       if (activeIndex === -1) { // active day is outside of current range, shift range accordingly
//         if (activeDay < dateRange[firstIndex]) {
//           setFirstIndex(prevState => prevState - 1);
//         } else {
//           setFirstIndex(prevState => prevState + 1);
//         }
//       }
//     }, [activeDay, dateRange, firstIndex]);
  
//     return (
//       <div>
//         <button onClick={handlePrevDay}>Prev</button>
//         {dateRange.slice(firstIndex, firstIndex + 7).map(date => (
//           <button
//             key={date.toISOString()}
//             onClick={() => setActiveDay(date)}
//             style={{
//               fontWeight: activeDay.toDateString() === date.toDateString() ? 'bold' : 'normal',
//               color: activeDay.toDateString() === date.toDateString() ? 'red' : 'black'
//             }}
//           >
//             {date.toDateString()}
//           </button>
//         ))}
//         <button onClick={handleNextDay}>Next</button>
//       </div>
//     );
//   }
  



// function Calendar() {
//     const [activeDay, setActiveDay] = useState(new Date().getDay());
//     const [startDate, setStartDate] = useState(new Date());
  
//     const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
//     const handleDayClick = (index) => {
//       setActiveDay(index);
//     };
  
//     const handlePrevClick = () => {
//       const newStartDate = new Date(startDate);
//       newStartDate.setDate(startDate.getDate() - 1);
//       setStartDate(newStartDate);
//       setActiveDay(-1); // reset active day
//     };
  
//     const handleNextClick = () => {
//       const newStartDate = new Date(startDate);
//       newStartDate.setDate(startDate.getDate() + 7);
//       setStartDate(newStartDate);
//       setActiveDay(-1); // reset active day
//     };
  
//     const previousWeek = [];
//     for (let i = 0; i < 7; i++) {
//       const currentDate = new Date(startDate);
//       currentDate.setDate(startDate.getDate() + i);
//       previousWeek.push(currentDate);
//     }
  
//     return (
//       <div>
//         <div>
//           <button onClick={handlePrevClick}>Prev</button>
//           <button onClick={handleNextClick}>Next</button>
//         </div>
//         {previousWeek.map((day, index) => (
//           <div
//             key={day}
//             onClick={() => handleDayClick(index)}
//             style={{
//               display: 'inline-block',
//               width: '14.28%',
//               padding: '10px',
//               background: index === activeDay ? 'blue' : 'white',
//               color: index === activeDay ? 'white' : 'black',
//               fontWeight: index === activeDay ? 'bold' : 'normal',
//               cursor: 'pointer',
//             }}
//           >
//             {daysOfWeek[index]} {day.getDate()}
//           </div>
//         ))}
//       </div>
//     );
//   }







function CalendarHorizontal() {
    const [activeDay, setActiveDay] = useState(new Date());
   
   
    const today = new Date();
    const previousWeek = [];

   
for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() - i);
  
    const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(currentDate);
    const dayNumber = new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(currentDate);
    const formattedDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(currentDate);
    const isActive = currentDate.toDateString() === today.toDateString();

    const dayInfo = {
      dayName,
      dayNumber,
      formattedDate,
      date: currentDate,
      isActive
    };
  
    previousWeek.unshift(dayInfo);
  }

      console.log(previousWeek)
    // console.log("active day", activeDay)
    // console.log("seveon days", plusSeven)
    // console.log("prev seven days", minusSeven)
    return (
        <ul className="flex justify-between items-center">
            {previousWeek && previousWeek.map((day) => {
                return (
                    <DayItem dayName={day.dayName} dayNumber={day.dayNumber} hasNote={false} isActive={day.isActive} />
                )
            })}
        </ul>
    )
}

  
function DayItem({ dayName, dayNumber, hasNote, isActive }:any) {
    return (
        <li className={`flex flex-col ${isActive ? "font-bold" : ""}`}>
            <div className="flex flex-col">
                <span className="mb-2">{dayName}</span>
                <span className="text-gray-500">{dayNumber}</span>
            </div>
            <div className={` ${hasNote ? "yes" : "hidden"} bg-red-500 h-2 w-2 rounded-full`}>
                <span className="sr-only">This day has Note</span>
            </div>
        </li>
    )
}


// If one note exists on the day, no navigation sould show, and instead it should show "add another note"


function NoteNavigation({ data }:NoteNavigationProps) {

    const dispatch = useDispatch()
    const activeNote = getActiveNotebook()

    function setNoteIndex(id:any) {
        console.log("fire", id)
        dispatch(setActiveNote(id))
    }

    return (
        <div className="w-full bg-white h-full border-r border-r-gray-300">

            <div className="border border-b-gray-300 px-8 pt-8 pb-4">

                <div className="flex justify-between items-center mb-8">
                    <span className="font-semibold text-lg">May 2023</span>
                    <div>
                        <span>Today</span>
                        <span>Left</span>
                        <span>Right</span>
                    </div>
                </div>

                <div>
                    
                        {/* <DayItem dayName="Mon" dayNumber="9" hasNote={false} isActive={false} />
                        <DayItem dayName="Tue" dayNumber="10" hasNote={false} isActive={false} />
                        <DayItem dayName="Wed" dayNumber="11" hasNote={true} isActive={false} />
                        <DayItem dayName="Thur" dayNumber="12" hasNote={false} isActive={false} />
                        <DayItem dayName="Fri" dayNumber="13" hasNote={false} isActive={false} />
                        <DayItem dayName="Sat" dayNumber="14" hasNote={true} isActive={false} />
                        <DayItem dayName="Sun" dayNumber="15" hasNote={false} isActive={true} /> */}
                        <CalendarHorizontal />
                    
                </div>


            </div>

            <ol>
                {data && data.map((item:INote) => (
                    <NoteItem 
                        onClick={() => setNoteIndex(item.id)} 
                        key={item.createdAt} 
                        item={item} 
                        isActive={activeNote} 
                    />
                ))}
            </ol>
        </div>
    )
}

export default NoteNavigation;

interface NoteNavigationProps {
    data: INote[];
}