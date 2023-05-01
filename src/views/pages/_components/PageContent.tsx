import React from "react";

function PageContent({ children }:PageContentProps) {
    return (
        <div className="p-8">
            {children}
        </div>
    )
}

export default PageContent;

interface PageContentProps {
    children: React.ReactNode
}