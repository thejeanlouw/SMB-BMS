import React from 'react';
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = ({title, subtitle, imageUrl, size, history, match}) => (
    <div className= {`menu-item ${size}`} onClick={()=>history.push(`${match.url}${title.toLowerCase()}`)}>
        <div 
          className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className='content'>
            <h1 className='title'>{title?.toUpperCase()}</h1>
            <span className='subtitle'>{subtitle?.toUpperCase()}</span>
        </div>
    </div>
)

export default withRouter(MenuItem);