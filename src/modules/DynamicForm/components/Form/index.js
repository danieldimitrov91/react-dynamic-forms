import React, {useState} from 'react';
import ComposeDynamicFormService from '../../services/ComposeDynamicFormService';

const Form = ({title, content, data, formSubmit}) => {
  const [state, setState] = useState({...data});

  const formFields = Object.entries(content).map(([key, config]) => {
    return (
      <fieldset className="mb-4" key={key}>
        {ComposeDynamicFormService.generateFormElementComponent(
          {...config, key}, data, (formData) => handleOnChange(formData), state
        )}
      </fieldset>
    )
  })

  const handleOnSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(state);
    formSubmit(state);
  }

  const handleOnChange = (formData) => {
    setState(formData);
  }

  return (
    <div>
      <h2 className="mb-4">{title}</h2>
      <form onSubmit={handleOnSubmit}>
        {formFields.map(formField => formField)}
      </form>
    </div>
  );
}

export default Form;
