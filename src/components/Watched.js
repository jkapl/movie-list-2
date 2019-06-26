import React from 'react';

const Watched = (props) => {
  let buttonText = !props.watched ? 'to watch' : 'watched';
  return <span onClick={props.toggleWatched}className="button"><button>{buttonText}</button></span>;
}

export default Watched;