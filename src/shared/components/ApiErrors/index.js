import React from 'react';

const ApiErrors = ({error, children}) => {
  return <div>{error || children}</div>
}

export default ApiErrors;
