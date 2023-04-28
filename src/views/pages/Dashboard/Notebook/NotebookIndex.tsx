import react, {useEffect, useRef, useState} from 'react';

import LayoutDashboard from "@/views/layouts/LayoutDashboard/LayoutDashboard";
import { Editor } from '@tinymce/tinymce-react';


interface INote {
    stockID: number;
    id: number;
    content: string;


    updatedAt: number;
    createdAt: number;
}

function parseDate(dateString) {
    const [dayOfWeek, month, dayOfMonth, year] = dateString.split(" ");
    const monthIndex = new Date(`${month} 1, ${year}`).getMonth();
    return new Date(year, monthIndex, dayOfMonth);
}

// show all calendar
// show only where notes are

const notebookDates = [
    {
      "stockID": 1,
      "id": 1,
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "updatedAt": 1648665600000,
      "createdAt": 1648565600000
    },
    {
      "stockID": 2,
      "id": 2,
      "content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      "updatedAt": 1648828800000,
      "createdAt": 1648728800000
    },
    {
      "stockID": 3,
      "id": 3,
      "content": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "updatedAt": 1648992000000,
      "createdAt": 1648892000000
    },
    {
      "stockID": 4,
      "id": 4,
      "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "updatedAt": 1649155200000,
      "createdAt": 1649055200000
    },
    {
      "stockID": 5,
      "id": 5,
      "content": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "updatedAt": 1649318400000,
      "createdAt": 1649218400000
    }
  ]

function formatDate(timestamp: number) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const date = new Date(timestamp);
    const day = date.getDate();
    let suffix = "th";
    if (day === 1 || day === 21 || day === 31) suffix = "st";
    else if (day === 2 || day === 22) suffix = "nd";
    else if (day === 3 || day === 23) suffix = "rd";
    
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = days[date.getDay()];
    
    return `${day}${suffix} ${month} ${dayOfWeek}, ${year}`;
}
  

function NotebookIndex() {

    const [editorValue, setEditorValue] = useState(`<p>This is the initial content of the editor.</p>`)
    const editorRef = useRef(null);

    const [dates, setDates] = useState(notebookDates)
// Fri, Jul 22, 2023

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
                {notebookDates && notebookDates.map((noteDate) => {
                    return (
                        <div key={noteDate.createdAt}>
                            {formatDate(noteDate.createdAt)}
                        </div>
                    )
                })}
            </aside>

            <section>

                <div>
                    <h3>Note: {formatDate(notebookDates[0].createdAt)}</h3>
                    
                    <span>Net P&L: £2323.94</span>
                    {/* <time>15th August Wed, 2020 - 15:40 - 17:40</time> */}
                    
                </div>

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