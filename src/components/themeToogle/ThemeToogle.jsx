"use client";
import React, { useContext } from 'react'
import styles from './themeToogle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToogle = () => {
    const {toogle, theme} = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toogle}
    style={
        theme === "dark" 
        ? {backgroundColor:"white"} 
        : {backgroundColor:"#0f172a"}
    
    }
    >
        <Image src="/moon.png" alt="moon" width={14} height={14} />
        <div className={styles.ball} style={theme === "dark" 
            ? {left:1,backgroundColor:"#0f172a"} 
            : {right:1, backgroundColor:"white"}
            }
        ></div>
        <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  )
}

export default ThemeToogle