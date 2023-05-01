// @ts-nocheck
import { closeModal } from '@/store/features/modals/modalsSlice';
import { createNote, getNoteByTradeID, updateNote } from '@/store/features/notes/notesSlice';
import { updateTradeHasNote } from '@/store/features/trades/tradesSlice';
import { Editor } from '@tinymce/tinymce-react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

// TODO: Use Portal
function Modal() {
    const reduxNotes = useSelector((state:any) => state.notes);
    const reduxModal = useSelector((state:any) => state.modal);
    const isOpen = reduxModal.isOpen
    const tradeID = reduxModal.content.tradeID

    const dispatch = useDispatch()
    const editorRef:any = useRef(null);
    
    const note = getNoteByTradeID(tradeID)
    const isEmptyNote = note === undefined || "";

    const [editorValue, setEditorValue] = useState()

    function onChange(e:any) {
        setEditorValue(e)
    }
    
    function modalClose() {
        dispatch(closeModal())
        setEditorValue(null)
    }

    function saveNote() {
        const content = editorRef.current.getContent();
        if(isEmptyNote) {
            dispatch(createNote({
                id: reduxNotes.length + 1,
                tradeID, 
                content: content
            }))
            dispatch(updateTradeHasNote(tradeID, true));
        } else {
            dispatch(updateNote({ 
                id: note?.id,
                tradeID, 
                content: content 
            }));
        }

        dispatch(closeModal())
        setEditorValue("")
    }

    useEffect(() => {
        if(!isEmptyNote) {
            setEditorValue(note?.content)
        }
    }, [tradeID, isOpen])

    return (
        <div className={`
            fixed top-0 right-0 bottom-0 left-0 z-50 
            m-auto opacity-0 bg-black/50 
            p-4 overflow-y-auto
            ${isOpen ? 'visible opacity-100 animate-open' : 'opacity-0 hidden'} 
        `}>
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl sm:p-6">

                <div>

                    <header className="flex justify-between mb-2">
                        <div>
                            <span className="text-lg font-semibold leading-6 text-gray-900">{isEmptyNote ? "Add" : "Edit"} Note for Trade #{tradeID}</span>
                            <div className="space-x-4">
                                {note?.createdAt &&
                                    <>
                                    <span>Created On: {note?.createdAt}</span>
                                    <span>-</span>
                                    </>
                                }

                                {note?.updatedAt  &&
                                    <span>Last Updated: {note?.updatedAt}</span>
                                }
                            </div>
                        </div>
                        <div>
                            <button type="button" onClick={() => modalClose()}>
                                X
                            </button>
                        </div>
                    </header>


                    <section className="h-[500px]">    
                    <Editor
                        onChange={(e) => onChange(e.target.getContent())}
                        apiKey='your-api-key'
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={editorValue}
                        init={{
                        height: "100%",
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                    </section>

                    <footer>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                            <button onClick={() => saveNote()} type="button" className="inline-flex w-full justify-center rounded-md bg-skin-brand-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-skin-brand-500 sm:ml-3 sm:w-auto">Save</button>
                            <button onClick={() => modalClose()} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                        </div>
                    </footer>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Modal;