import Input from "@/views/atoms/Input";

function ModalTradeGeneral() {
    return (
        <div>


            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-1">
                    <Input label="Stock" name="stock" />
                </div>
                <div className="col-span-2">
                    <Input label="Asset" name="asset" />
                </div>
            
                <div className="col-span-2">
                    <Input label="Exchange" name="exchange" />
                </div>
                <div className="col-span-1">
                    <Input label="Value" name="value" />
                </div>
              
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-2">
                    {/* Buy Sell
                    */}
                    <Input label="Action" name="status" />
                </div>
                <div className="col-span-2">
                    <Input label="Date" name="date" />
                </div>
                <div className="col-span-2">
                    <Input label="Size" name="size" />
                </div>
                <div className="col-span-2">
                    <Input label="Price" name="price" />
                </div>
                <div className="col-span-2">
                    <Input label="Fees" name="fees" />
                </div>
            </div>
            <div>

            </div>


            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-2">
                    <Input label="Status" name="status" />
                </div>
                <div className="col-span-2">
                    <Input label="Open Date" name="openDate" />
                </div>
                <div className="col-span-2">
                    <Input label="Close Date" name="closeDate" />
                </div>
            </div>


            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-2">
                    <Input label="Risk %" name="risk" />
                </div>
                <div className="col-span-2">
                    <Input label="Gross P&L" name="gross-pl" />
                </div>
                <div className="col-span-2">
                    <Input label="Net P&L" name="net-pl" />
                </div>
                <div className="col-span-2">
                    <Input label="Strategy" name="strategy" />
                </div>
            </div>

        </div>
    )
}

export default ModalTradeGeneral;