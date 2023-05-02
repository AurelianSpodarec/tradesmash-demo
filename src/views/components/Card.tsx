function Card({ title, children }:CardProps) {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 mb-6">
            {children ? children : title}
        </div>
    )
}

export default Card;

interface CardProps {
    title?: string;
    children?: React.ReactNode;
}