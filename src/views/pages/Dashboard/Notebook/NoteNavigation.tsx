import INote from "@/interface/INote";
import dateHelper from "@/utils/dateHelper";

function NoteNavigation({ data }:NoteNavigationProps) {
    return (
        <aside>
            <div>
            {data && data.map((noteDate:INote) => {
                return (
                    <div key={noteDate.createdAt}>
                    <button type="button">
                        {dateHelper.formatDate(noteDate.createdAt)}
                    </button>
                    </div>
                )
            })}
            </div>
        </aside>
    )
}

export default NoteNavigation;

interface NoteNavigationProps {
    data: any;
}