import React from 'react';
import styles from './Sidebar.module.css';
import { navigationLinks } from '../../data/navigation';

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>General</h3>
                <nav className={styles.navigation}>
                    <ul>
                        {navigationLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href="#"
                                    className={`${styles.navItem} ${link.active ? styles.active : ''
                                        }`}
                                >
                                    <span className={styles.icon}>{link.icon === 'dashboard' ? '📊' :
                                        link.icon === 'history' ? '⏱️' :
                                            link.icon === 'calendar' ? '📅' :
                                                link.icon === 'appointments' ? '🧑‍⚕️' :
                                                    link.icon === 'statistics' ? '📈' :
                                                        link.icon === 'tests' ? '🧪' :
                                                            link.icon === 'chat' ? '💬' :
                                                                link.icon === 'support' ? '❓' :
                                                                    '⚙️' // Default for setting
                                    }</span>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* Add more sections if needed, e.g., for "Files", "Messages" based on image */}
        </aside>
    );
}

export default Sidebar;