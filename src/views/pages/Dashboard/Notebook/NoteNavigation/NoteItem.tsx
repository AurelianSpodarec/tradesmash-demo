import dateHelper from "@/utils/dateHelper";

function NoteItem({ item }:any) {
    return (
        <li className="w-full bg-white px-4">
        <button type="button" className="w-full h-full px-4 py-8 text-left  border-b-2 border-dashed border-gray-200">
        <div className="flex flex-col">
            <span>{dateHelper.formatDate(item.createdAt)}</span>
            <span className="font-semibold">Great day at stock</span>
        </div>
        </button>
        </li>
    )
}

export default NoteItem;