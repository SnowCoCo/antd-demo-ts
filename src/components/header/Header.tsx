import React, { Component } from 'react';
import logo from './logo.svg';

export default function Header() {
    return (
        <div id="header-box">
            
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


