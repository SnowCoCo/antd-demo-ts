import React from 'react';
import {hardCode} from '../models/hardCode';

export default function NavList() {
    const navList=hardCode.navList.map((nav)=>
        <li style={navItemStyle}>{nav.code}</li>
    )

    return (
        <ul style={{listStyle:'none',display:'flex',flexGrow:3,margin:'0'}}>
            {navList}
        </ul>
    )
}

const navItemStyle={
    color:'#676565',
    fontSize:'1.4rem',
    flex: 1
}