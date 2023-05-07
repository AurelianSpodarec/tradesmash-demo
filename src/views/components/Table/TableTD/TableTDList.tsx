import TableTD from "./TableTD";

function TableTDList({ mappedNames, data }:TableTDListProps) {
    return mappedNames && mappedNames.map((item:any, index:number) => {
        return <TableTD key={data[item.id] + index} name={data[item.id]} />
    })    
}

export default TableTDList;

interface TableTDListProps {
    mappedNames: any;
    data: any;
}