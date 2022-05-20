import React from 'react'
import styled from 'styled-components'
import { MyTheme } from '../components/Themes'
import { NavLink } from 'react-router-dom'




const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? MyTheme.body : MyTheme.text};
font-family: 'Pacifico',cursive;
position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`


const LogoComponent = (props) => {
    return (
        <NavLink to="/">
            <Logo color={props.theme}>
                Arji

            </Logo>
        </NavLink>
    )
}

export default LogoComponent 