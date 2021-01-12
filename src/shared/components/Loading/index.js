import React from 'react';

const Loading = ({loading, children}) => {
  return <div>{loading ? <div>Loading...</div> : children}</div>
}

export default Loading;
