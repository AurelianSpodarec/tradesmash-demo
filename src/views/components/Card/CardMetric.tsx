import Card from "@/views/atoms/Card";

function CardMetric({ title, value, className }:CardMetricProps) {
    return (
        <Card className={className}>
        <div className="flex flex-col">
            <span className="text-sm mb-2">{title}</span>
            <span className="text-2xl font-semibold">{value}</span>
        </div>
        </Card>
    )
}

export default CardMetric;

interface CardMetricProps {
    title?: string;
    value?: string | number | null;
    className?: string;
}