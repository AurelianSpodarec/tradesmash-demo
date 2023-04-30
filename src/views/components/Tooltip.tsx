import React, { useState, useRef } from 'react';

function Tooltip(props: any) {
    const { children, name, dangerouslySetInnerHTML, dely, position = 'top', hideAfter } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState('top');
    const timeout = useRef<number | null>(null);

    const positions:any = {
        "top": {
            "top": '-10px',
            "right": '50%',
            'transform': 'translate(50%, -100%)',
        },
        "right": {
            "right": '-10px',
            "top": '50%',
            'transform': 'translate(100%, -50%)'
        },
        "bottom": {
            'bottom': '-10px',
            'right': '50%',
            'transform': 'translate(50%, 100%)',

        },
        "left": {
            "left": '-10px',
            "top": '50%',
            'transform': 'translate(100%, 50%)'
        }
    }

    const handleMouseEnter = () => {
        if(hideAfter) return
        timeout.current = window.setTimeout(() => {
            setIsOpen(true);
        }, dely || 200);
    };

    const handleMouseOut = () => {
        if(hideAfter) return
        if (timeout.current) {
            window.clearTimeout(timeout.current);
            timeout.current = null;
        }
        setIsOpen(false);
    };

    const showAfterClick = () => {
        if(!hideAfter) return
        setIsOpen(true)
        setTimeout(() => {
            setIsOpen(false);
        }, hideAfter);
      
    }
    
    return (
        <div className="relative w-full h-full">
            <div
                className="group-hover w-full h-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseOut}
                onClick={() => showAfterClick()}
            >
                {children}
            </div>
            <div
                id="toolpit-message"
                className={`absolute whitespace-nowrap z-10 text-xs delay-300 bg-white border text-gray-900 w-auto px-2 py-1.5 rounded h-fit translate-x-full
                ${isOpen ? '' : 'hidden'} `}
                style={{ userSelect: 'none', ...positions[position]  }}
            >

                {dangerouslySetInnerHTML && <div dangerouslySetInnerHTML={{__html: dangerouslySetInnerHTML}}></div>}
                {name && name}
            </div>
        </div>
    );
}

export default Tooltip