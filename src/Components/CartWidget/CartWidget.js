import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Media/Icon.png';
import './CartWidget.css';

const CartWidget = ({count}) => {
    return (
        <div className="d-flex">
            <img src= {logo} alt="" className="logoClass"/>
            <h5 className= "text-white">{count}</h5>
        </div>
    )
}

export default CartWidget;
