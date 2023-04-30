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
                
            {label && <label htmlFor={name}>{label}</label>}
            
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
                    block w-full placeholder:text-[#D4D4D4] appearance-none rounded-[3px] border border-gray-300 px-3 py-3 placeholder-gray-800 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-md
                    ${className} 
                `}
            />

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