function CardBook({ title, image }:CardBookProps) {
    return (
        <article className="relative flex flex-col">
            <div className="mb-1 h-[370px] ">
                <img className="h-full rounded-lg border w-full object-cover" src={image} />
            </div>
            <div className="py-2">
                <h3 className="font-medium text-lg">{title}</h3>
            </div>
        </article>
    )
}

export default CardBook;

interface CardBookProps {
    title: string;
    image: string;
}
