// @ts-nocheck
import react, {useEffect, useRef, useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { updateNote } from '@/store/features/notes/notesSlice';
import { useDispatch, useSelector } from 'react-redux';
import dateHelper from '@/utils/dateHelper';


function NoteContent({ data }:any) {
    const dispatch = useDispatch()

    const [editorValue, setEditorValue] = useState("")
    const editorRef:any = useRef(null);

    const reduxNotes = useSelector((state:any) => state.notes);
    const reduxNotebook = useSelector((state:any) => state.notebook)
 
    const notes = reduxNotes.notes
    const activeNoteIndex = reduxNotebook.activeNoteIndex
    const activeNote = notes && notes[activeNoteIndex]
 
    // console.log("note",activeNote)


    function onChange(e:any) {
        setEditorValue(e)
    }

    function saveNote() {
        const content = editorRef.current.getContent();
        dispatch(updateNote({ 
            id: activeNoteIndex,
            tradeID: activeNote.tradeID,
            content: content 
        }));
    }

    useEffect(() => {
        if(notes) {
            setEditorValue(activeNote && activeNote.content)
        } else {
            setEditorValue(undefined)
        }
    }, [activeNoteIndex])

 



    if(!activeNote) return <>Loading...</>
    return (
        <div className="h-full">

            <div className=" bg-white p-6 border-b border-b-gray-300 flex justify-between items-start w-full">
                {/* <h3>Note: {dateHelper.formatDate(notes[0].createdAt)}</h3> */}
                <div className="flex flex-col">
                    <div className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="h-4 w-4 bg-blue-300 rounded"></div>
                            <span className="text-xl font-bold">Trade #{activeNote.tradeID}</span>
                        </div>
                        {/* <span className="text-xl font-bold">Net P&L: £2323.94</span> */}
                    </div>
                    {/* <time className="text-gray-700">15th August Wed, 2020</time> */}
                    <div className="flex space-x-4 mt-2">
                        <span><span className="font-semibold">Created At:</span> {dateHelper.formatDate(activeNote.createdAt)}</span>
                        <span><span className="font-semibold">Updated At:</span> {dateHelper.formatDate(activeNote.updatedAt)}</span>
                    </div>
                </div>

                <button type="button" onClick={() => saveNote()} className="block rounded-md bg-skin-brand-600 px-3 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-skin-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skin-brand-600">
                    Save Note
                </button>
                
            </div>

            <Editor
                onChange={(e) => onChange(e)}
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
        </div>
    )
}

export default NoteContent;