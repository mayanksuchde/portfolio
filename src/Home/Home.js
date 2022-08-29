import React,{ useContext } from 'react';
import {motion} from 'framer-motion';
import { ReactComponent as GitLink } from '../assets/socials/github.svg'
import { ReactComponent as LinkedIn } from '../assets/socials/linkedin.svg';
import Name from './Name';
import NameMobile from './NameMobile';
import {WindowContext} from '../context/WindowSize';
function Home() {
  const { clientHeight, clientWidth, clientScreen } = useContext(WindowContext);
  console.log(clientScreen)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay:1.3,
        staggerChildren: 0.09
        }
      }
    }
    const variants={
      up:{
        y:-20
      },
      down:{
        y:20
      },
      align:{
        y:0,
        transition:{delay:1.5,duration:0.8,type:'spring'},
      },
      initial:{
        scale:0.1
      },
      final:{
        scale:1, 
        rotate:[180,360],
        transition:{
          delay:1.5,
          duration:0.5
        }
      },
      shake:{
        scale: 1.3,
              rotate:[359,1,0],
              transition:{duration:0.3, stiffness: 100}
      }
  
    }
    return ( 
      <div className="home page">
        {(clientWidth>768)?<Name />:<NameMobile/>}
        <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="subheaders">
        <motion.h4 
            variants={variants}
            initial="up" animate="align">Full Stack developer</motion.h4>
        <motion.h4 
            variants={variants}
            initial="up" animate="align">Lifetime Learner</motion.h4>
        <motion.h4 
            variants={variants}
            initial="up" animate="align">Coffee Drinker</motion.h4>
      </motion.div>
      <motion.div 
        variants={container}
        initial='hidden'
        animate='show'
        className="socials">
        <motion.a
          variants={variants}
          initial='initial'
          animate='final'
          whileHover="shake"
        target="_blank" rel="noopener noreferrer" href="https://github.com/mayanksuchde">
          <GitLink style={{ fill :"grey"}} target="_blank" href="https://github.com/mayanksuchde" />
        </motion.a>
        <motion.a
          variants={variants}
          initial='initial'
          animate='final'
          whileHover="shake"
        href="https://www.linkedin.com/in/mayank-suchade/" rel="noopener noreferrer" target="_blank">
          <LinkedIn  />
        </motion.a>
      </motion.div>
    </div> );
}

export default Home;