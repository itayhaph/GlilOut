import React from 'react';

import classes from './Logo.css';
import theatherThug from '../../assets/images/Theatre_Thug.jpg'

const logo = (props) => (
    <div className={classes.Logo} style={{ height: props.height }}>
        <img src={theatherThug} alt="Logo" />
    </div>
);

export default logo;