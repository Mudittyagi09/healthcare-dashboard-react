import React from 'react';
import styles from './Header.module.css';
import sharedStyles from '../SharedStyle.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <h1 className={styles.logo}>Healthcare.</h1>
                <div className={`${styles.searchBar} ${sharedStyles.input}`}>
                    <span className={styles.searchIcon}>🔍</span>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className={styles.rightSection}>
                <button className={styles.iconButton}>🔔</button>
                <div className={styles.userProfile}>
                    <img src="/src/assets/avatar.png" alt="User Avatar" className={styles.avatar} />
                    <span>Mudit Tyagi</span> {/* Placeholder for user name */}
                </div>
                <button className={`${styles.addButton} ${sharedStyles.button}`}>+</button>
            </div>
        </header>
    );
}

export default Header;