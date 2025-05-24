import React from 'react';
import styles from './DashboardMainContent.module.css';
import DashboardOverview from '../DashboardOverview/DashboardOverview';
import CalendarView from '../CalendarView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

function DashboardMainContent() {
    return (
        <div className={styles.dashboardMainContent}>
            <div className={styles.topSection}>
                <DashboardOverview />
                <CalendarView />
            </div>
            <div className={styles.bottomSection}>
                <ActivityFeed />
                <UpcomingSchedule />
            </div>
        </div>
    );
}

export default DashboardMainContent;