import * as React from 'react';
import './styles.scss';
import { sp } from "@pnp/sp";
import { IMtnconfirmationProps } from './IMtnconfirmationProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Route, Switch, HashRouter } from 'react-router-dom';
import * as jQuery from 'jquery';
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
  Hr_performance_Section2,
} from './screens';
import {
  performanceEvaluationContext,
  performanceEvaluationContextType
} from "../components/Context/performanceContext";
import { RaterContext, RaterContextType } from "./Context/RaterContext";
import { BehavioralContext1,BehavioralContext1Type } from './Context/behavioralContext1';
import './assets/icon.scss';

import { number } from 'echarts';

  export default class Mtnconfirmation extends React.Component<
  IMtnconfirmationProps,
  {
    knowlegdeRating: number;
    setKnowlegdeRating: React.Dispatch<React.SetStateAction<number>>;
    knowlegdeComment: string;
    setknowlegdeComment: React.Dispatch<React.SetStateAction<string>>;
    workQualityRating: number;
    setWorkQualityRating: React.Dispatch<React.SetStateAction<number>>;
    workQualityComment: string;
    setWorkQualityComment: React.Dispatch<React.SetStateAction<string>>;
    workQuantityRating: number;
    setworkQuantityRating: React.Dispatch<React.SetStateAction<number>>;
    workQuantityComment: string;
    setworkQuantityComment: React.Dispatch<React.SetStateAction<string>>;
  
    rater: string;
    raterEmail: string;
    ratingDate: string;

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
      knowlegdeRating: null,
    setKnowlegdeRating: this.setKnowlegdeRating,
    knowlegdeComment: "",
    setknowlegdeComment: this.setknowlegdeComment,
    workQualityRating: null,
    setWorkQualityRating: this.setWorkQualityRating,
    workQualityComment: "",
    setWorkQualityComment: this.setWorkQualityComment,
    workQuantityRating: null,
    setworkQuantityRating: this.setworkQuantityRating,
    workQuantityComment: "",
    setworkQuantityComment: this.setworkQuantityComment,

    rater: "",
    raterEmail: "",
    ratingDate: new Date(Date.now()).toLocaleDateString(),

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

  setworkQuantityRating = (workQuantityRating: number): void => {
    this.setState({ workQuantityRating });
  };

  setworkQuantityComment = (workQuantityComment: string): void => {
    this.setState({ workQuantityComment });
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
  setCommunicationComment= (communicationComment: string): void => {
    this.setState({ communicationComment });
  };
  setTotalPerformanceScore = (
    totalPerformanceScore: number
  ): void => {
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
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <>
        <HashRouter>
        <RaterContext.Provider
            value={
              {
                rater: this.state.rater,
                raterEmail: this.state.raterEmail,
                date: this.state.ratingDate,
              } as RaterContextType
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
                  workQuantityRating: this.state.workQuantityRating,
                  setworkQuantityRating: this.state.setworkQuantityRating,
                  workQuantityComment: this.state.workQuantityComment,
                  setworkQuantityComment: this.state.setworkQuantityComment,
                  workHabitRating:this.state.workHabitRating,
                  setWorkHabitRating:
                    this.state.setWorkHabitRating,
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
                  setDependabilityRating: this.state.setDependabilityRating,
                  dependabilityComment: this.state.dependabilityComment,
                  setDependabilityComment: this.state.setDependabilityComment,
                  coperationRating: this.state.coperationRating,
                  setCoperationRating: this.state.setCoperationRating,
                  coperationComment: this.state.coperationComment,
                  setCoperationComment: this.state.setCoperationComment,
                  initiativeRating: this.state.initiativeRating,
                  setInitiativeRating: this.state.setInitiativeRating,
                  workQuantityComment: this.state.workQuantityComment,
                  initiativeComment: this.state.initiativeComment,
                  setInitiativeComment:this.state.setInitiativeComment,
                  
                } as BehavioralContext1Type
              }
            >
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/confirmation" exact component={Confirmation} />
            <Route path="/admin/confirmation/edit/:id" exact component={EditConfirmation} />
            <Route path="/admin/config" exact component={Roles} />
            <Route path="/admin/location" exact component={Location} />
            <Route path="/admin/division" exact component={Division} />
            <Route path="/admin/pending" exact component={AdminPending} />
            <Route path="/admin/pending/:id" exact component={AdminViewPending} />
            <Route path="/admin/completed" exact component={AdminCompleted} />
            <Route path="/requestpage" exact component={RequestPage} />
            <Route path="/pendingrequests" exact component={PendingRequests} />
            <Route path="/viewRequestDetails" exact component={ViewRequestDetails} />
            <Route path="/rater/behavioral/section1" exact component={Rater_behavioral_Section1} />
            <Route path="/behavioral/section1" exact component={behavioral_Section1} />
            <Route path="/behavioral/section2" exact component={Section2} />
            <Route path="/behavioral/section3" exact component={Section3} />
            <Route path="/supervisory/section1" exact component={Section1__Supervisory} />
            <Route path="/supervisory/section2" exact component={Section2__Supervisory} />
            <Route path="/rater/performance/section1" exact component={Rater_Performance_Section1} />
            <Route path="/rater/performance/section2" exact component={Rater_Performance_Section2} />
            <Route path="/performance/section1" exact component={Performance_Section1} />
            <Route path="/performance/section2" exact component={Performance_Section2} />
            <Route path="/hr/performance/section2" exact component={Hr_performance_Section2} />
          </Switch>
          </BehavioralContext1.Provider>
          </performanceEvaluationContext.Provider>
          
          </RaterContext.Provider>
         
        </HashRouter>
      </>
    );
  }
}
