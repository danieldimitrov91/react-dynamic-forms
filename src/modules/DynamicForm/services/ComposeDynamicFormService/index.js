import React from 'react';
import {get, set} from 'lodash';
import ComponentType from "../../utils/ComponentTypeConst";
import TextInput from "../../components/TextInput";
import DateInput from "../../components/DateInput";
import CommandInput from "../../components/CommandInput";

class ComposeDynamicFormService {
  #componentsType = {
    [ComponentType.TEXT]: TextInput,
    [ComponentType.DATE]: DateInput,
    [ComponentType.COMMAND]: CommandInput
  }

  handleFormElementOnChange(key, value, valueChangedCb, state) {
    valueChangedCb(set({...state}, key, value));
  }

  generateFormElementComponent(config, data, valueChangedCb, state) {
    const Component = React.createElement(
      this.#componentsType[config.component],
      {
        config,
        defaultData: get(state, config.path),
        valueChanged: (value) => this.handleFormElementOnChange(config.path, value, valueChangedCb, state)},
      [],
    );

    return (
      <React.Fragment>
        {Component}
      </React.Fragment>
    )
  }
}

export default new ComposeDynamicFormService();
