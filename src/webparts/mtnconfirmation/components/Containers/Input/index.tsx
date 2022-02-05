import * as React from 'react';


const Input = ({ onChange, value, type, title }) => {
    return <div className="mtn__InputContainer mtn__child">
        <label>{title}</label>
        <input
            type={type}
            onChange={onChange}
            value={value}
            placeholder={title}
        />
    </div>;
};

export default Input;
