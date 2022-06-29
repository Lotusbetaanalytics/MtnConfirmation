import * as React from "react";
import { useState } from "react";
import { useHistory,Link } from "react-router-dom";
import { Header, Select,Helpers, Card, TextArea } from "../../../Containers";
import { performanceEvaluationContext } from "../../../Context/performanceContext";
import styles from "./performance.module.scss";

const KnowlegdeFactor = () => {
  const history = useHistory();
  // const [knowlegdeRating, setKnowlegdeRating] = useState("");
  // const [knowlegdeComment, setknowlegdeComment] = useState("");
  // const [workQualityRating, setWorkQualityRating] = useState("");
  // const [workQualityComment, setWorkQualityComment] = useState("");
  // const [workQualityRatingtwo, setWorkQualityRatingtwo] = useState("");
  // const [workQualityCommenttwo, setWorkQualityCommenttwo] = useState("");
  const [msg,setMsg] = useState(false)

  const {knowlegdeRating,
    setKnowlegdeRating,
    knowlegdeComment,
    setknowlegdeComment,
    workQualityRating,
    setWorkQualityRating,
    workQualityComment,
    setWorkQualityComment,
    workQualityRatingtwo,
    setWorkQualityRatingtwo,
    workQualityCommenttwo,
    setWorkQualityCommenttwo
  } = React.useContext(performanceEvaluationContext);

  const prevHandler = () => {
    history.push("/");
  };

  const nextHandler = () => {
    if (knowlegdeComment.length < 60){
      setMsg(true)
    } else {
      history.push("/performance/section2");
    }
    
  };

  

  return (
    <>
      <Header title="Performance Factor" />

      <div className={styles.evaluation__section2__container}>
        <div className={styles.evaluation__section}>
        
            <Card header= "knowlegde, skill and ability">
             
            <ul>
               <li>
              Consider the degree to which the employee exhibits the required
              level of job knowledge skills to perform the job and the use of
              established techniques, materials and equipment as they relate to
              performance.
                </li>
            </ul>
            </Card>
        <div className={styles.section1__ratings}>
          <Select
             value={knowlegdeRating}
             onChange={(e: any) => {
              //  localStorage.setItem("knowlegdeRating", e.target.value);
               setKnowlegdeRating(e.target.value);
             }}
           title="Ratings"
              options={Helpers.rating}
        />
        </div>

        <div className={styles.section1__comments}>
          <h2 >
            Rater's comment
          </h2>
          <TextArea
          value={knowlegdeComment}
            onChange={(e:any) => {
            // localStorage.setItem("knowlegdeComment",e.target.value);
            setknowlegdeComment(e.target.value)
           }}
          />
           {msg ? (
              <span>Your comment should be at least 60 characters </span>
            ) : null}
        </div>
        </div>
        <div className={styles.evaluation__section}>
            <Card header="Quality of work">
            
              <ul>
                <li>Does the employee assignments meet quality standards?</li>
                <li>
                  consider accuracy neatness, thoroughness and adherence to
                  standard and safety.
                </li>
              </ul>
          </Card>
        <div className={styles.section1__ratings}>
          <Select
          title="Rating"
            onChange={(e:any) => {
                // localStorage.setItem("workQualityRating",e.target.value)
                setWorkQualityRating(e.target.value)}}
            value={workQualityRating}
            options={Helpers.rating}
          />
        </div>
        <div className={styles.section1__comments}>
          <h2>
            Rater's comment
          </h2>
          <TextArea
           value={workQualityComment}
            onChange={(e:any) => {
                localStorage.setItem("workQualityComment",e.target.value)
                // e.target.value.length < 60
                // ? setMsg(true) :
                setWorkQualityComment(e.target.value)}
            }

          />
          {msg ? (
              <span>Your comment should be at least 60 characters </span>
            ) : null}
        </div>
          </div>
        <div className={styles.evaluation__section}>
          <div>
            <Card header="Quality of Work">
            <ul>
            <li>
            Consider the degree to which the employee exhibits
            </li>
                <li>
                  Consider the result of the employee's effort does the employee
                  demostrate the ability to</li>
                  <li>Manage several responsibilities simultaneously?</li>
                  <li>Perform work in a productive and timely manner?</li>
                  <li>Meet work schedule?</li>
            </ul>
          </Card>
        </div>
        <div className={styles.section1__ratings}>
          <Select
            value={workQualityRatingtwo}
            onChange={(e:any) =>{
                // localStorage.setItem("workQualityRatingTwo",e.target.value)
                setWorkQualityRatingtwo(e.target.value)}
            } 
            title="Rating"
            options={Helpers.rating}
          />

        </div>
        <div className={styles.section1__comments}>
          <h2>
          Rater's comment</h2>
          <TextArea
          value={workQualityCommenttwo}
            onChange={(e:any) => {
                // localStorage.setItem("workQualityTwo",e.target.value)
                // e.target.value.length < 60
                //   ? setMsg(true) :
                setWorkQualityCommenttwo(e.target.value)}
            } 
          />
          {msg ? (
              <span>Your comment should be at least 60 characters </span>
            ) : null}
        </div>
      </div>
      <div className={styles.evaluation__section__button}>
          <div className="mtn__btnContaainer">
            <div>
              <Link
                to="/"
                className="mtn__btn mtn__blackOutline"
                type="button"
              >
                Previous
              </Link>
            </div>
            <div>
              <button
                onClick={nextHandler}
                className="mtn__btn mtn__black"
                type="button"
              >
                Next
              </button>
            </div>
          </div>
      </div>
      </div>
    </>
  );
};

export default KnowlegdeFactor;
