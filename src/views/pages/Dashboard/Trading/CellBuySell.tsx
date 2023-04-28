import { capitalizeFirstLetter } from "@/utils/common";

function CellBuySell({ item }: { item?: CellBuySells }) {

    const mediaTypes: Record<CellBuySells, string> = {
        buy: "bg-blue-300 text-blue-900",
        sell: "bg-red-300 text-red-900"
    };

    if(!item) return <></>
    return (
        <td className={`whitespace-nowrap px-3 py-4 text-gray-500"`}>
            <div className={`px-1.5 py-1 rounded-md w-full text-center text-xs ${mediaTypes[item]}`}>
                <span>{capitalizeFirstLetter(item)}</span>
            </div>
        </td>
    );
}

export default CellBuySell;

type CellBuySells = "buy" | "sell";