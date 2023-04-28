import LayoutDashboard from "@/views/layouts/LayoutDashboard/LayoutDashboard";

function WidgetBox({ name, children }:any) {
    return (
        <div>
        <div>
            <h4>{name}</h4>
        </div>
        <div>
            {children}
        </div>
    </div>
    )
}


function TradeLogIndex() {
    return (
        <LayoutDashboard>

            Tradelog


            <section className="flex">
                <WidgetBox name="Profit Chart" />
                <WidgetBox name="Win Ratio" />
                <WidgetBox name="Net Daily P&L" />
            </section>


            <section>

                <h3>Your Trades Report</h3>

                <div>

                </div>

            </section>

        </LayoutDashboard>
    )
}

export default TradeLogIndex;