import React, { Component } from 'react';
import logo from '../logo.svg';
import NavList from './NavList';

export default function Header() {
    return (
        <div style={headerStyle}>
            <HeaderLogo></HeaderLogo>
            <NavList></NavList>
        </div>
    )
}



class HeaderLogo extends Component { //函数式组件，更专注于自身
    render() {
        return (
            <div style={headerLogo}>
                <img src={logo} alt="logo"/>
            </div>
        )
    }
}
const headerLogo={
    width:'8vw',
}

const headerStyle={
    display:'flex',
    gridRow:'1/2',
    gridColumn:'1/span 3',
    alignItems:'center'
}



