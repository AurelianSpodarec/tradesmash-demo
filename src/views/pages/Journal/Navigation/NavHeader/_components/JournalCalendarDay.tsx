import dateFormatter from "@/utils/dateFormatter";

function JournalCalendarDay({ item, onClick, isActive }:any) {
    const { dayName, dayNumber, hasNote, date } = item;

    const formatedDate = dateFormatter.formatDateISO(date)
    console.log("hi",date, isActive)
    return (
        <li onClick={onClick} className={`flex flex-col text-center relative mb-4`}>

            <div className={` ${isActive === formatedDate ? " absolute bottom-0 border-b-4 border-b-black pb-4 -m-[2px]" : ""}`}></div>

            <div className="flex flex-col">
                <span className="text-sm mb-2">{dayName}</span>
                <span className={`${isActive === formatedDate ? "font-bold" : " text-gray-500"}`}>{dayNumber}</span>
            </div>
            <div className={` ${hasNote ? "block" : "hidden"} bg-red-500 h-[5px] mx-auto w-[5px] rounded-full`}>
                <span className="sr-only">This day has Note</span>
            </div>
        </li>
    )
}

export default JournalCalendarDay;