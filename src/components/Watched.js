import React from 'react';

const Watched = (props) => {
  if (!props.watched) {
    return null
  }
  return (
    <div>
      <p>watched</p>
    </div>
  );
}

export default Watched;