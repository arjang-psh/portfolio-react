import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { MyTheme } from './Themes';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';

import { Work } from "../data/WorkData";
import Card from '../subComponents/Card';
import { YinYang } from './AllSvgs';
import BigTitlte from '../subComponents/BigTitlte';

const Box = styled.div`
background-color: ${props => props.theme.body};

height:400vh;
position: relative;
display: flex;
align-items: center;


`

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;

color:white;
`
const Rotate = styled.span`
display:block;
position: fixed;
right:1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index:1;
`


// Framer-motion Configuration
const container = {

  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}

const WorkPage = () => {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const ref = useRef(null);
  const yinyang = useRef(null);



  useEffect(() => {
    let element = ref.current;


    const rotate = () => {

      element.style.transform = `translateX(${-window.pageYOffset}px)`


      return (yinyang.current.style.transform =
        'rotate(' + -window.pageYOffset + 'deg)')
    }

    window.addEventListener('scroll', rotate)
    return () => {
      window.removeEventListener('scroll', rotate);

    }
  }, [])


  return (
    <>

      <ThemeProvider theme={MyTheme}>
        <Box>

          <LogoComponent theme='dark' />
          <SocialIcons theme='dark' />
          <PowerButton />
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#005669",
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
                links: {
                  color: "#FFF",
                  distance: 100,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
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
          <Main ref={ref} variants={container} initial='hidden' animate='show'  >
            {
              Work.map(d =>
                <Card key={d.id} data={d} />
              )
            }
          </Main>
          <Rotate ref={yinyang}>
            <YinYang width={80} height={80} fill={MyTheme.text} />
          </Rotate>

          <BigTitlte text="WORK" top='10%' right="20%" />
        </Box>

      </ThemeProvider>
    </>
  )
}

export default WorkPage
