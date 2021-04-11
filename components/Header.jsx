import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import MediaQuery from 'react-responsive';

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <MediaQuery query="(min-width: 767px)">
        <div className={styles.pc_container}>
          <Link href="/">
            <img className={styles.pc_logo} src="/images/nogi-store-logo.svg" />
          </Link>
          <div className={styles.pc_external}>
            <Link href="https://www.instagram.com/nogi.store/">
              <a target="_blank">
                <img className={styles.pc_instagram} src="/images/instagram-icon.svg" />
              </a>
            </Link>
            <Link href="mailto:contact@nogistore.net">
              <img className={styles.pc_email} src="/images/email-icon.svg" />
            </Link>
          </div>
        </div>
        <nav className={styles.pc_nav}>
          <Link href="/" className={styles.pc_nav_link}>
            top
          </Link>
          <Link href="/information" className={styles.pc_nav_link}>
            nogi store
          </Link>
          <Link href="/contact" className={styles.pc_nav_link}>
            contact
          </Link>
        </nav>
      </MediaQuery>
      <MediaQuery query="(max-width: 767px)">
        <div className={styles.sp_container}>
          <Link href="/">
            <img className={styles.sp_logo} src="/images/nogi-store-logo.svg" />
          </Link>
          <nav className={styles.sp_nav}>
            <Link href="/" className={styles.sp_nav_link}>
              top
            </Link>
            <Link href="/information" className={styles.sp_nav_link}>
              nogi store
            </Link>
            <Link href="/contact" className={styles.sp_nav_link}>
              contact
            </Link>
          </nav>
          <div className={styles.sp_external}>
            <Link href="https://www.instagram.com/nogi.store/">
              <a target="_blank">
                <img className={styles.sp_instagram} src="/images/instagram-icon.svg" />
              </a>
            </Link>
            <Link href="mailto:contact@nogistore.net">
              <img className={styles.sp_email} src="/images/email-icon.svg" />
            </Link>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}
