import *as React from 'react';
import { useState } from 'react';
import { Header, Select } from '../../Containers';
import { useHistory } from 'react-router-dom'
import styles from "./performance.module.scss";

const KnowlegdeFactor = () => {
    const history = useHistory()
    const [knowlegdeRating, setKnowlegdeRating] = useState("")
    const [knowlegdeComment, setknowlegdeComment] = useState("")
    const [workQualityRating, setWorkQualityRating] = useState("")
    const [workQualityComment, setWorkQualityComment] = useState("")
    const [workQualityRatingtwo, setWorkQualityRatingtwo] = useState("")
    const [workQualityCommenttwo, setWorkQualityCommenttwo] = useState("")

    const prevHandler = () => {
        history.push("/")
    }

    const nextHandler = () => {
        history.push("/behaviouralTrait")
    }

    return <div className=''>
        <Header title="Performance Factor" />
        <div className={styles.perfomanceLayout}>
            <div className={styles.contentContainer}>
                <div>
                    <h3 className={styles.contentHeader}>knowlegde, skill and ability</h3>
                    <p className={styles.content}> Consider the degree to which the employee exhibits
                        the required level of job knowledge skills to perform the job and the
                        use of established techniques, materials and equipment as they relate
                        to performance.</p>
                </div>
            </div>
            <div className={styles.inputContainer}>
                <Select onChange={(e) => setKnowlegdeRating(e.target.value)} title="Rating" value={knowlegdeRating} options={[]}
                />
            </div>
            <div className={styles.commentContainer}>
                <h3 className={styles.contentHeader}><label>Comment</label></h3>
                <textarea onChange={(e) => setknowlegdeComment(e.target.value)} value={knowlegdeComment} />
            </div>
            <div className={styles.contentContainer}>
                <div>
                    <h3 className={styles.contentHeader}>Quality of work</h3>
                    <p className={styles.content}>
                        <ul>
                            <li>Does the employee assignments meet quality</li>
                            <li>consider accuracy neatness, thoroughness and adherence to standardnand safety</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className={styles.inputContainer}>
                <Select onChange={(e) => setWorkQualityRating(e.target.value)} title="Rating" value={workQualityRating} options={[]}
                />
            </div>
            <div className={styles.commentContainer}>
                <h3 className={styles.contentHeader}><label>Comment</label></h3>
                <textarea onChange={(e) => setWorkQualityComment(e.target.value)} value={workQualityComment} />
            </div>
            <div className={styles.contentContainer}>
                <div>
                    <h3 className={styles.contentHeader}>Quality of Work</h3>
                    <p className={styles.content}> Consider the degree to which the employee exhibits
                        <ul>
                            <li>Consider the result of the employee's effort does the employee demostrate the ability to  </li>
                            <ul>
                                <li>Manage several responsibilities simultaneously?</li>
                                <li>Perform work in a productive abd timely manner?</li>
                                <li>Meet work schedule?</li>
                            </ul>
                        </ul>
                    </p>
                </div>
            </div>
            <div className={styles.inputContainer}>
                <Select onChange={(e) => setWorkQualityRatingtwo(e.target.value)} title="Rating" value={workQualityRatingtwo} options={[]}
                />
            </div>
            <div className={styles.commentContainer}>
                <h3 className={styles.contentHeader}><label>Comment</label></h3>
                <textarea onChange={(e) => setWorkQualityCommenttwo(e.target.value)} value={workQualityCommenttwo} />
            </div>
        </div>
        <div className={styles.mtn__btnContaainer2}>
            <div> <button className={`${styles.mtn__btn2} ${styles.mtn__blackOutline2}`} type='button' onClick={prevHandler} >Back</button></div>
            <div> <button className={`${styles.mtn__btn2} ${styles.mtn__black2}`} type='button' onClick={nextHandler} >Next</button></div>
        </div>
    </div>
};

export default KnowlegdeFactor;
