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
  HrAdminstrationPendingPage,
} from "./screens";
import "./assets/icon.scss";
import LineManagerPendingPage from "./screens/ConfirmationForm/PendingRequests/LineManagerPendingPage";
import HrbpPendingPage from "./screens/ConfirmationForm/PendingRequests/HrbpPendingPage";
import SeniorManagerESPendingPage from "./screens/ConfirmationForm/PendingRequests/SeniorManagerESPendingPage";
import GmHrOperationsPendingPage from "./screens/ConfirmationForm/PendingRequests/GmHrOperationsPendingPage";

export default class Mtnconfirmation extends React.Component<
  IMtnconfirmationProps,
  {}
> {
  public render(): React.ReactElement<IMtnconfirmationProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none");
    jQuery(".SPCanvas-canvas").prop("style", "max-width: none");
    jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/confirmation" exact component={Confirmation} />
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
            <Route path="/admin/completed" exact component={AdminCompleted} />
            <Route path="/requestpage" exact component={RequestPage} />
            <Route path="/pendingrequests" exact component={PendingRequests} />
            <Route
              path="/pending/requests/linemanager"
              exact
              component={LineManagerPendingPage}
            />
            <Route
              path="/pending/requests/hrbp"
              exact
              component={HrbpPendingPage}
            />
            <Route
              path="/pending/requests/hradministrator"
              exact
              component={HrAdminstrationPendingPage}
            />
            <Route
              path="/pending/requests/seniormanageremployeeservices"
              exact
              component={SeniorManagerESPendingPage}
            />
            <Route
              path="/pending/requests/gmhroperations"
              exact
              component={GmHrOperationsPendingPage}
            />
            <Route
              path="/viewrequest/details/:id"
              exact
              component={ViewRequestDetails}
            />
            <Route path="/behavioral/section2" exact component={Section2} />
            <Route path="/behavioral/section3" exact component={Section3} />
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
        </HashRouter>
      </>
    );
  }
}
