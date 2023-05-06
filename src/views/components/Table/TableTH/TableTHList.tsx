import TableTH from "./TableTH";

function TableTHList({ mappedNames }:TableTHListProps) {
    return mappedNames && mappedNames.map((item:any) => {
        return <TableTH key={item.id} name={item.displayName} />
    })    
}

export default TableTHList;

interface TableTHListProps {
    mappedNames: any;
}