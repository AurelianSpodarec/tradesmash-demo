import { capitalizeFirstLetter } from "@/utils/common";

function CellStatus({ item }: { item?: CellStatus }) {

    const mediaTypes: Record<CellStatus, string> = {
        open: "bg-blue-300 text-blue-900",
        increased: "bg-green-300 text-green-900",
        decreased: "bg-red-300 text-red-900"
    };

    if(!item) return <></>
    return (
        <td className={`whitespace-nowrap px-3 py-4 text-sm`}>
            <div className={`px-1.5 py-1 rounded-md w-full text-center text-xs ${mediaTypes[item]}`}>
                <span>{capitalizeFirstLetter(item)}</span>
            </div>
        </td>
    );
}

export default CellStatus;

type CellStatus = "open" | "increased" | "decreased";