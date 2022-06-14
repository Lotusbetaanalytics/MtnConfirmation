import *as React from 'react';
import { useState } from 'react';
import { Header, Input, Select } from '../../Containers';
import styles from "./performance.module.scss";

const workHabit = () => {
    const [workHabitRating, setWorkHabitRating] = useState("")
    const [workHabitComment, setWorkHabitComment] = useState("")
    const [communicaton, setCommunication] = useState("")
    const [communicationComment, setCommunicationComment] = useState("")
    const [totalPerformanceScore, setTotalPerformanceScore] = useState("")

    return <div className=''>
        <Header title="Performance Factor" />
        <div className={styles.perfomanceLayout}>
            <div className={styles.contentContainer}>
                <div>
                    <h3 className={styles.contentHeader}>Work Habits</h3>
                    <p className={styles.content}>
                        <ul>
                            <li>To what extent does the employee display a positive cooperative attitude towards work assignment and requirement?</li>
                            <li>Consider compliance with established work rules and organisation policies</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className={styles.inputContainer}>
                <Select onChange={(e) => setWorkHabitRating(e.target.value)} title="Rating" value={workHabitRating} options={[]}
                />
            </div>
            <div className={styles.commentContainer}>
                <h3 className={styles.contentHeader}><label>Comment</label></h3>
                <textarea onChange={(e) => setWorkHabitComment(e.target.value)} value={workHabitComment} />
            </div>
            <div className={styles.contentContainer}>
                <div>
                    <h3 className={styles.contentHeader}>Communication</h3>
                    <p className={styles.content}>
                        <ul>
                            <li>Consider job related effectiveness in dealing with others</li>
                            <li>Does the employee express ideas clearly both orally and in writting,listen well and respond appropriately</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className={styles.inputContainer}>
                <Select onChange={(e) => setCommunication(e.target.value)} title="Rating" value={communicaton} options={[]}
                />
            </div>
            <div className={styles.commentContainer}>
                <h3 className={styles.contentHeader}><label>Comment</label></h3>
                <textarea onChange={(e) => setCommunicationComment(e.target.value)} value={communicationComment} />
            </div>
            <div className={styles.contentContainer}>
                <Input
                    title="Total Performance Scores"
                    value={totalPerformanceScore}
                    onChange={(e) => setTotalPerformanceScore(e.target.value)}
                    type="text"
                />
            </div>
        </div>
        <div className={styles.mtn__btnContaainer2}>
            <div> <button className={`${styles.mtn__btn2} ${styles.mtn__blackOutline2}`} type='button' >Back</button></div>
            <div> <button className={`${styles.mtn__btn2} ${styles.mtn__black2}`} type='button' >Next</button></div>
        </div>
    </div>
};

export default workHabit;
