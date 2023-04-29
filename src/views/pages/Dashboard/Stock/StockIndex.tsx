import { fakeStockCompanies } from "@/database/fakeStockCompanies";
import LayoutDashboard from '../_components/LayoutDashboard/LayoutDashboard';

import IStockCompany from "@/interface/IStockCompany";

function StockIndex() {
    return (
        <LayoutDashboard>

            <section>
                Filter: Stock Exchange
                Filter: Stock Ticker
            </section>

 
            <section className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
                <p className="mt-2 text-sm text-gray-700">
                    A list of all the users in your account including their name, title, email and role.
                </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                    type="button"
                    className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Add user
                </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                            Symbol
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Name
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Exchange
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Sector
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Industry
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Country
                        </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {
                    fakeStockCompanies.map((stockCompany:IStockCompany, stockCompanyIdx) => (
                        <tr key={stockCompany.symbol} className={stockCompanyIdx % 2 === 0 ? undefined : 'bg-gray-50'}>

                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">{stockCompany.symbol}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{stockCompany.name}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{stockCompany.exchange}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{stockCompany.sector}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{stockCompany.industry}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{stockCompany.country}</td>

                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </section>

        </LayoutDashboard>
    )
}

export default StockIndex;