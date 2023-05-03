import Card from "@/views/atoms/Card";

function CardMetric({ title, value, className }:CardMetricProps) {
    const profitFactor = parseFloat(value?.split(':')[1] || '0');
    let message = '';

    switch (true) {
        case profitFactor >= 2.0:
            message = "The trading system is extremely profitable.";
            break;
        case profitFactor >= 1.5 && profitFactor < 2.0:
            message = "The trading system is highly profitable.";
            break;
        case profitFactor >= 1.0 && profitFactor < 1.5:
            message = "The trading system is relatively profitable.";
            break;
        case profitFactor < 1.0:
            message = "The trading system is very bad.";
            break;
        default:
            message = "Invalid ratio provided.";
    }
    
    return (
        <Card className={className}>
        <div className="flex flex-col">
            <span className="text-sm mb-1">{title}</span>
            <span className="text-2xl font-semibold">{value}</span>
        </div>

        <div>
            <span className="text-sm">{message}</span>
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