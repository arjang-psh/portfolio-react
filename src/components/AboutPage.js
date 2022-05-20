import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { MyTheme } from './Themes';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'





const Box = styled.div`
background-color: ${props => props.theme.backgraund};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`






const AboutPage = () => {
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
                    <LogoComponent theme='ligth' />
                    <SocialIcons theme='ligth' />
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
                                    value: "#FFF",
                                },
                                // links: {
                                //     color: "#fff",
                                //     distance: 100,
                                //     enable: true,
                                //     opacity: 0.5,
                                //     width: 1,
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
                                    speed: 2,
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
                                    value: 0.6,
                                },
                                shape: {
                                    type: "star",
                                },
                                size: {
                                    value: { min: 1, max: 4 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                    <Spaceman>
                        <img src={astronaut} alt="spaceman" />
                    </Spaceman>
                    <Main>
                        I'm a front-end developer located in United States. I love to create simple yet beautiful websites with great user experience.
                        <br /> <br />
                        I'm interested in the whole frontend stack Like trying new things and building great projects. I love to write cods and read books.
                        <br /> <br />
                        I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
                    </Main>

                    <BigTitle text="ABOUT" top="10%" left="5%" />


                </Box>

            </ThemeProvider>
        </>
    )
}

export default AboutPage




