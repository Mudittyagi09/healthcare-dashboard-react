import React from 'react';
import styles from './AnatomySection.module.css';
import humanBodyImage from '../../assets/Human-body.png'; // Placeholder image

function AnatomySection({ anatomyHealth }) {
    return (
        <div className={styles.anatomySection}>
            <div className={styles.imageContainer}>
                <img src={humanBodyImage} alt="Human Anatomy" className={styles.humanBodyImage} />
                
                
            </div>
            <div className={styles.activityInfo}>
                <div className={styles.activityItem}>
                    <span className={styles.activityIcon}>❤️</span>
                    <span className={styles.activityText}>Healthy Heart</span>
                </div>
                <div className={styles.activityItem}>
                    <span className={styles.activityIcon}>🫁</span>
                    <span className={styles.activityText}>Healthy Lung</span>
                </div>
            </div>
        </div>
    );
}

export default AnatomySection;