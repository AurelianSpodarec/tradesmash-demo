import IDailyStats from "@/interface/IDailyStat";

function StatItem({ item }:StatItemProps) {
    return (
        <article>
            <header className="flex justify-between items-center">
                <div>
                    {/* Jun, Wed 29th, 2022 */}
                    <span>{item.timestamp}</span> | 
                    <span>Net P&L $794.28</span>
                </div>
                <div>
                    <button>Add Note</button>
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