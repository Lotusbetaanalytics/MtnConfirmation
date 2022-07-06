import * as React from "react";
import { useState } from "react";
import { useHistory, Link, useParam } from "react-router-dom";
import {
  Header,
  Select,
  Helpers,
  Card,
  TextArea,
  Spinner,
} from "../../../../Containers";
import styles from "../performance.module.scss";
import { sp } from "@pnp/sp";
import { EmployeeContext } from "../../../../Context/EmployeeContext";

const KnowlegdeFactor = () => {
  const history = useHistory();
  const [knowlegdeRating, setKnowlegdeRating] = useState("");
  const [knowlegdeComment, setknowlegdeComment] = useState("");
  const [workQualityRating, setWorkQualityRating] = useState("");
  const [workQualityComment, setWorkQualityComment] = useState("");
  const [workQualityRatingtwo, setWorkQualityRatingtwo] = useState("");
  const [workQualityCommenttwo, setWorkQualityCommenttwo] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const { id } = React.useContext(EmployeeContext);

  // const {id} = useParam()

  React.useEffect(() => {
    setLoading(true);
    sp.web.lists
      .getByTitle("PerformanceFactorEvaluation")
      .items.filter(`employeeID eq '${id}'`)
      .get()
      .then((res) => {
        // setData(res);
        console.log(res);
        setLoading(false);
        if (res.length > 0) {
          setKnowlegdeRating(res[0].KnowlegdeRating);
          setknowlegdeComment(res[0].KnowlegdeComment);
          setWorkQualityRating(res[0].workQualityRating);
          setWorkQualityComment(res[0].workQualityComment);
          setWorkQualityRatingtwo(res[0].workQualityratingTwo);
          setWorkQualityCommenttwo(res[0].workQualityCommentTwo);
        }
      });
  }, []);

  const prevHandler = () => {
    history.push("/pendingrequests");
  };

  const nextHandler = () => {
    history.push("/performance/section2");
  };

  return (
    <>
      <Header title="Performance Factor" />
      {loading && <Spinner />}
      <div className={styles.evaluation__section2__container}>
        <div className={styles.evaluation__section}>
          <Card header="knowlegde, skill and ability">
            <ul>
              <li>
                Consider the degree to which the employee exhibits the required
                level of job knowledge skills to perform the job and the use of
                established techniques, materials and equipment as they relate
                to performance.
              </li>
            </ul>
          </Card>
          <div className={styles.section1__ratings}>
            <Select
              value={knowlegdeRating}
              onChange={""}
              title="Ratings"
              options={Helpers.rating}
            />
          </div>

          <div className={styles.section1__comments}>
            <h2>Rater's comment</h2>
            <TextArea readOnly={true} value={knowlegdeComment} onChange={""} />
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
              onChange={""}
              value={workQualityRating}
              options={Helpers.rating}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Rater's comment</h2>
            <TextArea
              readOnly={true}
              value={workQualityComment}
              onChange={""}
            />
          </div>
        </div>
        <div className={styles.evaluation__section}>
          <div>
            <Card header="Quality of Work">
              <ul>
                <li>Consider the degree to which the employee exhibits</li>
                <li>
                  Consider the result of the employee's effort does the employee
                  demostrate the ability to
                </li>
                <li>Manage several responsibilities simultaneously?</li>
                <li>Perform work in a productive and timely manner?</li>
                <li>Meet work schedule?</li>
              </ul>
            </Card>
          </div>
          <div className={styles.section1__ratings}>
            <Select
              value={workQualityRatingtwo}
              onChange={""}
              title="Rating"
              options={Helpers.rating}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Rater's comment</h2>
            <TextArea
              readOnly={true}
              value={workQualityCommenttwo}
              onChange={""}
            />
          </div>
        </div>
        <div className={styles.evaluation__section__button}>
          <div className="mtn__btnContaainer">
            <div>
              <Link to="/" className="mtn__btn mtn__blackOutline" type="button">
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
