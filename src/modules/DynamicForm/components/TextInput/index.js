import React from 'react';

const TextInput = ({config, defaultData, valueChanged}) => {
  const {label, name, key} = config;

  const handleOnChange = ({target}) => {
    valueChanged(target.value);
  }

  return (
    <React.Fragment>
      <label htmlFor={key} key={key}>{label}</label>
      <input
        type="text"
        id={key}
        name={name}
        defaultValue={defaultData}
        onChange={(e) => handleOnChange(e)}/>
    </React.Fragment>
  )
}

export default TextInput;
