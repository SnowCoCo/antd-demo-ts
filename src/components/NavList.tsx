import React from 'react';
import {hardCode} from '../models/hardCode';

export default function NavList() {
    const navList=hardCode.navList.map((nav)=>
        <li>{nav.code}</li>
    )

    return (
        <div>
            <ul>{navList}</ul>
        </div>
    )
}
