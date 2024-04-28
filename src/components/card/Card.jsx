import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>Sacramento CA</span>
            </div>
            <Link href="/">
                <h1 className={styles.title}>How to Find Personal Injury attorneys in Sacramento</h1>
            </Link>
            <p className={styles.desc}>
                Personal injury cases are tough and can change your life. If you’re in Sacramento, California, the rules for personal injury law can be complex because of many local factors. This guide aims to help you understand everything about personal injury law in Sacramento.
            </p>
            <Link href="/" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card