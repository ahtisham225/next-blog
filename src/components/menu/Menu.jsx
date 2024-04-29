import React from 'react'
import styles from './menu.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.buffalo}`}>
              Buffalo NY
            </span>
            <h3>
              How to Find Leading Personal Injury Lawyer in Buffalo NY    
            </h3>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.buffalo}`}>
              Buffalo NY
            </span>
            <h3>
              How to Find Leading Personal Injury Lawyer in Buffalo NY    
            </h3>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.buffalo}`}>
              Buffalo NY
            </span>
            <h3>
              How to Find Leading Personal Injury Lawyer in Buffalo NY    
            </h3>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.buffalo}`}>
              Buffalo NY
            </span>
            <h3>
              How to Find Leading Personal Injury Lawyer in Buffalo NY    
            </h3>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.buffalo}`}>
              Buffalo NY
            </span>
            <h3>
              How to Find Leading Personal Injury Lawyer in Buffalo NY    
            </h3>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.buffalo}`}>
              Buffalo NY
            </span>
            <h3>
              How to Find Leading Personal Injury Lawyer in Buffalo NY    
            </h3>
          </div>
        </Link>
      </div>
      <h1 className={styles.titleStories}>Stories</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.buffalo}`}>
              Buffalo NY
            </span>
            <h3>
              How to Find Leading Personal Injury Lawyer in Buffalo NY    
            </h3>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.buffalo}`}>
              Buffalo NY
            </span>
            <h3>
              How to Find Leading Personal Injury Lawyer in Buffalo NY    
            </h3>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.buffalo}`}>
              Buffalo NY
            </span>
            <h3>
              How to Find Leading Personal Injury Lawyer in Buffalo NY    
            </h3>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.buffalo}`}>
              Buffalo NY
            </span>
            <h3>
              How to Find Leading Personal Injury Lawyer in Buffalo NY    
            </h3>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.buffalo}`}>
              Buffalo NY
            </span>
            <h3>
              How to Find Leading Personal Injury Lawyer in Buffalo NY    
            </h3>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.buffalo}`}>
              Buffalo NY
            </span>
            <h3>
              How to Find Leading Personal Injury Lawyer in Buffalo NY    
            </h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Menu