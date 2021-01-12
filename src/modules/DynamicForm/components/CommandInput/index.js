import React from 'react';

const CommandInput = ({config}) => {
  return (
    <React.Fragment>
      <input type="submit" value={config.text} />
    </React.Fragment>
  )
}

export default CommandInput;
