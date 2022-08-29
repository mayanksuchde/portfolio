import React from 'react';
import {motion} from 'framer-motion'

export const GradientDef=()=>{
    return(
        <defs>
        <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <motion.stop
          stopColor="#2B00FF"
          animate={{
            stopColor: [
              "#2e9cca",
              "#29648a",
              "#863EB3",
              "#b683f0",
              "#25274d"
            ]
          }}
          transition={{
            yoyo: Infinity,
            ease: "linear",
            duration: 8
          }}
          offset="25%"
        />
        <motion.stop
          stopColor="#e01b5c"
          animate={{
            stopColor: [
              "#9423a8",
              "#5f34af",
              "#394bad",
              "#1e8feb",
              "#03a2ec"
            ]
          }}
          transition={{
            yoyo: Infinity,
            ease: "linear",
            duration: 8
          }}
          offset="50%"
        />
        <motion.stop
          stopColor="#00b4cc"
          animate={{
            stopColor: ["#008e81", "#f082cb", "#f082cb"]
          }}
          transition={{
            yoyo: Infinity,
            ease: "linear",
            duration: 8
          }}
          offset="75%"
        />
        <motion.stop
          stopColor="#8a2192"
          animate={{
            stopColor: ["#f082cb", "#597684", "#b683f0", "#979797"]
          }}
          transition={{
            yoyo: Infinity,
            ease: "linear",
            duration: 8
          }}
          offset="100%"
        />
        </linearGradient>
    </defs>
    )
}