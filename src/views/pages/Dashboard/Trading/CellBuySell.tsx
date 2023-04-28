import { capitalizeFirstLetter } from "@/utils/common";

function CellBuySell({ item }: { item?: CellBuySells }) {

    const mediaTypes: Record<CellBuySells, string> = {
        buy: "bg-blue-400",
        sell: "bg-red-400"
    };

    if(!item) return <></>
    return (
        <td className={`whitespace-nowrap px-3 py-4 text-sm text-gray-500" ${mediaTypes[item]}`}>
            <span className="text-white">{capitalizeFirstLetter(item)}</span>
        </td>
    );
}

export default CellBuySell;

type CellBuySells = "buy" | "sell";