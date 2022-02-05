import * as React from 'react';
import styles from './home.module.scss'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    return <div className={styles.app}>
        <div className={styles.mtn__banner}>
            <div className={styles.mtn__logoContainer}>
                <div className={styles.logo}>
                    <img src={require('../../assets/logo.png')} alt="logo" />
                </div>
                <div className={styles.text}>
                    <h3>Employee Confirmation</h3>
                    <h1>PORTAL</h1>
                </div>
            </div>
            <div>
                <Link to={`/basicInfo`} className="mtn__btn mtn__black">Proceed</Link>
            </div>
        </div>
    </div>;
};

export default HomeScreen;
