import react, {useEffect, useRef, useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';


function NoteContent({ data }:any) {
    const [editorValue, setEditorValue] = useState(`<p>This is the initial content of the editor.</p>`)
    const editorRef:any = useRef(null);

    function onChange(e:any) {
        setEditorValue(e)
    }

    return (
        <div className="h-full">

            <div className="flex flex-col">
                {/* <h3>Note: {dateHelper.formatDate(notes[0].createdAt)}</h3> */}
                <div className="space-x-4   ">
                    <span className="text-2xl font-bold">Great day at stock</span>
                    <span className="text-xl font-bold">Net P&L: £2323.94</span>
                </div>
                <time>15th August Wed, 2020</time>
                
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