import INote from "@/interface/INote";
import NoteItem from "./NoteItem";
import dateHelper from "@/utils/dateHelper";

import { ScalableContainer, ScalableHeader, ScalableContent } from '../../_components/ScalableCell';

function NoteNavigation({ data }:NoteNavigationProps) {

    return (
        <aside className="w-full h-full">
        <ScalableContainer header={`Heloooooooopomodsmfos mdfodsmfosfdm osdmf osdm osmd`}>

            <ScalableHeader>
            <div>
                <h3 className="text-xl font-semibold">Today is: {dateHelper.todayDate()}</h3>
            </div>
            </ScalableHeader>

            <ScalableContent>
            <ol>
                {data && data.map((item:INote) => <NoteItem key={item.createdAt} item={item} />)}
            </ol>
            </ScalableContent>

        </ScalableContainer>
        </aside>
    )
}

export default NoteNavigation;

interface NoteNavigationProps {
    data: INote[];
}