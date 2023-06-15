import React from 'react';

function Button(props) {
  return (
    <button className={props.className} type="button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;
