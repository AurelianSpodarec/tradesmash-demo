import IDailyStats from "@/interface/IDailyStat";

function StatItem({ item }:StatItemProps) {
    return (
        <article className="overflow-hidden rounded-xl border border-gray-200 px-6 py-6">

            <header className="flex justify-between items-center mb-4">
                <div>
                    {/* Jun, Wed 29th, 2022 */}
                    <span className="text-2xl">{item.timestamp}</span> | 
                    <span>Net P&L $794.28</span>
                </div>
                <div>
                <a href="#" className="ml-auto flex items-center gap-x-1 rounded-md border border-skin-brand-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <svg className="-ml-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"></path>
                    </svg>
                    Add Note
                </a>
                </div>
            </header>

            <section>
                Total Trades: 1
                Winnders: 1
            </section>

        </article>
    )
}

export default StatItem;

interface StatItemProps {
    item: IDailyStats;
}