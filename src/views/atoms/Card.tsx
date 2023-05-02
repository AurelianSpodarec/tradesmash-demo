function Card({ title, children, className }:CardProps) {
    return (
        <div className={`${className} overflow-hidden rounded-lg border border-gray-200 bg-white p-6 mb-6`}>
            {children ? children : title}
        </div>
    )
}

export default Card;

interface CardProps {
    title?: string;
    children?: React.ReactNode;
    className?: string;
}