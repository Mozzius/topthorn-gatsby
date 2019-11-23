import React from 'react';
import styles from '../styles/page.module.css'

export const Page = ({ children }) => {
    return <div className={styles.page}>{children}</div>
}
