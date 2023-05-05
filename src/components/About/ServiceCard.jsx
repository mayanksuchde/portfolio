import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

const ServiceCard = ({index,icon,title})=>{
    return(
        <Tilt className='p-4' >
            <motion.div
            variants={fadeIn('right','spring',0.5,index, 0.75)}
            className='w-full md:w-[240px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  p-[1px] rounded-[20px] shadow-card'
            >
                <div 
                // eslint-disable-next-line react/no-unknown-property
                options={{
                    max:45,
                    scale:1,
                    speed:450
                }}
                className='bg-tertiary rounded-[20px] md:w-[238px] min-h-[194px]  py-5 px-12 flex justify-evenly items-center flex-col'
                >
                    <img src={icon} alt={title} className='w-16 h-16 object-contain serviceIcon' />
                    <h3 className='text-white text-[20px] font-bold text-centers serviceTitle'>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    );
}

export default ServiceCard;