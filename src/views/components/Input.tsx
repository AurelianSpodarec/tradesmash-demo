import React from 'react';


const Input: React.FC<InputProps> = (props) => {
    const {
        name,
        className,
        placeholder,
        ref,
        variant = "primary",
        kind = "outline",
        disabled = false,
        fullWidth = false,
        label,
        labelPosition = "top",
        icon,
        iconPosition = "right",
        type = "text",
        autoComplete,
        defaultValue,
        required = false,
        helperText,
        value,
        onChange,
        iconRight,
        autofocus
    } = props;

    return (
        <div className="relative">
                
            {label && <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor={name}>{label}</label>}

            <div className="mb-4">
            <input 
                // {...props}     
                id={name}
                name={name}
                ref={ref}
                type={type}
                autoComplete={autoComplete}
                placeholder={placeholder} 
                defaultValue={defaultValue}
                value={value}
                onChange={(e) => onChange(e)}
                className={`
                    block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6    
                    ${className} 
                `}
            />
            </div>

            {iconRight && <div className="absolute z-10 right-3 top-1/2 -translate-y-1/2" dangerouslySetInnerHTML={{ __html: iconRight}}/>}
        </div>
    );
}

export default Input;

interface InputProps {
    name?: string;
    className?: string;
    placeholder?: string;
    variant?: "primary" | "secondary";
    kind?: "outline" | "filled" | "standard";
    disabled?: boolean;
    fullWidth?: boolean;
    label?: string;
    labelPosition?: "top" | "right" | "bottom" | "left";
    icon?: string;
    iconPosition?: "left" | "right";
    type?: "number" | "email" | "tel" | "text" | "password" ;
    autoComplete?: string;
    defaultValue?: string;
    helperText?: string;
    required?: boolean;
    value?: any;
    onChange?: any;
    iconRight?: any;
    autofocus?: any;
    ref?: any;
}