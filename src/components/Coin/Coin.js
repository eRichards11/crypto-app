import React from 'react'
import styles from './Coin.module.css'

const Coin = ({rank, name, image, symbol, price, marketCap, priceChange1h, priceChange24h}) => {
  return (
    <div className={styles.coin__container}>
        <div className={styles.coin__row}>
            <div className={styles.coin}>
                <p className={styles.rank}>{rank}</p>
                <img className={styles.coin__img} src={image} alt="Crypto Logo"/>
                <h1 className={styles.coin__name}>{name}</h1>
                <p className={styles.ticker}>{symbol}</p>
            </div>
            <div className={styles.coin__data}>
                <p className={styles.coin__price}>${price.toLocaleString()}</p>
                {priceChange1h < 0 ? (
                    <p className={styles.red}>1hr: {priceChange1h.toFixed(2)}%</p>
                ): (
                    <p className={styles.green}>1hr: {priceChange1h.toFixed(2)}%</p>
                )
                    }
                {priceChange24h < 0 ? (
                    <p className={styles.red}>24hr: {priceChange24h.toFixed(2)}%</p>
                ): (
                    <p className={styles.green}>24hr: {priceChange24h.toFixed(2)}%</p>
                )
                    }
                <p className={styles.coin__volume}>Market Cap: ${marketCap.toLocaleString()}</p>
            </div>
        </div>
    </div>
  )
}

export default Coin