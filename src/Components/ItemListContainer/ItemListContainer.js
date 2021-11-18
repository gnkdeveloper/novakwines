import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css';

const ItemListContainer = ({titulo}) => {
    return (
        <div>
           <h1 className="tittleInicio">{titulo}</h1>
           
        </div>
    )
}

export default ItemListContainer;
