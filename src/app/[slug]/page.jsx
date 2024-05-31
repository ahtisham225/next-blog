import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
// import Comments from '@/components/comments/comments'
function SinglePage() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Where to Get a good Personal Injury Lawyer</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.avatar}/>
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Ahtisham Ali Jan</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>

            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                    <p>
                    Personal injury cases are tough and can change your life. If you’re in Sacramento, California, the rules for personal injury law can be complex because of many local factors. This guide aims to help you understand everything about personal injury law in Sacramento. It will teach you what counts as a personal injury and how to find the best personal injury attorneys in Sacramento, California, for your case.
                    </p>
                    <p>
                    Personal injury cases are tough and can change your life. If you’re in Sacramento, California, the rules for personal injury law can be complex because of many local factors. This guide aims to help you understand everything about personal injury law in Sacramento. It will teach you what counts as a personal injury and how to find the best personal injury attorneys in Sacramento, California, for your case.
                    </p>
                    <p>
                    Personal injury cases are tough and can change your life. If you’re in Sacramento, California, the rules for personal injury law can be complex because of many local factors. This guide aims to help you understand everything about personal injury law in Sacramento. It will teach you what counts as a personal injury and how to find the best personal injury attorneys in Sacramento, California, for your case.
                    </p>
                    <p>
                    Personal injury cases are tough and can change your life. If you’re in Sacramento, California, the rules for personal injury law can be complex because of many local factors. This guide aims to help you understand everything about personal injury law in Sacramento. It will teach you what counts as a personal injury and how to find the best personal injury attorneys in Sacramento, California, for your case.
                    </p>
                </div>
            </div>
            
            <Menu/>
        </div>
    </div>
  )
}

export default SinglePage