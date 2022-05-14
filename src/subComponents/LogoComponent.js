import React from 'react'
import styled from 'styled-components'
import { MyTheme } from '../components/Themes'



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
        <Logo color={props.theme}>
            Arji
        </Logo>
    )
}

export default LogoComponent 