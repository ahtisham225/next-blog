import React from 'react'
import styles from './categoryList.module.css'
import Image from 'next/image'
import Link from 'next/link'
const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Searches</h1>
      <div className={styles.categories}>
        <Link href="/category/buffalo-ny" className={`${styles.category} ${styles.buffalo}`}>
          <Image src="/buffalo.jpeg" alt="style" width={32} height={32} className={styles.image} />
          Buffalo NY
        </Link>
        <Link href="/category/cleveland-oh" className={`${styles.category} ${styles.cleveland}`}>
          <Image src="/cleveland.jpeg" alt="style" width={32} height={32} className={styles.image} />
          Cleveland OH
        </Link>
        <Link href="/category/erie-pv" className={`${styles.category} ${styles.erie}`}>
          <Image src="/erie.jpeg" alt="style" width={32} height={32} className={styles.image} />
          Erie PV
        </Link>
        <Link href="/category/omaha-ne" className={`${styles.category} ${styles.omaha}`}>
          <Image src="/omaha.jpg" alt="style" width={32} height={32} className={styles.image} />
          Omaha NE
        </Link>
        <Link href="/category/reno-nv" className={`${styles.category} ${styles.reno}`}>
          <Image src="/reno.jpeg" alt="style" width={32} height={32} className={styles.image} />
          Reno NV
        </Link>
        <Link href="/category/sacramento-ca" className={`${styles.category} ${styles.sacramento}`}>
          <Image src="/Sacramento.jpeg" alt="style" width={32} height={32} className={styles.image} />
          Sacramento CA
        </Link>
      </div>
    </div>
  )
}

export default CategoryList