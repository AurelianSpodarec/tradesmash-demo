import dateHelper from "@/utils/dateHelper";

function NoteItem({ item }:any) {
    return (
        <li className="w-full bg-white border-b-2 border-gray-200">
        <button type="button" className="w-full h-full px-4 py-8 text-left">
            {dateHelper.formatDate(item.createdAt)}
        </button>
        </li>
    )
}

export default NoteItem;