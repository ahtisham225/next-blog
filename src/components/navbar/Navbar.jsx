import React from 'react'
import styles from './navbar.module.css'

import Image from 'next/image'
import Link from 'next/link'
import ThemeToogle from '../themeToogle/ThemeToogle'
import AuthLinks from '../authLinks/AuthLinks'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png"  alt="facebook" width={24} height={24}/> 
        <Image src="/pinterest.png" alt="pinterest" width={24} height={24}/>
        <Image src="/linkedin.png"  alt="linkedin" width={24} height={24}/>
        <Image src="/medium.png"     alt="medium" width={24} height={24}/>
        <Image src="/quora.png"     alt="quora" width={24} height={24}/>
      </div>
      <div className={styles.logo}>Personal Injury Lawyers</div>
      <div className={styles.links}>
        <ThemeToogle/>

        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>

        <AuthLinks/>
      </div>
    </div>
  )
}

export default Navbar