import dateFormatter from "@/utils/dateFormatter";

function NoteItem({ item, onClick }:any) {

    const isActive = false;
    return (
        <li onClick={onClick} className={` ${item.id === isActive ? "bg-gray-100/20" : "bg-white"} w-full  hover:bg-gray-300/10 border border-transparent hover:border-skin-brand-100/20 px-4 `}>
        <button type="button" className="w-full h-full px-4 py-8 text-left  border-b-2 border-dashed border-gray-200">
        <div className="flex flex-col">
            <span>{dateFormatter.formatDate(item.date)}</span>
            <span className="font-semibold">Trade #{item.tradeNumber}</span>

            {/* Note excerpt */}
            {/* Confidence level */}
        </div>
        </button>
        </li>
    )
}

export default NoteItem;