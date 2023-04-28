import react, {useEffect, useRef, useState} from 'react';

import LayoutDashboard from "@/views/layouts/LayoutDashboard/LayoutDashboard";
import { Editor } from '@tinymce/tinymce-react';

function NotebookIndex() {

    const [editorValue, setEditorValue] = useState(`<p>This is the initial content of the editor.</p>`)
    const editorRef = useRef(null);

    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    function onChange(e:any) {
        setEditorValue(e)
    }
 
    return (
        <LayoutDashboard>
        <div className="flex justify-between ">

            <aside>
                Log Day
            </aside>

            <section>
                <h3>Editor</h3>
                <Editor
                    onChange={(e) => onChange(e)}
                    apiKey='your-api-key'
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue={editorValue}
                    init={{
                    height: 500,
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


        </div>
        </LayoutDashboard>
    )
}

export default NotebookIndex;