import React from 'react';
import styles from './UpcomingSchedule.module.css';
import sharedStyles from '../SharedStyle.module.css';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';
import { upcomingSchedule } from '../../data/appointments';

function UpcomingSchedule() {
    return (
        <div className={`${styles.upcomingSchedule} ${sharedStyles.card}`}>
            <h3 className={styles.title}>The Upcoming Schedule</h3>
            <div className={styles.scheduleContent}>
                {upcomingSchedule.map((dayData, index) => (
                    <div key={index} className={styles.daySection}>
                        <h4 className={styles.dayTitle}>On {dayData.day}</h4>
                        <div className={styles.appointmentsList}>
                            {dayData.appointments.map((appt, idx) => (
                                <SimpleAppointmentCard key={idx} appointment={appt} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingSchedule;