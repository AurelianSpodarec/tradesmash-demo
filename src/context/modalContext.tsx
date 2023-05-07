import { createContext, useState, ReactNode  } from "react";
import useForm from "@/hooks/useForm"


export const ModalContext = createContext<ModalConfig | undefined>(undefined);

function ModalProvider({ children }: {children: ReactNode}) {
    const formState = useForm()
    const [isOpen, setIsOpen] = useState(false);
    const [config, setConfig] = useState(
        {
            id: undefined,
            type: '',
            option: undefined,
            action: undefined,
            title: undefined,
            description: undefined,
            onAction: undefined,
            fields: [],
        }
    );

    function setModalOpen() {
        setIsOpen(true)
        document.body.style.overflow = 'hidden';
    }

    function setModalClose() {
        setIsOpen(false)
        document.body.style.overflow = 'auto';
    }

    function setModalConfig() {

    }

    function onValueChange(e:any) {
        formState.handleChange(e)
    }
    
    const readValues = {
        children,
        data: config,
        isOpen,
        setConfig,
        setModalConfig,
        close: setModalClose,
        open: setModalOpen,
        onValueChange,
        formState
    };

    return (
        <ModalContext.Provider value={readValues}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;

interface ModalConfig {
    children: ReactNode;
    data: {
        id: undefined;
        type: string;
        option?: undefined;
        action?: undefined;
        title?: undefined;
        description?: undefined;
        onAction?: undefined;
        fields?: never[];
    };
    isOpen: boolean;
    setConfig: any;
    close: () => void;
    open: () => void;
    onValueChange: (e: any) => void;
    formState: any;
}
