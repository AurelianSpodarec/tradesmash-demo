import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateJournal } from '@/store/features/journal/journalSlice';
import { Editor } from '@tinymce/tinymce-react';


function JournalContentEditor({ data }:any) {
    const dispatch = useDispatch();
    
    const [editorValue, setEditorValue] = useState("")
    const editorRef:any = useRef(null);

    const content = data && data.content;
    
    
    function onChange(e:any) {
        setEditorValue(e)
    }
    
    function saveJournal() {
        const content = editorRef.current.getContent();
        dispatch(updateJournal({
            id: data.id,
            tradeID: data.tradeID,
            content: content
        }))
    }


    
    useEffect(() => {
        if(content) {
            setEditorValue(content && content)
        } else {
            setEditorValue("")
        }
    }, [data])

    return (
        <>
        <button onClick={() => saveJournal()}>Hi</button>
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
        </>
    )
}

export default JournalContentEditor;