function TableTH({ name }:TableTHProps) {
    return (
        <th scope="col" className="min-w-[6rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
            {name}
        </th>
    )
}

export default TableTH;

interface TableTHProps {
    name: string;
}