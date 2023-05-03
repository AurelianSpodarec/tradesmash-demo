function NoteCalendarDay({ onClick, dayName, dayNumber, hasNote, currentDay, isActive }:any) {

    return (
        <li onClick={onClick} className={`flex flex-col ${currentDay ? "font-bold" : ""}`}>
            {isActive ? "Clicked" : "No"}
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

export default NoteCalendarDay;