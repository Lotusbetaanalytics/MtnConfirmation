import * as React from 'react';
import styles from './header.module.scss'
const Header = ({ title }) => {
    return <div className={styles.mtn__header}>
        <img src={require('../../assets/logo.png')} alt="logo" />
        {title}
    </div>;
};

export default Header;
