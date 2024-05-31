"use client";
import React, { useState, useEffect } from 'react';
import styles from './lawyers.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LawyersPage = () => {
  const [lawyers, setLawyers] = useState([]);
  const router = useRouter();
  const { cityId } = router.query;

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        // api lawyers with the url 

        const response = await fetch('/api/searchlawyer?cityId=1');
        if (response.ok) {
          const data = await response.json();
          setLawyers(data);
        } else {
          throw new Error('Failed to fetch lawyers');
        }
      } catch (error) {
        console.error('Error fetching lawyers:', error);
      }
    };

    fetchLawyers();
  }, []);

  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <div className={styles.titleImage}>
                <Image src="/logo.png" alt="" width='120' height='120' className={styles.Image}/>           
            </div>
            <h1 className={styles.titleText}>
                Best Personal Injury Lawyers in Buffalo NY USA
            </h1>
        </div>
      {lawyers.map(lawyer => (
        <div className={styles.lawyerInfo}>
          <div className={styles.imageContainerLawyer}>
            <Image href={`${lawyer.img}`} alt="" width='200' height='200' className={styles.imageLawyer} />
            <p className={styles.ratingLawyer}>{lawyer.rating}</p>
          </div>
          <div className={styles.textContainerLawyer}>
            <h2 className={styles.lawyerTitle}>{lawyer.name}</h2>
            <h3 className={styles.lawyerLocation}>
              <Image src="/location.svg" alt="" width='17' height='17' />
              {lawyer.location}
            </h3>
            <h4 className={styles.lawyerTags}>
              TAGS
            </h4>
            <h4 className={styles.lawyerDesc}>
              <span className={styles.lawyerDescSpan}>Description:</span> {lawyer.desc}
            </h4>
            <div className={styles.infoReach}>
              <div className={styles.reachTab}><Link href={`https://wa.me/${lawyer.phone}`}>CALL</Link></div>
              <div className={styles.reachTab}><Link href={`mailto:${lawyer.email}`}>EMAIL</Link></div>
              <div className={styles.reachTab}><Link href={`${lawyer.site}`}>WEBSITE</Link></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LawyersPage;
