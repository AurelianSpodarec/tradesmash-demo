
const people = [
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
    { 
        status: 'win', 
        openDate: 'Sep 10, 2022',
        symbol: 'FB', 
        returns: '279.00',
        side: "long" 
    },
]

function TradesSidebar() {
    return (
        
        <div className="sm:px-6 lg:px-8">
                
        <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3.5 uppercase pl-4 pr-3 text-left text-xs font-semibold text-gray-900 sm:pl-6">
                            Status
                        </th>
                        <th scope="col" className="px-3 py-3.5 uppercase text-left text-xs font-semibold text-gray-900">
                            Open Date
                        </th>
                        <th scope="col" className="px-3 py-3.5 uppercase text-left text-xs font-semibold text-gray-900">
                            Symbol
                        </th>
                        <th scope="col" className="px-3 py-3.5 uppercase text-left text-xs font-semibold text-gray-900">
                            Returns £
                        </th>
                        <th scope="col" className="px-3 py-3.5 uppercase text-left text-xs font-semibold text-gray-900">
                            Side
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                        <tr key={person.returns}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{person.status}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.openDate}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.symbol}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.returns}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.side}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default TradesSidebar;