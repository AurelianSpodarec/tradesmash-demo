function StatBox({ title, value }:StatBoxProps) {
    return (
        <article className="overflow-hidden rounded-xl border border-gray-200">
        <div className="p-4">
            <div>
                <h3>{title}</h3>
                <span className="text-2xl font-semibold">£{value}</span>
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