import * as React from "react";
import "./styles.scss";
import { IMtnconfirmationProps } from "./IMtnconfirmationProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { Route, Switch, HashRouter } from "react-router-dom";
import { sp } from "@pnp/sp";
import * as jQuery from "jquery";
import {
  HomeScreen,
  Section2,
  Section3,
  RequestPage,
  Section1__Supervisory,
  Section2__Supervisory,
  PendingRequests,
  ViewRequestDetails,
  Dashboard,
  Confirmation,
  Roles,
  Location,
  Division,
  AdminCompleted,
  AdminPending,
  EditConfirmation,
  AdminViewPending,
  Performance_Section1,
  Performance_Section2,
  Rater_Performance_Section1,
  Rater_Performance_Section2,
  Rater_behavioral_Section1,
  behavioral_Section1,
} from "./screens";
import "./assets/icon.scss";
import {
  performanceEvaluationContext,
  performanceEvaluationContextType,
} from "../components/Context/performanceContext";
import {
  BehavioralContext,
  BehavioralContextType,
} from "./Context/BehavioralContext";
import {
  SupervisoryEvaluationContext,
  SupervisoryEvaluationContextType,
} from "./Context/SupervisoryContext";
import {
  BehavioralContext1,
  BehavioralContext1Type,
} from "./Context/behavioralContext1";
import { RaterContext, RaterContextType } from "./Context/RaterContext";

export default class Mtnconfirmation extends React.Component<
  IMtnconfirmationProps,
  {
    adaptComment: string;
    adaptRating: number;
    setAdaptRating: React.Dispatch<React.SetStateAction<number>>;
    setAdaptComment: React.Dispatch<React.SetStateAction<string>>;
    rater: string;
    raterEmail: string;
    ratingDate: string;
    leadershipRating: number;
    setLeaderShipRating: React.Dispatch<React.SetStateAction<number>>;
    setLeadershipComment: React.Dispatch<React.SetStateAction<string>>;
    leadershipComment: string;
    delegationComment: string;
    delegationRating: number;
    administrationComment: string;
    administrationRating: number;
    setDelegationRating: React.Dispatch<React.SetStateAction<number>>;
    setDelegationComment: React.Dispatch<React.SetStateAction<string>>;
    setAdministrationComment: React.Dispatch<React.SetStateAction<string>>;
    setAdministrationRating: React.Dispatch<React.SetStateAction<number>>;
    planningComment: string;
    planningRating: number;
    setPlanningComment: React.Dispatch<React.SetStateAction<string>>;
    setPlanningRating: React.Dispatch<React.SetStateAction<number>>;
    peopleManagementComment: string;
    peopleManagementRating: number;
    setPeopleManagementComment: React.Dispatch<React.SetStateAction<string>>;
    setPeopleManagementRating: React.Dispatch<React.SetStateAction<number>>;
    supervisoryEvaluationScore: number;
    setSupervisoryEvaluationScore: React.Dispatch<React.SetStateAction<number>>;
    raterFinalComments: string;
    setRaterFinalComments: React.Dispatch<React.SetStateAction<string>>;
    attendanceComment: string;
    setAttendanceComment: React.Dispatch<React.SetStateAction<string>>;
    attendanceRating: number;
    setAttendanceRating: React.Dispatch<React.SetStateAction<number>>;
    punctualityRating: number;
    setPunctualityRating: React.Dispatch<React.SetStateAction<number>>;
    punctualityComment: string;
    setPunctualityComment: React.Dispatch<React.SetStateAction<string>>;
    judgementRating: number;
    setJudgementRating: React.Dispatch<React.SetStateAction<number>>;
    judgementComment: string;
    setJudgementComment: React.Dispatch<React.SetStateAction<string>>;
    behavioralEvaluationScore: number;
    setBehavioralEvaluationScore: React.Dispatch<React.SetStateAction<number>>;
    queryRating: string;
    setQueryRating: React.Dispatch<React.SetStateAction<string>>;
    queryComment: string;
    setQueryComment: React.Dispatch<React.SetStateAction<string>>;
    disciplinaryRating: string;
    setDisciplinaryRating: React.Dispatch<React.SetStateAction<string>>;
    disciplinaryComment: string;
    setDisciplinaryComment: React.Dispatch<React.SetStateAction<string>>;
    knowlegdeRating: number;
    setKnowlegdeRating: React.Dispatch<React.SetStateAction<number>>;
    knowlegdeComment: string;
    setknowlegdeComment: React.Dispatch<React.SetStateAction<string>>;
    workQualityRating: number;
    setWorkQualityRating: React.Dispatch<React.SetStateAction<number>>;
    workQualityComment: string;
    setWorkQualityComment: React.Dispatch<React.SetStateAction<string>>;
    workQualityRatingtwo: number;
    setWorkQualityRatingtwo: React.Dispatch<React.SetStateAction<number>>;
    workQualityCommenttwo: string;
    setWorkQualityCommenttwo: React.Dispatch<React.SetStateAction<string>>;

    workHabitRating: number;
    setWorkHabitRating: React.Dispatch<React.SetStateAction<number>>;
    workHabitComment: string;
    setWorkHabitComment: React.Dispatch<React.SetStateAction<string>>;
    communicationRating: number;
    setCommunicationRating: React.Dispatch<React.SetStateAction<number>>;
    communicationComment: string;
    setCommunicationComment: React.Dispatch<React.SetStateAction<string>>;
    totalPerformanceScore: number;
    setTotalPerformanceScore: React.Dispatch<React.SetStateAction<number>>;

    dependabilityRating: number;
    setDependabilityRating: React.Dispatch<React.SetStateAction<number>>;
    dependabilityComment: string;
    setDependabilityComment: React.Dispatch<React.SetStateAction<string>>;
    coperationRating: number;
    setCoperationRating: React.Dispatch<React.SetStateAction<number>>;
    coperationComment: string;
    setCoperationComment: React.Dispatch<React.SetStateAction<string>>;
    initiativeRating: number;
    setInitiativeRating: React.Dispatch<React.SetStateAction<number>>;
    initiativeComment: string;
    setInitiativeComment: React.Dispatch<React.SetStateAction<string>>;
  }
> {
  constructor(props: IMtnconfirmationProps) {
    super(props);
    this.state = {
      adaptComment: "",
      adaptRating: null,
      leadershipRating: null,
      setAdaptRating: this.setAdaptRating,
      setAdaptComment: this.setAdaptComment,
      rater: "",
      raterEmail: "",
      ratingDate: new Date(Date.now()).toLocaleDateString(),
      setLeaderShipRating: this.setLeaderShipRating,
      leadershipComment: "",
      setLeadershipComment: this.setLeadershipComment,
      setAdministrationComment: this.setAdministrationComment,
      delegationRating: null,
      administrationComment: "",
      setDelegationRating: this.setDelegationRating,
      setDelegationComment: this.setDelegationComment,
      setAdministrationRating: this.setAdministrationRating,
      administrationRating: null,
      delegationComment: "",
      planningComment: "",
      planningRating: null,
      setPlanningComment: this.setPlanningComment,
      setPlanningRating: this.setPlanningRating,
      peopleManagementComment: "",
      peopleManagementRating: null,
      setPeopleManagementComment: this.setPeopleManagementComment,
      setPeopleManagementRating: this.setPeopleManagementRating,
      setSupervisoryEvaluationScore: this.setSupervisoryEvaluationScore,
      supervisoryEvaluationScore: 0,
      raterFinalComments: "",
      setRaterFinalComments: this.setRaterFinalComments,
      attendanceComment: "",
      setAttendanceComment: this.setAttendanceComment,
      attendanceRating: null,
      setAttendanceRating: this.setAttendanceRating,
      punctualityRating: null,
      setPunctualityRating: this.setPunctualityRating,
      punctualityComment: "",
      setPunctualityComment: this.setPunctualityComment,
      judgementRating: null,
      setJudgementRating: this.setJudgementRating,
      judgementComment: "",
      setJudgementComment: this.setJudgementComment,
      behavioralEvaluationScore: 0,
      setBehavioralEvaluationScore: this.setBehavioralEvaluationScore,
      queryRating: "",
      queryComment: "",
      setQueryRating: this.setQueryRating,
      setQueryComment: this.setQueryComment,
      disciplinaryRating: "",
      setDisciplinaryRating: this.setDisciplinaryRating,
      disciplinaryComment: "",
      setDisciplinaryComment: this.setDisciplinaryComment,
      knowlegdeRating: null,
      setKnowlegdeRating: this.setKnowlegdeRating,
      knowlegdeComment: "",
      setknowlegdeComment: this.setknowlegdeComment,
      workQualityRating: null,
      setWorkQualityRating: this.setWorkQualityRating,
      workQualityComment: "",
      setWorkQualityComment: this.setWorkQualityComment,
      workQualityRatingtwo: null,
      setWorkQualityRatingtwo: this.setWorkQualityRatingtwo,
      workQualityCommenttwo: "",
      setWorkQualityCommenttwo: this.setWorkQualityCommenttwo,
      workHabitRating: null,
      setWorkHabitRating: this.setWorkHabitRating,
      workHabitComment: "",
      setWorkHabitComment: this.setWorkHabitComment,
      communicationRating: null,
      setCommunicationRating: this.setCommunicationRating,
      communicationComment: "",
      setCommunicationComment: this.setCommunicationComment,
      totalPerformanceScore: null,
      setTotalPerformanceScore: this.setTotalPerformanceScore,
      dependabilityRating: null,
      setDependabilityRating: this.setDependabilityRating,
      dependabilityComment: "",
      setDependabilityComment: this.setDependabilityComment,
      coperationRating: null,
      setCoperationRating: this.setCoperationRating,
      coperationComment: "",
      setCoperationComment: this.setCoperationComment,
      initiativeRating: null,
      setInitiativeRating: this.setIntiativeRating,
      initiativeComment: "",
      setInitiativeComment: this.setInitiativeComment,
    };
  }

  setAdaptRating = (adaptRating: number): void => {
    this.setState({ adaptRating });
  };

  setAdaptComment = (adaptComment: string): void => {
    this.setState({ adaptComment });
  };

  setLeaderShipRating = (leadershipRating: number): void => {
    this.setState({ leadershipRating });
  };

  setLeadershipComment = (leadershipComment: string): void => {
    this.setState({ leadershipComment });
  };

  setDelegationComment = (delegationComment: string): void => {
    this.setState({ delegationComment });
  };
  setDelegationRating = (delegationRating: number): void => {
    this.setState({ delegationRating });
  };

  setAdministrationComment = (administrationComment: string): void => {
    this.setState({ administrationComment });
  };

  setAdministrationRating = (administrationRating: number): void => {
    this.setState({ administrationRating });
  };

  setPeopleManagementRating = (peopleManagementRating: number): void => {
    this.setState({ peopleManagementRating });
  };
  setPeopleManagementComment = (peopleManagementComment: string): void => {
    this.setState({ peopleManagementComment });
  };

  setPlanningComment = (planningComment: string): void => {
    this.setState({ planningComment });
  };

  setPlanningRating = (planningRating: number): void => {
    this.setState({ planningRating });
  };
  setSupervisoryEvaluationScore = (
    supervisoryEvaluationScore: number
  ): void => {
    this.setState({ supervisoryEvaluationScore });
  };

  setRaterFinalComments = (raterFinalComments: string): void => {
    this.setState({ raterFinalComments });
  };

  setAttendanceComment = (attendanceComment: string): void => {
    this.setState({ attendanceComment });
  };

  setAttendanceRating = (attendanceRating: number): void => {
    this.setState({ attendanceRating });
  };

  setPunctualityComment = (punctualityComment: string): void => {
    this.setState({ punctualityComment });
  };

  setPunctualityRating = (punctualityRating: number): void => {
    this.setState({ punctualityRating });
  };

  setJudgementComment = (judgementComment: string): void => {
    this.setState({ judgementComment });
  };

  setJudgementRating = (judgementRating: number): void => {
    this.setState({ judgementRating });
  };

  setBehavioralEvaluationScore = (behavioralEvaluationScore: number): void => {
    this.setState({ behavioralEvaluationScore });
  };

  setQueryRating = (queryRating: string): void => {
    this.setState({ queryRating });
  };

  setQueryComment = (queryComment: string): void => {
    this.setState({ queryComment });
  };

  setDisciplinaryRating = (disciplinaryRating: string): void => {
    this.setState({ disciplinaryRating });
  };

  setDisciplinaryComment = (disciplinaryComment: string): void => {
    this.setState({ disciplinaryComment });
  };

  setDependabilityRating = (dependabilityRating: number): void => {
    this.setState({ dependabilityRating });
  };

  setDependabilityComment = (dependabilityComment: string): void => {
    this.setState({ dependabilityComment });
  };

  setCoperationRating = (coperationRating: number): void => {
    this.setState({ coperationRating });
  };

  setIntiativeRating = (initiativeRating: number): void => {
    this.setState({ initiativeRating });
  };

  setInitiativeComment = (initiativeComment: string): void => {
    this.setState({ initiativeComment });
  };

  setCoperationComment = (coperationComment: string): void => {
    this.setState({ coperationComment });
  };

  setKnowlegdeRating = (knowlegdeRating: number): void => {
    this.setState({ knowlegdeRating });
  };

  setknowlegdeComment = (knowlegdeComment: string): void => {
    this.setState({ knowlegdeComment });
  };

  setWorkQualityRating = (workQualityRating: number): void => {
    this.setState({ workQualityRating });
  };

  setWorkQualityComment = (workQualityComment: string): void => {
    this.setState({ workQualityComment });
  };

  setWorkQualityRatingtwo = (workQualityRatingtwo: number): void => {
    this.setState({ workQualityRatingtwo });
  };

  setWorkQualityCommenttwo = (workQualityCommenttwo: string): void => {
    this.setState({ workQualityCommenttwo });
  };

  setWorkHabitRating = (workHabitRating: number): void => {
    this.setState({ workHabitRating });
  };

  setWorkHabitComment = (workHabitComment: string): void => {
    this.setState({ workHabitComment });
  };

  setCommunicationRating = (communicationRating: number): void => {
    this.setState({ communicationRating });
  };
  setCommunicationComment = (communicationComment: string): void => {
    this.setState({ communicationComment });
  };
  setTotalPerformanceScore = (totalPerformanceScore: number): void => {
    this.setState({ totalPerformanceScore });
  };

  componentDidMount() {
    sp.profiles.myProperties.get().then((res) => {
      this.setState({
        rater: res?.DisplayName,
        raterEmail: res?.Email,
      });
    });
  }

  public render(): React.ReactElement<IMtnconfirmationProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none");
    jQuery(".SPCanvas-canvas").prop("style", "max-width: none");
    jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <>
        <HashRouter>
          <RaterContext.Provider
            value={
              {
                rater: this.state.rater,
                raterEmail: this.state.raterEmail,
                date: this.state.ratingDate,
                setRaterFinalComments: this.setRaterFinalComments,
                raterFinalComments: this.state.raterFinalComments,
              } as RaterContextType
            }
          >
            <SupervisoryEvaluationContext.Provider
              value={
                {
                  leadershipRating: this.state.leadershipRating,
                  setLeadershipRating: this.state.setLeaderShipRating,
                  leadershipComment: this.state.leadershipComment,
                  setLeadershipComment: this.state.setLeadershipComment,
                  delegationRating: this.state.delegationRating,
                  setDelegationRating: this.state.setDelegationRating,
                  delegationComment: this.state.delegationComment,
                  setDelegationComment: this.state.setDelegationComment,
                  administrationRating: this.state.administrationRating,
                  setAdministrationRating: this.state.setAdministrationRating,
                  administrationComment: this.state.administrationComment,
                  setAdministrationComment: this.state.setAdministrationComment,
                  setSupervisoryEvaluationScore:
                    this.state.setSupervisoryEvaluationScore,
                  supervisoryEvaluationScore:
                    this.state.supervisoryEvaluationScore,
                  planningRating: this.state.planningRating,
                  setPlanningRating: this.state.setPlanningRating,
                  planningComment: this.state.planningComment,
                  setPlanningComment: this.state.setPlanningComment,
                  peopleManagementRating: this.state.peopleManagementRating,
                  setPeopleManagementRating:
                    this.state.setPeopleManagementRating,
                  peopleManagementComment: this.state.peopleManagementComment,
                  setPeopleManagementComment:
                    this.state.setPeopleManagementComment,
                } as SupervisoryEvaluationContextType
              }
            >
              <BehavioralContext.Provider
                value={
                  {
                    adaptComment: this.state.adaptComment,
                    adaptRating: this.state.adaptRating,
                    setAdaptRating: this.setAdaptRating,
                    setAdaptComment: this.setAdaptComment,
                    attendanceComment: this.state.attendanceComment,
                    attendanceRating: this.state.attendanceRating,
                    setAttendanceRating: this.setAttendanceRating,
                    setAttendanceComment: this.setAttendanceComment,
                    behavioralEvaluationScore:
                      this.state.behavioralEvaluationScore,
                    setBehavioralEvaluationScore:
                      this.setBehavioralEvaluationScore,
                    judgementComment: this.state.judgementComment,
                    judgementRating: this.state.judgementRating,
                    setJudgementRating: this.setJudgementRating,
                    setJudgementComment: this.setJudgementComment,
                    punctualityComment: this.state.punctualityComment,
                    punctualityRating: this.state.punctualityRating,
                    setPunctualityRating: this.setPunctualityRating,
                    setPunctualityComment: this.setPunctualityComment,
                    queryComment: this.state.queryComment,
                    queryRating: this.state.queryRating,
                    setQueryRating: this.setQueryRating,
                    setQueryComment: this.setQueryComment,
                    disciplinaryComment: this.state.disciplinaryComment,
                    disciplinaryRating: this.state.disciplinaryRating,
                    setDisciplinaryRating: this.setDisciplinaryRating,
                    setDisciplinaryComment: this.setDisciplinaryComment,
                  } as BehavioralContextType
                }
              >
                <performanceEvaluationContext.Provider
                  value={
                    {
                      knowlegdeRating: this.state.knowlegdeRating,
                      setKnowlegdeRating: this.state.setKnowlegdeRating,
                      knowlegdeComment: this.state.knowlegdeComment,
                      setknowlegdeComment: this.state.setknowlegdeComment,
                      workQualityRating: this.state.workQualityRating,
                      setWorkQualityRating: this.state.setWorkQualityRating,
                      workQualityComment: this.state.workQualityComment,
                      setWorkQualityComment: this.state.setWorkQualityComment,
                      workQualityRatingtwo: this.state.workQualityRatingtwo,
                      setWorkQualityRatingtwo:
                        this.state.setWorkQualityRatingtwo,
                      workQualityCommenttwo: this.state.workQualityCommenttwo,
                      setWorkQualityCommenttwo:
                        this.state.setWorkQualityCommenttwo,
                      workHabitRating: this.state.workHabitRating,
                      setWorkHabitRating: this.state.setWorkHabitRating,
                      workHabitComment: this.state.workHabitComment,
                      setWorkHabitComment: this.state.setWorkHabitComment,
                      communicationRating: this.state.communicationRating,
                      setCommunicationRating: this.state.setCommunicationRating,
                      communicationComment: this.state.communicationComment,
                      setCommunicationComment:
                        this.state.setCommunicationComment,
                      totalPerformanceScore: this.state.totalPerformanceScore,
                      setTotalPerformanceScore:
                        this.state.setTotalPerformanceScore,
                    } as performanceEvaluationContextType
                  }
                >
                  <BehavioralContext1.Provider
                    value={
                      {
                        dependabilityRating: this.state.dependabilityRating,
                        setDependabilityRating:
                          this.state.setDependabilityRating,
                        dependabilityComment: this.state.dependabilityComment,
                        setDependabilityComment:
                          this.state.setDependabilityComment,
                        coperationRating: this.state.coperationRating,
                        setCoperationRating: this.state.setCoperationRating,
                        coperationComment: this.state.coperationComment,
                        setCoperationComment: this.state.setCoperationComment,
                        initiativeRating: this.state.initiativeRating,
                        setInitiativeRating: this.state.setInitiativeRating,
                        workQualityCommenttwo: this.state.workQualityCommenttwo,
                        initiativeComment: this.state.initiativeComment,
                        setInitiativeComment: this.state.setInitiativeComment,
                      } as BehavioralContext1Type
                    }
                  >
                    <Switch>
                      <Route path="/" exact component={HomeScreen} />
                      <Route
                        path="/admin/dashboard"
                        exact
                        component={Dashboard}
                      />
                      <Route
                        path="/admin/confirmation"
                        exact
                        component={Confirmation}
                      />
                      <Route
                        path="/admin/confirmation/edit/:id"
                        exact
                        component={EditConfirmation}
                      />
                      <Route path="/admin/config" exact component={Roles} />
                      <Route
                        path="/admin/location"
                        exact
                        component={Location}
                      />
                      <Route
                        path="/admin/division"
                        exact
                        component={Division}
                      />
                      <Route
                        path="/admin/pending"
                        exact
                        component={AdminPending}
                      />
                      <Route
                        path="/admin/pending/:id"
                        exact
                        component={AdminViewPending}
                      />
                      <Route
                        path="/admin/completed"
                        exact
                        component={AdminCompleted}
                      />
                      <Route
                        path="/requestpage"
                        exact
                        component={RequestPage}
                      />
                      <Route
                        path="/pendingrequests"
                        exact
                        component={PendingRequests}
                      />
                      <Route
                        path="/viewrequest/details/:id"
                        exact
                        component={ViewRequestDetails}
                      />
                      <Route
                        path="/rater/behavioral/section1"
                        exact
                        component={Rater_behavioral_Section1}
                      />
                      <Route
                        path="/behavioral/section1"
                        exact
                        component={behavioral_Section1}
                      />
                      <Route
                        path="/behavioral/section2"
                        exact
                        component={Section2}
                      />
                      <Route
                        path="/behavioral/section3"
                        exact
                        component={Section3}
                      />
                      <Route
                        path="/supervisory/section1"
                        exact
                        component={Section1__Supervisory}
                      />
                      <Route
                        path="/supervisory/section2"
                        exact
                        component={Section2__Supervisory}
                      />
                      <Route
                        path="/rater/performance/section1"
                        exact
                        component={Rater_Performance_Section1}
                      />
                      <Route
                        path="/rater/performance/section2"
                        exact
                        component={Rater_Performance_Section2}
                      />
                      <Route
                        path="/performance/section1"
                        exact
                        component={Performance_Section1}
                      />
                      <Route
                        path="/performance/section2"
                        exact
                        component={Performance_Section2}
                      />
                    </Switch>
                  </BehavioralContext1.Provider>
                </performanceEvaluationContext.Provider>
              </BehavioralContext.Provider>
            </SupervisoryEvaluationContext.Provider>
          </RaterContext.Provider>
        </HashRouter>
      </>
    );
  }
}
