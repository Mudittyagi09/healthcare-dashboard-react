import React from 'react';
import styles from './DashboardOverview.module.css';
import sharedStyles from '../SharedStyle.module.css';
import AnatomySection from '../AnatomySection/AnatomySection';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';
import { healthStatusCards, anatomyHealth } from '../../data/healthData';

function DashboardOverview() {
    return (
        <div className={`${styles.dashboardOverview} ${sharedStyles.card}`}>
            <h2 className={styles.title}>Dashboard</h2>
            <div className={styles.content}>
                <AnatomySection anatomyHealth={anatomyHealth} />
                <HealthStatusCards healthStatusCards={healthStatusCards} />
            </div>
        </div>
    );
}

export default DashboardOverview;