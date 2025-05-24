import React from 'react';
import styles from './CalendarView.module.css';
import sharedStyles from '../SharedStyle.module.css';
import { calendarAppointments, detailedAppointments } from '../../data/appointments';

function CalendarView() {
    // Mimic a 7-day calendar view for the design
    const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

    return (
        <div className={`${styles.calendarView} ${sharedStyles.card}`}>
            <div className={styles.calendarHeader}>
                <h3 className={styles.monthTitle}>October 2021</h3>
                <div className={styles.navButtons}>
                    <button>{"<"}</button>
                    <button>{">"}</button>
                </div>
            </div>
            <div className={styles.calendarGrid}>
                {daysOfWeek.map((day, index) => (
                    <div key={index} className={styles.dayOfWeek}>{day}</div>
                ))}
                {calendarAppointments.map((dayData, index) => (
                    <div key={index} className={styles.calendarDay}>
                        <div className={styles.date}>{dayData.date}</div>
                        <div className={styles.appointmentsList}>
                            {dayData.appointments.map((appt, idx) => (
                                <div key={idx} className={styles.appointmentTime}>{appt.time}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.appointmentDetails}>
                {detailedAppointments.map((appt, index) => (
                    <div key={index} className={styles.detailCard}>
                        <div className={styles.detailCardIcon}>{appt.icon}</div>
                        <div className={styles.detailCardContent}>
                            <h4 className={styles.detailCardType}>{appt.type}</h4>
                            <p className={styles.detailCardTime}>{appt.time}</p>
                            <p className={styles.detailCardDoctor}>{appt.doctor}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CalendarView;