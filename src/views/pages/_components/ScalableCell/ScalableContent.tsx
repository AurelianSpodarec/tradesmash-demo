function ScalableContent({ children, className }:any) {
    return (
        <div className={`h-auto ${className}`}>
            {children}
        </div>
    )
}

export default ScalableContent;