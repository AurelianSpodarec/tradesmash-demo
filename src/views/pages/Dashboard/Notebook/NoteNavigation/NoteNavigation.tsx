import INote from "@/interface/INote";
import NoteItem from "./NoteItem";
import dateHelper from "@/utils/dateHelper";

import { ScalableContainer, ScalableHeader, ScalableContent } from '../../_components/ScalableCell';

function NoteNavigation({ data }:NoteNavigationProps) {

    return (
        <aside className="w-full h-full border-r border-r-gray-300">
        <ScalableContainer header={`Heloooooooopomodsmfos mdfodsmfosfdm osdmf osdm osmd`}>

            <ScalableHeader>
            <header className="border-b py-4 px-4 bg-white">
                <h3 className="text-xl font-semibold">August 2023, Tue 16th</h3>
                {/* <h3 className="text-xl font-semibold">{dateHelper.todayDate()}</h3> */}
            </header>
            </ScalableHeader>

            <ScalableContent>
            <section>

                <ol>
                    {data && data.map((item:INote) => <NoteItem key={item.createdAt} item={item} />)}
                </ol>

            </section>
            </ScalableContent>

        </ScalableContainer>
        </aside>
    )
}

export default NoteNavigation;

interface NoteNavigationProps {
    data: INote[];
}