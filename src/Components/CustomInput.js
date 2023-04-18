import React from "react";

const CustomInput = (props) => {
    const {value, type, name, placeholder, classname} = props;
  return (
    <div>
      <input
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control  ${classname}`}
      />
    </div>
  );
};

export default CustomInput;
