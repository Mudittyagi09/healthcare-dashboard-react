import React from 'react';
import styles from './ActivityFeed.module.css';
import sharedStyles from '../SharedStyle.module.css';

function ActivityFeed() {
    // Mock data for activity bars (heights as percentage for visual representation)
    const activityData = [
        { day: 'Mon', height: '60%' },
        { day: 'Tues', height: '80%' },
        { day: 'Wed', height: '40%' },
        { day: 'Thurs', height: '90%' },
        { day: 'Fri', height: '70%' },
        { day: 'Sat', height: '50%' },
        { day: 'Sun', height: '30%' },
    ];

    return (
        <div className={`${styles.activityFeed} ${sharedStyles.card}`}>
            <div className={styles.header}>
                <h3 className={styles.title}>Activity</h3>
                <span className={styles.appointmentsCount}>3 appointments on this week</span>
            </div>
            <div className={styles.chartContainer}>
                {activityData.map((data, index) => (
                    <div key={index} className={styles.barWrapper}>
                        <div className={styles.bar} style={{ height: data.height }}></div>
                        <span className={styles.barDay}>{data.day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ActivityFeed;