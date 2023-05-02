function PageHeader({ title }:PageHeaderProps) {
    return (
        <header className="mb-6">
            <h1 className="text-2xl font-bold">{title}</h1>
        </header>
    )
}

export default PageHeader;

interface PageHeaderProps {
    title: string;
}