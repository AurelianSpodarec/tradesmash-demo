import { fakeStockCompanies } from "@/database/fakeStockCompanies";
import LayoutDashboard from '../_components/LayoutDashboard/LayoutDashboard';

import IStockCompany from "@/interface/IStockCompany";
import { ScalableContainer, ScalableContent, ScalableHeader } from "../_components/ScalableCell";

function StockIndex() {
    return (
        <LayoutDashboard>

        <ScalableContainer>
        <div className="p-8">

            {/* <section>

                Search Stock
                Filter: Stock Exchange
                Filter: Stock Ticker
            </section> */}

 
            <section className="">
            
            <ScalableHeader>
            <div className="sm:flex sm:items-center bg-white z-10 relative p-4">
                <div className="sm:flex-auto">
                <h1 className="text-2xl font-bold text-gray-900">Stocks {fakeStockCompanies.length}</h1>
                <p className="mt-2 text-sm text-gray-700">
                    A list of all the stocks that you have invested in
                </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                    type="button"
                    disabled
                    className="block cursor-not-allowed rounded-md bg-skin-brand-600 px-3 disabled py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-skin-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Add Stock
                </button>
                </div>
            </div>
            </ScalableHeader>

            <ScalableContent>
            <div className="mt-8 flow-root">
                <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                    <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-white">
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
            </ScalableContent>
            </section>

        </div>
        </ScalableContainer>

        </LayoutDashboard>
    )
}

export default StockIndex;