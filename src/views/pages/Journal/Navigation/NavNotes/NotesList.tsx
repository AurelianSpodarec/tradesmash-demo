import INote from "@/interface/INote";
import NoteItem from "./Notes/NoteItem";
import { useSelector } from "react-redux";
import { getTradesByDate } from "@/store/features/trades/tradeSliceSelectors";

function NoteList({ data }:any) {


    // Get all trades by date 2023-04-26
    // 2023-04-26

    return (
        <div>
        <ol>
            {data && data.map((item:INote) => (
                <NoteItem 
                    // onClick={() => setNoteIndex(item.id)} 
                    key={item.createdAt} 
                    item={item} 
                    // isActive={activeNote} 
                />
            ))}
        </ol>
        </div>
    )
}

export default NoteList;