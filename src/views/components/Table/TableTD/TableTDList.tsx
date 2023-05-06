import TableTD from "./TableTD";

function TableTDList({ mappedNames, data }:TableTDListProps) {
    return mappedNames && mappedNames.map((item:any) => {
        return <TableTD key={data[item.id]} name={data[item.id]} />
    })    
}

export default TableTDList;

interface TableTDListProps {
    mappedNames: any;
    data: any;
}