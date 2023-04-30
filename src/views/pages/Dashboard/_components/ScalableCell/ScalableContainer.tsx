function ScalableContainer({header, children}:any) {
    return (
        <div className="relative overflow-hidden h-full w-full h-full">
            {/* {header} */}
            <div className="flex flex-col h-full w-full overflow-y-auto absolute">

                {children}
               
            </div>
        </div>
    )
}

export default ScalableContainer;