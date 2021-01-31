import React from 'react';
import './collection-item.styles.scss'

const CollectionItem = ({id, name, amount, imageUrl}) =>{
    console.log(id);
    return(
    <div className='collection-item'>
        <div className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='amount'>{amount}</span>
        </div>
    </div>
)}

export default CollectionItem;