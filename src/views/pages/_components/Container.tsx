import React from "react";

function Container({ children, className }:ContainerProps) {
    return (
        <div className={`${className} p-8`}>
            {children}
        </div>
    )
}

export default Container;

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}
