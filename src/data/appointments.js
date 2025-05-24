export const calendarAppointments = [
    { date: '25', month: 'Oct', appointments: [] },
    { date: '26', month: 'Oct', appointments: [{ time: '10:00' }] },
    { date: '27', month: 'Oct', appointments: [{ time: '09:00' }, { time: '12:00' }] },
    { date: '28', month: 'Oct', appointments: [{ time: '13:00' }] },
    { date: '29', month: 'Oct', appointments: [{ time: '11:00' }, { time: '15:00' }] },
    { date: '30', month: 'Oct', appointments: [{ time: '14:00' }] },
    { date: '31', month: 'Oct', appointments: [{ time: '09:00' }] },
];

export const detailedAppointments = [
    {
        type: 'Dentist',
        time: '09:00-11:00',
        doctor: 'Dr. Cameron Williamson',
        icon: '🦷',
    },
    {
        type: 'Physiotherapy Appointment',
        time: '11:00-12:00',
        doctor: 'Dr. Kevin Djones',
        icon: '🏋️',
    },
];

export const upcomingSchedule = [
    {
        day: 'Thursday',
        appointments: [
            {
                title: 'Health checkup complete',
                time: '11:00 AM',
                icon: '✅',
                status: 'complete',
            },
            {
                title: 'Ophthalmologist',
                time: '14:00 PM',
                icon: '👁️',
                status: 'pending',
            },
        ],
    },
    {
        day: 'Saturday',
        appointments: [
            {
                title: 'Cardiologist',
                time: '12:00 AM',
                icon: '❤️',
                status: 'pending',
            },
            {
                title: 'Neurologist',
                time: '16:00 PM',
                icon: '🧠',
                status: 'pending',
            },
        ],
    },
];