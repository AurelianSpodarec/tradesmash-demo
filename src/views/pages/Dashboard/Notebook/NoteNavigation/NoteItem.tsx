import dateHelper from "@/utils/dateHelper";

function NoteItem({ item, isActive, onClick }:any) {

    console.log(item, isActive)
    return (
        <li onClick={onClick} className={` ${isActive ? "bg-gray-400/10" : ""} w-full bg-white hover:bg-gray-300/10 border border-transparent hover:border-skin-brand-100/20 px-4 `}>
        <button type="button" className="w-full h-full px-4 py-8 text-left  border-b-2 border-dashed border-gray-200">
        <div className="flex flex-col">
            <span>{dateHelper.formatDate(item.createdAt)}</span>
            <span className="font-semibold">Trade #{item.tradeID}</span>
        </div>
        </button>
        </li>
    )
}

export default NoteItem;