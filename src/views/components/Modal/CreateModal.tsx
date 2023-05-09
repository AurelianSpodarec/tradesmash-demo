import { useEffect, useRef } from 'react';
import * as ReactDOM from 'react-dom';

import useModal from '@/hooks/useModal';
import { getKey } from '@/utils/common';

import ModalNote from './ModalTrade/ModalTrade';


const doc = document.getElementById('root');
function CreateModal() {
    const ModalContext = useModal()
    const modalData = ModalContext.data;
    const modalRef:any = useRef(undefined)

    const modalOptions:any = {
        trade: <ModalNote />,
    }

    function handleModalClose() {
        const handleKeyDown = (e:any) => getKey('ESC') === e.keyCode && ModalContext.close();
        document.addEventListener('keydown', handleKeyDown);      
        return document.addEventListener('keydown', handleKeyDown);
    }

    useEffect(() => {
        handleModalClose()
    }, [])

    if(!ModalContext.open || !doc) return <></>
    return ReactDOM.createPortal(
        <dialog
            ref={modalRef}
            open
            onClick={e => e.preventDefault()}
            role="alertdialog" 
            aria-modal="true"
            aria-labelledby={`${modalData.option} ${modalData.type}`}
            aria-describedby={`${modalData.option} ${modalData.type}`}
            className={`
                fixed top-0 right-0 bottom-0 left-0 z-50 
                m-auto opacity-0 bg-black/50 
                p-4 overflow-y-auto
                h-full w-full
                animate-open 
                ${ModalContext.isOpen ? 'visible opacity-100 ' : 'opacity-0 hidden'} 
            `}
        >
        <div className="flex min-h-full items-end justify-center text-center sm:items-center">
            <div className="relative max-w-screen-md transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full">
                {modalOptions[modalData.type]}
            </div>
        </div>
        </dialog>
    , doc)
}

export default CreateModal;
