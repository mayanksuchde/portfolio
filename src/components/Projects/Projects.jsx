import { SectionWrapper } from "../../hoc";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { fadeIn } from "../../utils/motion";
import { projects } from '../../constants'
const Projects =()=>{
    return (
    <div>
        <h1 className={`${styles.sectionHeadText}`} >Projects</h1>
        <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-1 text-secondary text-[12px] sm:text-[17px] max-w-6xl leading-[16px] sm:leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-10 flex overflow-x-scroll gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
    );
}
export default SectionWrapper(Projects);