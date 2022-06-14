import *as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Header, Select } from '../../Containers';
import styles from "./performance.module.scss";

const BehaviouralTrait = () => {
    const history = useHistory()
    const [dependabilityRating, setDependabilityRating] = useState("")
    const [dependabilityComment, setDependabilityComment] = useState("")
    const [coperationRating, setCoperationRating] = useState("")
    const [coperationComment, setCoperationComment] = useState("")
    const [initiativeComment, setInitiativeComment] = useState("")
    const [initiativeRating, setIntiativeRating] = useState("")

    const prevHandler = () => {
        history.push("/knowlegdeFactor")
    }

    const nextHandler = () => {
        history.push("/workHabit")
    }
    return <div className=''>
        <Header title="Performance Factor" />
        <div className={styles.perfomanceLayout}>
            <div className={styles.contentContainer}>
                <div>
                    <h3 className={styles.contentHeader}>Dependability</h3>
                    <p className={styles.content}>
                        <ul>
                            <li>Consider the time spent directing this employee </li>
                            <li>Does this employee monitor project and exercise follow-through</li>
                            <li>Adhere to tome frame</li>
                            <li>Is the employee puncture for meeting and appointments and Respond appropriately to instructions and procedures</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className={styles.inputContainer}>
                <Select onChange={(e) => setDependabilityRating(e.target.value)} title="Rating" value={dependabilityRating} options={[]}
                />
            </div>
            <div className={styles.commentContainer}>
                <h3 className={styles.contentHeader}><label>Comment</label></h3>
                <textarea onChange={(e) => setDependabilityComment(e.target.value)} value={dependabilityComment} />
            </div>
            <div className={styles.contentContainer}>
                <div>
                    <h3 className={styles.contentHeader}>Co-Operation</h3>
                    <p className={styles.content}>
                        <ul>
                            <li>How well does the employee work/ co-operate with co-worker and supervisor as a contributing member</li>
                            <li>Does the employee demonstrate consideration for the others, maintain rapport with others and help others willingly</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className={styles.inputContainer}>
                <Select onChange={(e) => setCoperationRating(e.target.value)} title="Rating" value={coperationRating} options={[]}
                />
            </div>
            <div className={styles.commentContainer}>
                <h3 className={styles.contentHeader}><label>Comment</label></h3>
                <textarea onChange={(e) => setCoperationComment(e.target.value)} value={coperationComment} />
            </div>
            <div className={styles.contentContainer}>
                <div>
                    <h3 className={styles.contentHeader}>Initiative</h3>
                    <p className={styles.content}>
                        <ul>
                            <li>Consider how well the employee seeks and assume greater responsibility,monitor project independently and follow through appropriately </li>

                        </ul>
                    </p>
                </div>
            </div>
            <div className={styles.inputContainer}>
                <Select onChange={(e) => setIntiativeRating(e.target.value)} title="Rating" value={initiativeRating} options={[]}
                />
            </div>
            <div className={styles.commentContainer}>
                <h3 className={styles.contentHeader}><label>Comment</label></h3>
                <textarea onChange={(e) => setInitiativeComment(e.target.value)} value={initiativeComment} />
            </div>
        </div>
        <div className={styles.mtn__btnContaainer2}>
            <div> <button className={`${styles.mtn__btn2} ${styles.mtn__blackOutline2}`} type='button' onClick={prevHandler} >Back</button></div>
            <div> <button className={`${styles.mtn__btn2} ${styles.mtn__black2}`} type='button' onClick={nextHandler} >Next</button></div>
        </div>
    </div>
};

export default BehaviouralTrait;
