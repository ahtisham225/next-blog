import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.info}>
        
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={50} height={50} className={styles.image}/>
          <h1 className={styles.logoText}>Personal Injury Lawyers</h1>
        </div>
        <div className={styles.desc}>
          We specialize in providing valuable resources and insights to individual clients seeking help with insurance claims, personal injury claims, and extensive classified information on various aspects of the legal process to show liability for their injuries, we aim to empower you. 
        </div>
        <div className={styles.icons}>
          <Image src="/facebook.png"  alt="facebook" width={24} height={24}/> 
          <Image src="/pinterest.png" alt="pinterest" width={24} height={24}/>
          <Image src="/linkedin.png"  alt="linkedin" width={24} height={24}/>
          <Image src="/medium.png"     alt="medium" width={24} height={24}/>
          <Image src="/quora.png"     alt="quora" width={24} height={24}/>
        </div>
      </div>
      
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>
            Links
          </span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>
            Links
          </span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>
            Links
          </span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer