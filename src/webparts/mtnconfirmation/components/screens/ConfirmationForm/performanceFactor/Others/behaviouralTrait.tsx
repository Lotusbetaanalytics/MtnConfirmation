import * as React from "react";
import { useState } from "react";
import { useHistory,Link,useParam } from "react-router-dom";
import { Header, Select, Helpers,TextArea,Card, Spinner } from "../../../../Containers";
import styles from "../performance.module.scss";
import { sp } from "@pnp/sp";

const BehaviouralTrait = () => {
  const history = useHistory();
  
  
  const [dependabilityRating,setDependabilityRating] = useState(0)
  const [dependabilityComment,setDependabilityComment] = useState("")
  const [coperationRating,setCoperationRating] = useState(0)
  const [ coperationComment,setCoperationComment] = useState("")
  const [initiativeRating,setInitiativeRating] =useState(0)
  const [ initiativeComment,setInitiativeComment] = useState("")
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState({})
  const [msg,setMsg] = useState(false);
  // const {id} = useParam()
  
  React.useEffect(() => {
    setLoading(true);
    sp.web.lists
      .getByTitle("PerformanceFactorEvaluation")
      .items.getById(1)
          .get()
          .then((res) => {
              setData(res[0]);
            setLoading(false);
            console.log(res);
            
          });
         
      },[]);
     
 

  const nextHandler = () => {
      history.push("/behavioral/section2");
  };
  return (
    <>
      <Header title="Behavioural Traits Evaluation" />
      {
        loading? <Spinner/> : null
      }
      <div className={styles.evaluation__section2__container}>
        <div className={styles.evaluation__section}>
          <Card header="Dependability">
            <ul>
              <li>Consider the amount of time spent directing this employee </li>
              <li>
                Does this employee monitor project and exercise follow-through?
              </li>
              <li>Adhere to time frame?</li>
              <li>
                Is the employee punctual for meeting and appointments and
                respond appropriately to instructions and procedures?
              </li>
            </ul>
          </Card>

          <div className={styles.section1__ratings}>
            <Select
              onChange={(e) => setDependabilityRating(e.target.value)}
              title="Rating"
              value={dependabilityRating}
              options={Helpers.rating}
              
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Comment</h2>
            <TextArea
            readOnly={true}
              onChange={(e) =>{
               
              setDependabilityComment(e.target.value)}}
              value={dependabilityComment}
            />
           
          </div>
        </div>
        <div className={styles.evaluation__section}>
          <Card header="Co-Operation">
            <ul>
              <li>
                How well does the employee work/co-operate with co-workers and
                supervisor as a contributing member?
              </li>
              <li>
                Does the employee demonstrate consideration for the others,
                maintain rapport with others and help others willingly?
              </li>
            </ul>
          </Card>
          <div className={styles.section1__ratings}>
            <Select
              onChange={(e) => setCoperationRating(e.target.value)}
              title="Rating"
              value={coperationRating}
              options={Helpers.rating}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Comment</h2>
            <TextArea
            readOnly={true}
              onChange={(e) => {
                
                setCoperationComment(e.target.value)}}
              value={coperationComment}
            />
           
          </div>
        </div>

        <div className={styles.evaluation__section}>
          <Card header="Initiative">
            <ul>
              <li>
                Consider how well the employee seeks and assumes greater
                responsibility,monitor projects independently and follow through
                appropriately
              </li>
            </ul>
          </Card>

          <div className={styles.section1__ratings}>
            <Select
              onChange={(e) => setInitiativeRating(e.target.value)}
              title="Rating"
              value={initiativeRating}
              options={Helpers.rating}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Comment</h2>
            <TextArea
            readOnly={true}
              onChange={(e) => {
                setInitiativeComment(e.target.value)}}
              value={initiativeComment}
            />
            
          </div>
        </div>
        <div className={`${styles.evaluation__section__button} `}>
          <div className="mtn__btnContaainer">
            <div>
              <Link
                to="/behavioral/section1"
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

export default BehaviouralTrait;
