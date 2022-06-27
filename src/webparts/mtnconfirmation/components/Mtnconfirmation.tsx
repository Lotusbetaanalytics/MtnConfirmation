import * as React from "react";
import "./styles.scss";
import { IMtnconfirmationProps } from "./IMtnconfirmationProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { Route, Switch, HashRouter } from "react-router-dom";
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
import { RaterContext } from "./Context/RaterContext";

export default class Mtnconfirmation extends React.Component<
  IMtnconfirmationProps,
  {
    adaptComment: string;
    adaptRating: number;
    setAdaptRating: React.Dispatch<React.SetStateAction<number>>;
    setAdaptComment: React.Dispatch<React.SetStateAction<string>>;
  }
> {
  constructor(props: IMtnconfirmationProps) {
    super(props);
    this.state = {
      adaptComment: "",
      adaptRating: 0,
      setAdaptRating: this.setAdaptRating,
      setAdaptComment: this.setAdaptComment,
    };
  }

  setAdaptRating = (adaptRating: number): void => {
    this.setState({ adaptRating });
  };

  setAdaptComment = (adaptComment: string): void => {
    this.setState({ adaptComment });
  };

  componentDidMount() {}

  public render(): React.ReactElement<IMtnconfirmationProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none");
    jQuery(".SPCanvas-canvas").prop("style", "max-width: none");
    jQuery(".CanvasZone").prop("style", "max-width: none");

    return (
      <>
        <HashRouter>
          <RaterContext.Provider value={{}}>
            <SupervisoryEvaluationContext.Provider
              value={{} as SupervisoryEvaluationContextType}
            >
              <BehavioralContext.Provider
                value={{
                  adaptComment: this.state.adaptComment,
                  adaptRating: this.state.adaptRating,
                  setAdaptRating: this.setAdaptRating,
                  setAdaptComment: this.setAdaptComment,
                }}
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
                  <Route path="/behavioral">
                    <Route path="section2" exact component={Section2} />
                    <Route path="section3" exact component={Section3} />
                  </Route>
                  <Route path="/supervisory">
                    <Route
                      path="section1"
                      exact
                      component={Section1__Supervisory}
                    />
                    <Route
                      path="section2"
                      exact
                      component={Section2__Supervisory}
                    />
                  </Route>
                </Switch>
              </BehavioralContext.Provider>
            </SupervisoryEvaluationContext.Provider>
          </RaterContext.Provider>
        </HashRouter>
      </>
    );
  }
}
