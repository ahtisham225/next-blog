import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.title}>
          <h4>Find the Best Personal Injury Lawyer!</h4>
        </div>
        <div className={styles.inputContainer}>
          <select className={styles.select}>
            <option value="1">Select Country</option>
            <option value="2">Afghanistan</option>
            <option value="3">Pakistan</option>
            <option value="4">USA</option>
          </select>
        </div>
        <div className={styles.inputContainer}>
          <select className={styles.select}>
            <option value="1">Select City</option>
            <option value="2">California</option>
            <option value="3">Reno</option>
            <option value="4">Islamabad</option>
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>Search</button>
      </div>
    </div>
  )
}

export default Featured