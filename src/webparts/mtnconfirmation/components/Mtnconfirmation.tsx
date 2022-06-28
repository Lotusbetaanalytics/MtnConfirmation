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
} from "./screens";
import "./assets/icon.scss";
import {
  BehavioralContext,
  BehavioralContextType,
} from "./Context/BehavioralContext";
import {
  SupervisoryEvaluationContext,
  SupervisoryEvaluationContextType,
} from "./Context/SupervisoryContext";
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
                  } as BehavioralContextType
                }
              >
                <Switch>
                  <Route path="/" exact component={HomeScreen} />
                  <Route path="/admin/dashboard" exact component={Dashboard} />
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
                  <Route path="/admin/location" exact component={Location} />
                  <Route path="/admin/division" exact component={Division} />
                  <Route path="/admin/pending" exact component={AdminPending} />
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
                  <Route path="/requestpage" exact component={RequestPage} />
                  <Route
                    path="/pendingrequests"
                    exact
                    component={PendingRequests}
                  />
                  <Route
                    path="/viewRequestDetails"
                    exact
                    component={ViewRequestDetails}
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
                </Switch>
              </BehavioralContext.Provider>
            </SupervisoryEvaluationContext.Provider>
          </RaterContext.Provider>
        </HashRouter>
      </>
    );
  }
}
