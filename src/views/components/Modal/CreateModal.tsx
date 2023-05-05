import { useState, useEffect, useRef } from 'react';
import * as ReactDOM from 'react-dom';
import ModalNote from './ModalNote/ModalNode';


const doc = document.getElementById('root');
function CreateModal() {
    // const modalContext = useModal()
    // const modalData = modalContext.data;
    const modalRef:any = useRef(undefined)

    const modalOptions:any = {
        note: <ModalNote />,
    }

    // function handleModalClose() {
    //     const handleKeyDown = (e:any) => getKey('ESC') === e.keyCode && modalContext.close();
    //     document.addEventListener('keydown', handleKeyDown);      
    //     return document.addEventListener('keydown', handleKeyDown);
    // }

    // useEffect(() => {
    //     handleModalClose()
    // }, [])

    // if(!modalContext.open || !doc) return <></>
    return ReactDOM.createPortal(
        <dialog
            ref={modalRef}
            open
            onClick={e => e.preventDefault()}
            role="alertdialog" 
            aria-modal="true"
            // aria-labelledby={`${modalData.option} ${modalData.type}`}
            // aria-describedby={`${modalData.option} ${modalData.type}`}
            className={`
             
            fixed top-0 right-0 bottom-0 left-0 z-50 
            m-auto opacity-0 bg-black/50 
            p-4 overflow-y-auto
            h-full w-full
            visible hidden opacity-0 animate-open 
        
                `}
            // ${modalContext.isOpen ? 'visible opacity-100 ' : 'opacity-100'} 
                >
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                {/* {modalOptions[modalData.type]} */}
                <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl sm:p-6">
                {modalOptions["note"]}
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        </dialog>
    , doc)
}

export default CreateModal;