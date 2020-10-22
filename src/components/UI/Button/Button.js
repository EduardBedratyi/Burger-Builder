import React from 'react';
import classes from './Button.css';

const Button = (props) => (
<buttton className={[classes.Button, classes[props.btnType]].join(' ')}
 onClick={props.clicked}>{props.children}</buttton>
);

export { Button };