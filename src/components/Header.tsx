import React, { Component } from 'react';
import logo from '../logo.svg';
// import './Header.less';

export default function Header() {
    return (
        <div id="header-box" style={Style}>
            123
        </div>
    )
}



class HeaderLogo extends Component {
    render() {
        return (
            <div id="header-logo">
                <img src={logo} alt="logo"/>
            </div>
        )
    }
}


const Style={
    color:'aqua',
    background:'red'
}


// export default class Header extends Component {
//     render() {
//         return (
//             <div id="header-box">
//                 <div id="header-logo"></div>
//                 <div id="nav-list"></div>
//                 <div id="lang-list"></div>
//             </div>
//         )
//     }
// }


