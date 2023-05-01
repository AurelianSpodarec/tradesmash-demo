// @ts-nocheck
function StatBox({ title, value }:StatBoxProps) {


    const formattedMoney = value && value.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });

    return (
        <article className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">

            <div className="mb-0 font-sans font-semibold leading-normal text-sm">

                <div className="mb-4 flex flex-col">
                    <span className="mb-0 font-sans font-semibold leading-normal dark:opacity-60 text-sm">{title}</span>
                    <span className="text-xl font-bold">{formattedMoney}</span>
                </div>

                {/* <p className="text-sm dark:opacity-60">
                    <span className="mr-2 font-bold leading-normal text-sm text-emerald-500">+55%</span>
                    <span>since yesterday</span>
                </p> */}

            </div>

        </div>
        </article>
    )
}

export default StatBox;

interface StatBoxProps {
    title: string;
    value: string;
}