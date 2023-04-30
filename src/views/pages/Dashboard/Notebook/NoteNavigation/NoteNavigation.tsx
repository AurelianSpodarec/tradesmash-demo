import INote from "@/interface/INote";
import NoteItem from "./NoteItem";
import dateHelper from "@/utils/dateHelper";


function Over({children}:any) {
    return (
        <div className="
        flex flex-col select-none relative overflow-hidden h-full w-full transition-all duration-300 ease-in-out 
        w-0 
        
    ">
        <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex flex-col h-full w-full overflow-y-auto absolute sidebar-scrollbar">
           000 {children}
        </div>
        </div>
        </div>
    )
  }

function NoteNavigation({ data }:NoteNavigationProps) {

    return (
        <aside className="w-[250px] h-full">

            <div>
                <h3 className="text-xl font-semibold">Today is: {dateHelper.todayDate()}</h3>
            </div>

            <Over>
            <ol>
                {data && data.map((item:INote) => <NoteItem key={item.createdAt} item={item} />)}
            </ol>
            </Over>
        </aside>
    )
}

export default NoteNavigation;

interface NoteNavigationProps {
    data: INote[];
}