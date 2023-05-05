import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../../utils/motion";
import { git } from "../../assets";
const ProjectCard = ({
    index,
    name,
    description,
    shortDesc,
    screenshots,
    tags,
    gitLink,
  }) => {
    return (
      <motion.div 
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="min-w-[280px] mx-10">
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={screenshots[0]}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
  
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(gitLink, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={git}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>
  
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{shortDesc}</p>
          </div>
  
          <div className='mt-4 flex flex-wrap gap-2'>
            {/* {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))} */}
          </div>
        </Tilt>
      </motion.div>
    );
  };

  export default ProjectCard;