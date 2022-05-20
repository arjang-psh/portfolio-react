import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { MyTheme } from './Themes';
import { Design, Develope } from './AllSvgs';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;




&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    const particlesInit = async (main) => {
        console.log(main);

        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <>

            <ThemeProvider theme={MyTheme}>
                <Box>
                    <LogoComponent theme='light' />
                    <SocialIcons theme='light' />
                    <PowerButton />
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            background: {
                                color: {
                                    value: "#000",
                                },
                            },
                            fpsLimit: 600,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ABDFEA",
                                },
                                // links: {
                                //     color: "#72CFFB",
                                //     distance: 100,
                                //     enable: true,
                                //     opacity: 0.5,
                                //     width: 2,
                                // },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 3,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: { min: 1, max: 5 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                    <Main>
                        <Title>
                            <Design width={40} height={40} /> Frontend Developer
                        </Title>
                        <Description>
                            I value business or brand for which I'm creating, Because I enjoy bringing new ideas to life.
                        </Description>
                        <Description>
                            <strong>Skills</strong>
                            <p>
                                Html, Css, Js, React, Redux, Sass, Bootstrap, Netlify, Firebase and etc.
                            </p>
                        </Description>
                    </Main>
                    <Main>
                        <Title>
                            <Develope width={40} height={40} /> Backend Developer
                        </Title>
                        <Description>
                            I write,troubleshooting and debugging clean codes to develop functional web applications.
                        </Description>
                        <Description>
                            <strong>Skills</strong>
                            <p>
                                Python, Django, Node.js, Express.js, Flask, MongoDB, PostgreSQL, Git and etc.
                            </p>
                        </Description>
                    </Main>

                    <BigTitle text="SKILLS" top="80%" right="30%" />

                </Box>

            </ThemeProvider>
        </>
    )
}

export default MySkillsPage
