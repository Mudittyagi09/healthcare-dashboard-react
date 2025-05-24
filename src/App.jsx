import React from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import DashboardMainContent from './Components/DashboardMainContent/DashboardMainContent';
import styles from './App.module.css'; // For App specific layout styles

function App() {
    return (
        <div className={styles.appContainer}>
            <Sidebar />
            <div className={styles.mainContentArea}>
                <Header />
                <DashboardMainContent />
            </div>
        </div>
    );
}

export default App;