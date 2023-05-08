function TableTD({ name }:any) {

    // const cells = {
    //     // buySell: <CellBuySell item={data['status']} />,
    //     status: <CellStatus item={data['status']} />
    // }

    return (
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {name}
            {/* {cells[data.]} */}
        </td>
    )
}

export default TableTD;