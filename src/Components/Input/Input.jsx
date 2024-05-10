import React from "react";

const Input = ({value, placeholder, type, onChange, style}) => {
    return (
        <input value={value} placeholder={placeholder} type={type} onChange={onChange} className={style} />
    )
}

export default Input;