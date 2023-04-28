import dateHelper from "@/utils/dateHelper";

function NoteItem({ item }:any) {
    return (
        <li className="w-full">
        <button type="button">
            {dateHelper.formatDate(item.createdAt)}
        </button>
        </li>
    )
}

export default NoteItem;