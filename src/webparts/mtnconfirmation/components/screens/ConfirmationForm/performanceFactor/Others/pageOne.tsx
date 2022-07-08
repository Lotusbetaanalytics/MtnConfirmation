import * as React from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
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
  const [workQuantityRating, setworkQuantityRating] = useState("");
  const [workQuantityComment, setworkQuantityComment] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { id } = React.useContext(EmployeeContext);

  // const {id} = useParam()

  React.useEffect(() => {
    setLoading(true);
    sp.web.lists
      .getByTitle("PerformanceFactorEvaluation")
      .items.filter(`employeeID eq '${id}'`)
      .get()
      .then((res) => {
        console.log(res);
        setLoading(false);
        if (res.length > 0) {
          setKnowlegdeRating(res[0].KnowlegdeRating);
          setknowlegdeComment(res[0].KnowlegdeComment);
          setWorkQualityRating(res[0].workQualityRating);
          setWorkQualityComment(res[0].workQualityComment);
          setworkQuantityRating(res[0].workQualityRatingtwo);
          setworkQuantityComment(res[0].workQualityCommentTwo);
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
              readOnly={true}
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
              readOnly={true}
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
            <Card header="Quantity of Work">
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
              value={workQuantityRating}
              onChange={""}
              title="Rating"
              options={Helpers.rating}
              readOnly={true}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Rater's comment</h2>
            <TextArea
              readOnly={true}
              value={workQuantityComment}
              onChange={""}
              
            />
          </div>
        </div>
        <div className={styles.evaluation__section__button}>
          <div className="mtn__btnContaainer">
            <div>
              <Link
                to="/pendingrequests"
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
