import dateFormatter from "@/utils/dateFormatter";

function JournalCalendarDay({ item, onClick, isActive }:any) {
    const { dayName, dayNumber, hasNote, date } = item;

    const formatedDate = dateFormatter.formatDateISO(date)
    const active = isActive === formatedDate

    console.log("hi",date, isActive)
    return (
        <li onClick={onClick} className={`cursor-pointer flex flex-col text-center relative mb-4`}>

            <div className={` absolute bottom-0 border-b-4 pb-4 -mb-[18px] h-[2px] w-full ${active ? "border-b-gray-700" : "border-b-transparent"}`}></div>

            <div className="flex flex-col">
                <span className="text-sm mb-2">{dayName}</span>
                <span className={`${active ? "font-bold" : " text-gray-500"}`}>{dayNumber}</span>
            </div>
            <div className={` ${hasNote ? " bg-red-500" : "bg-transparent"} h-[5px] mx-auto w-[5px] rounded-full`}>
                <span className="sr-only">This day has Note</span>
            </div>
        </li>
    )
}

export default JournalCalendarDay;