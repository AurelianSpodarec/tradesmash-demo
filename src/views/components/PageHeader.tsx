function PageHeader({ children, className, title }:PageHeaderProps) {
    return (
        <header className={`${className} mb-6`}>
            <h1 className="text-2xl font-bold">{title}</h1>
            {children && children}
        </header>
    )
}

export default PageHeader;

interface PageHeaderProps {
    title: string;
    className?: string;
    children?: React.ReactNode;
}
