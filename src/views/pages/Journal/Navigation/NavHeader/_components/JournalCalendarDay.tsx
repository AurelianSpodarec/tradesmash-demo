import dateFormatter from "@/utils/dateFormatter";

function JournalCalendarDay({ item, onClick, isActive }:any) {
    const { dayName, dayNumber, hasNote, currentDay, dateISO, date } = item;

    const formatedDate = dateFormatter.formatDateISO(date)
    console.log("hi",date, isActive)
    return (
        <li onClick={onClick} className={`flex flex-col ${isActive === formatedDate ? "font-bold" : ""}`}>
            <div className="flex flex-col">
                <span className="mb-2">{dayName}</span>
                <span className="text-gray-500">{dayNumber}</span>
            </div>
            <div className={` ${hasNote ? "block" : "hidden"} bg-red-500 h-2 w-2 rounded-full`}>
                <span className="sr-only">This day has Note</span>
            </div>
        </li>
    )
}

export default JournalCalendarDay;