import React, {Fragment} from 'react';
import './Modal.css'
import Backdrop from "../Backdrop/Backdrop"

const Modal = props => (
    <Fragment>
        <Backdrop
            show={props.show}
        />
    <div className="Modal" style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    }}>
        {props.children}
        <button onClick={props.close} style={{marginLeft: '20%'}}>X</button>
    </div>
    </Fragment>
);

export default Modal;