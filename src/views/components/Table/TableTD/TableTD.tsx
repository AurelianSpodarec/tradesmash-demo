function TableTD({ name }:TableTDProps) {

    return (
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {name}
        </td>
    )
}

export default TableTD;

interface TableTDProps {
    name: string;
}
