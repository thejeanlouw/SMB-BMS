import React from 'react';
import MenuItem from '../menu-item/menu-item.component'


class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: [
                {
                    title: 'CHURCH',
                    imageUrl: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
                    id: 1
                },
                {
                    title: 'ORGANIZATION',
                    imageUrl: `https://images.unsplash.com/photo-1608686207856-001b95cf60ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80`,
                    id: 2
                },
                {
                    title: 'EVENT',
                    imageUrl: `https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80`,
                    id: 3
                },
                {
                    title: 'INDIVIDUAL',
                    imageUrl: `https://images.unsplash.com/photo-1596394549219-d3d5c5ca7a58?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80`,
                    id: 4,
                    size: 'large'
                },
                {
                    title: 'SUPPORT',
                    imageUrl: `https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80`,
                    id: 5,
                    size: 'large'
                },
            ]
        }
    }

    render(){
        return(
        <div className='directory-menu'>
            {this.state.sections.map(({id, ...otherSectionProps})=>
                <MenuItem key={id} subtitle={'DONATE NOW'} {...otherSectionProps}></MenuItem>
                )}
        </div>
        )
    }

}

export default Directory;