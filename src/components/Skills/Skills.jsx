import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { skills } from "../../constants";
import SkillSection from './SkillSection';
const Skills =()=>{
    return (
        <>
            <h1 className={`${styles.sectionHeadText}`}>Skills</h1>
            <div className='flex justify-between overflow-x-scroll'>    
                {skills.map((section)=>(
                    <SkillSection key={section.name} name={section.name} stack={section.stack} />
                ))}
            </div>
        </>
    );
}
export default SectionWrapper(Skills);