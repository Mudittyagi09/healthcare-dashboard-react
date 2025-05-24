import React from 'react';
import styles from './SimpleAppointmentCard.module.css';
import sharedStyles from '../SharedStyle.module.css';

function SimpleAppointmentCard({ appointment }) {
    return (
        <div className={`${styles.simpleAppointmentCard} ${sharedStyles.card}`}>
            <div className={styles.iconContainer}>
                {appointment.icon}
            </div>
            <div className={styles.content}>
                <h4 className={styles.title}>{appointment.title}</h4>
                <p className={styles.time}>{appointment.time}</p>
            </div>
            <span className={`${sharedStyles.statusIndicator} ${sharedStyles[`status${appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}`]}`}>
                {appointment.status}
            </span>
        </div>
    );
}

export default SimpleAppointmentCard;