import { SectionWrapper } from "../../hoc";
import { services } from '../../constants';
import ServiceCard from './ServiceCard';
import {styles} from '../../styles';
// eslint-disable-next-line react-refresh/only-export-components
const About =()=>{
    return (
        <div className='flex flex-col'>
            <h2 className={`${styles.sectionHeadText} py-4`}>About</h2>
            <div className='flex flex-col sm:flex-row justify-between items-center py-2'>
                <img className='md:w-[240px] sm:w-[160px] w-[120px] md:h-[240px] sm:h-[160px] h-[120px] rounded-full' src='./profile_pic.jpg' alt="Profile"/>
                <p className="max-w-[750px] text-[12px] sm:text-[16px] shrink text-white my-auto p-4">I am a Full Stack Developer based in Toronto who is passionate about creative problem solving and creating beautiful and interactive web applications.My experience in solving customer queries and my drive to keep learning new technologies empowers me to create digital products that are user-friendly and responsive across all devices.</p>
            </div> 
            <div className='xs:mt-4 flex overflow-x-scroll gap-4'>
                {services.map((service,index)=>(
                <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </div>
    );
}
// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About);