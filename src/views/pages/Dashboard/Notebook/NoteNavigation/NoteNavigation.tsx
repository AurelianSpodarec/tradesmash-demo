import INote from "@/interface/INote";
import NoteItem from "./NoteItem";
import dateHelper from "@/utils/dateHelper";

function NoteNavigation({ data }:NoteNavigationProps) {

    return (
        <aside className="w-[250px]">

            <div>
                <h3 className="text-xl font-semibold">Today is: {dateHelper.todayDate()}</h3>
            </div>

            <ol>
                {data && data.map((item:INote) => <NoteItem key={item.createdAt} item={item} />)}
            </ol>
        </aside>
    )
}

export default NoteNavigation;

interface NoteNavigationProps {
    data: INote[];
}