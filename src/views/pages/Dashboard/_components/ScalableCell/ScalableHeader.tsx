function ScalableHeader ({children}:any) {
    return (
        <div className="sticky top-0 py-4 bg-green-700 text-white">
            {children}
        </div>
    )
}

export default ScalableHeader;