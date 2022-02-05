import * as React from 'react';
import './styles.scss';
import { IMtnconfirmationProps } from './IMtnconfirmationProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Route, Switch, HashRouter } from 'react-router-dom';
import * as jQuery from 'jquery';
import { HomeScreen, BasicInfo, StaffInfo, LocationInfo, ReportInfo } from './screens';

export default class Mtnconfirmation extends React.Component<IMtnconfirmationProps, {}> {
  public render(): React.ReactElement<IMtnconfirmationProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/basicInfo" exact component={BasicInfo} />
            <Route path="/staffInfo" exact component={StaffInfo} />
            <Route path="/locationInfo" exact component={LocationInfo} />
            <Route path="/reportInfo" exact component={ReportInfo} />
          </Switch>
        </HashRouter>
      </>
    );
  }
}
