import { Editor } from "@tinymce/tinymce-react";

function JournalEditor({ editorValue, onChange, ref }:JournalEditorProps) {
    return (
        <Editor
            ref={ref}
            onChange={onChange}
            apiKey='your-api-key'
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
    )
}

export default JournalEditor;

interface JournalEditorProps {
    editorValue: string;
    onChange?: () => void;
    ref?: React.RefObject<Editor>;
}
