import React from "react";

function Container({ children }:ContainerProps) {
    return (
        <div className="p-8">
            {children}
        </div>
    )
}

export default Container;

interface ContainerProps {
    children: React.ReactNode
}