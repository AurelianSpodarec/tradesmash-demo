import Card from "@/views/atoms/Card";

function Message({ message}:any) {
    return (
        <span className="text-xs">{message}</span>
    )
}

function MessageProfitRiskRatio({ value }:any) {
    const profitFactor = parseFloat(value && value?.split(':')[1] || '0');
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
            message = "The trading system is not profitable. Mess with the bull and you get the horns!";
            break;
        default:
            message = "Invalid ratio provided.";
    }

    return <Message message={message} />;
}

function CardMetric({ title, value, className, type, chart }:CardMetricProps) {
    
    const messages:any = {
        profitRiskRatio: <MessageProfitRiskRatio value={value} />
    }
    
    return (
        <Card className={className}>

        <div className="flex">
            <div className="flex flex-col">
                <span className="text-sm mb-1">{title}</span>
                <span className="text-2xl font-semibold">{value}</span>
            </div>
            {chart && 
            <div className="w-full">
                {chart}
            </div>
            }
        </div>


        {type && 
            <div>
                {messages[type]}
            </div>
        }
        </Card>
    )
}

export default CardMetric;

interface CardMetricProps {
    title?: string;
    value?: string | number | null;
    className?: string;
    type?: any;
    chart?: any;
}