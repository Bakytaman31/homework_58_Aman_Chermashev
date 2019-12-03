import React from 'react';
import './Alert.css'

const Alert = props => {
    let alertType;
    if (props.type === 'primary'){
        alertType = 'alert alert-primary'
    } else if (props.type === 'secondary'){
        alertType = 'alert alert-secondary'
    } else if (props.type === 'success'){
        alertType = 'alert alert-success'
    }
    return props.clickDismissable ?  <div className={alertType} >
        <button onClick={props.dismiss}>x</button>
        {props.children}
    </div>:<div onClick={props.dismiss} className={alertType} >
        {props.children}
    </div>
};

export default Alert;