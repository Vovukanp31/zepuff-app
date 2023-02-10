import React from 'react';

const Input = ({ label, type, name, value, placeholder, onChange}) => {
    return (
        <div>
            {label && <label htmlFor='input-field'>{label}</label>}
                <input 
                 type={type}
                 name={name} 
                 value={value} 
                 placeholder={placeholder}
                 onChange={onChange}
                />
        </div>
    );
};

export default Input;