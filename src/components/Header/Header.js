import React from 'react'
import styles from './Header.module.css'

export default function Header() {


    return (
        <header className={styles.header}>
            <h1 className={styles.logo}><i className="fa-solid fa-arrow-trend-up"></i>
            <span className={styles.title}>CoinBase</span></h1>
            <p className={styles.subheader}>See What's Going On With The Top 200 Coins</p>
        </header>
    )
}