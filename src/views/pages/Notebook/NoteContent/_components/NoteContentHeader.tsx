function NoteContentHeader() {
    return (
        <div className=" bg-white p-6 border-b border-b-gray-300 flex justify-between items-start w-full">
                {/* <h3>Note: {dateHelper.formatDate(notes[0].createdAt)}</h3> */}
            <div className="flex flex-col">
                <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 bg-blue-300 rounded"></div>
                        <span className="text-xl font-bold">Trade #11</span>
                    </div>
                    {/* <span className="text-xl font-bold">Net P&L: £2323.94</span> */}
                </div>
                {/* <time className="text-gray-700">15th August Wed, 2020</time> */}
                <div className="flex space-x-4 mt-2">
                    {/* <span><span className="font-semibold">Created At:</span> {dateHelper.formatDate(activeNote.createdAt)}</span> */}
                    {/* <span><span className="font-semibold">Updated At:</span> {dateHelper.formatDate(activeNote.updatedAt)}</span> */}
                </div>
            </div>

            <button type="button" className="block rounded-md bg-skin-brand-600 px-3 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-skin-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skin-brand-600">
                Save Note
            </button>
            
        </div>
    )
}

export default NoteContentHeader;