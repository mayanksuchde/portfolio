import {motion} from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactComponent as GitLink } from '../../assets/socials/github.svg'
import { ReactComponent as LinkedIn } from '../../assets/socials/linkedin.svg';
import Name from './Name';
import NameMobile from './NameMobile';
import { fadeIn } from '../../utils/motion';
import { SectionWrapper } from '../../hoc/';
// import NameMobile from './NameMobile';
// eslint-disable-next-line react-refresh/only-export-components
function Home() {
  const matches = useMediaQuery('(min-width:600px)');
  const passions=['Full Stack developer','Lifetime Learner','Coffee Drinker'];
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
          duration:0.5
        }
      },
      shake:{
        scale: 1.3,
              rotate:[359,1,0],
              transition:{duration:0.3, stiffness: 20}
      }
  
    }
    return ( 
      <div className="flex flex-col items-center py-20 my-auto">
        {/* {isMobile?<NameMobile />:<Name/>} */}
        { matches?<Name />:<NameMobile/> }
        <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col md:flex-row justify-between items-center mx-auto my-16 md:divide-x-4">
          {passions.map((p,i)=>(
            <motion.h4 
              variants={(i===1)?fadeIn('down','spring',1.8,0.75):fadeIn('up','spring',1.8,0.75)}
              key={p}
              className='px-16'
              >
              {p}
            </motion.h4>
          ))}
      </motion.div>
      <motion.div 
        variants={container}
        initial='hidden'
        animate='show'
        className="flex m-auto justify-between">
        <motion.a
          variants={variants}
          initial='initial'
          animate='final'
          whileHover="shake"
          className='md:mx-16 mx-8 self-center'
        target="_blank" rel="noopener noreferrer" href="https://github.com/mayanksuchde">
          <GitLink style={{ fill :"grey"}} target="_blank" href="https://github.com/mayanksuchde" />
        </motion.a>
        <motion.a
          variants={variants}
          initial='initial'
          animate='final'
          whileHover="shake"
          className='md:mx-16 mx-8 self-center'
        href="https://www.linkedin.com/in/mayank-suchade/" rel="noopener noreferrer" target="_blank">
          <LinkedIn  />
        </motion.a>
      </motion.div>
    </div> );
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Home);