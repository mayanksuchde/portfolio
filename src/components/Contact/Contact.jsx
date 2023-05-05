import { useState } from "react";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { slideIn } from "../../utils/motion";
import {Button, Box, TextField} from '@mui/material';
import { Send } from "@mui/icons-material";
import useInputState from '../../hooks/useInputState';
import useMediaQuery from '@mui/material/useMediaQuery';
import EarthCanvas from "./EarthCanvas";

const  Contact=()=>{
    const [name,handleName,resetName]=useInputState("");
    const [email,handleEmail,resetEmail]=useInputState("");
    const [subject,handleSubject,resetSubject]=useInputState("");
    const [message,handleMessage,resetMessage]=useInputState("");
    const [result, setResult] = useState("Send Message");
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const submitMessage = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "c09e02db-c56b-4ec0-a9b7-005b56042331");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      resetName();
      resetEmail();
      resetSubject();
      resetMessage();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };
    return (
        <>
            <h1 className={`${styles.sectionHeadText}`}>Contact</h1>
            <div className="flex sm:flex-row flex-col justify-around">
                <motion.div
                    variants={slideIn('left','tween',0.2,1)}
                    className="x1:flex-1 md:h-[500px] sm:h-[350px] h-[200px] sm:w-[400px] w-[200px] self-center"
                >
                    <EarthCanvas />
                </motion.div>
                <motion.div 
                    variants={slideIn('right','tween',0.2,1)}
                    className="flex-[0.75] rounded2xl">
                    <form className="sm:mt-2 flex flex-col gap-2"onSubmit={submitMessage} >
                        <label htmlFor="name" className='flex flex-col text-white'>
                            Name:
                            <input
                                required 
                                type="text" 
                                name="name" 
                                value={name} 
                                onChange={handleName}
                                className='bg-tertiary sm:py-4 py-1 px-2 text-white rounded-lg outline-none border-none font-medium' />
                        </label>
                        <label htmlFor="email" className='flex flex-col text-white'>
                            Email:
                            <input
                                required 
                                type="email" 
                                name="email" 
                                value={email} 
                                onChange={handleEmail}
                                className='bg-tertiary sm:py-4 py-1 px-2 text-white rounded-lg outline-none border-none font-medium' />
                        </label>
                        <label htmlFor="subject" className='flex flex-col text-white'>
                            Subject:
                            <input
                                required 
                                type="text" 
                                name="subject" 
                                value={subject} 
                                onChange={handleSubject}
                                className='bg-tertiary sm:py-4 py-1 px-2 text-white rounded-lg outline-none border-none font-medium' />
                        </label>
                        <label htmlFor="message" className='flex flex-col text-white'>
                            Message:
                            <textarea
                                required 
                                type="text" 
                                name="message" 
                                value={message} 
                                onChange={handleMessage}
                                className='bg-tertiary sm:py-4 px-2 text-white rounded-lg outline-none border-none font-medium' />
                        </label>
                        <button type="submit" className='bg-tertiary sm:py-4 py-1 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>{result}</button>
                    </form>
                </motion.div>
                
            </div>
        </>
    );
}
export default SectionWrapper(Contact);