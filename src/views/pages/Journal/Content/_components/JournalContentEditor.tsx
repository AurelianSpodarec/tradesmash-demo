import { Editor } from '@tinymce/tinymce-react';

function JournalContentEditor({ onChange, editorRef, editorValue }:any) {
   
    return (
        <>
        {/* <button onClick={() => saveJournal()}>Hi</button> */}
        <Editor
            onChange={(e) => onChange(e)}
            apiKey='your-api-key'
            // @ts-ignore
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