import React from 'react';
import {transformToInputDateFormat, transformToISODateFormat} from "../../utils/TransformDate";

const DateInput = ({config, defaultData, valueChanged}) => {
  const {label, name, key} = config;
  const transformedDate = transformToInputDateFormat(defaultData);

  const handleOnChange = ({target}) => {
    const dateToISOString = transformToISODateFormat(target.value);
    valueChanged(dateToISOString);
  }

  return (
    <React.Fragment>
      <label htmlFor={key} key={key}>{label}</label>
      <input
        type="date"
        id={key}
        name={name}
        defaultValue={transformedDate}
        onChange={(e) => handleOnChange(e)}/>
    </React.Fragment>
  )
}

export default DateInput;
