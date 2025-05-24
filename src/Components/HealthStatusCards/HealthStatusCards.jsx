import React from 'react';
import styles from './HealthStatusCards.module.css';
import sharedStyles from '../SharedStyle.module.css';

function HealthStatusCards({ healthStatusCards }) {
    return (
        <div className={styles.healthStatusCards}>
            {healthStatusCards.map((card, index) => (
                <div key={index} className={`${styles.cardItem} ${sharedStyles.card}`}>
                    <div className={styles.cardHeader}>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <span className={`${sharedStyles.statusIndicator} ${sharedStyles[`status${card.status}`]}`}>
                            {card.status}
                        </span>
                    </div>
                    <p className={styles.cardDate}>{card.date}</p>
                    <div className={styles.progressBarContainer}>
                        <div
                            className={styles.progressBar}
                            style={{ width: `${card.progress}%`, backgroundColor: `var(--${card.color}-accent)` }}
                        ></div>
                    </div>
                    <button className={styles.detailsButton}>Details</button>
                </div>
            ))}
        </div>
    );
}

export default HealthStatusCards;