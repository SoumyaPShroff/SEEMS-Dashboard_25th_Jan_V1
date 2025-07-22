import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { useLocation } from 'react-router-dom';

import Divider from '@mui/material/Divider';
import Campaigns from './shared/Campaigns';
import DoughnutChart from './shared/Doughnut';
import RowCards from './shared/RowCards';
import StatCards from './shared/StatCards';
import TitleStatCards from './shared/TitleCard';
import StatCards2 from './shared/StatCards2';
import TopSellingTable from './shared/TopSellingTable';
import UpgradeCard from './shared/UpgradeCard';

import ProjectAutocompleteDropdown from '../helperComponents/SearchableDropdown';
import CardsBlueTheme from '../helperComponents/cardBlueTheme';
import TeamBirthDays from '../helperComponents/BirthDay';

//New components
import NewHeaderCards from '../helperComponents/newHeaderCard';
import SimpleCardNew from '../helperComponents/SampleCardNew';
import PassiveProjectComponent from '../helperComponents/PassiveProjects';
import AppriciationByMonthComponent from '../helperComponents/AppreaciationByMonth';
import ComplaintByMonthComponent from '../helperComponents/JobComplaintByMonth';
import ProjectListComponent from '../helperComponents/ProjectList';
import UserCriticalDefects from '../helperComponents/UserCriticalDefects';
import UserCriticDefCurMonth from '../helperComponents/UserCriticDefCurMonth';
import MonthTeamEfficiencyComponent from '../helperComponents/MonthTeamEfficiency';
import YearEfficiencyComponent from '../helperComponents/YearTeamEfficiency';
import {
  getDashbactiveprojects,
  getProjectdata,
  getJobsBackupPending,
  getJobsBackupToApprove,
  getCountOfPreclosedjobs,
  getNPIJobs,
  getECOJobs,
} from '../../redux/actions/PassiveProjects/passiveProjectsActions';
import {
  getTeamBirthdays,
  getUserCriticalDef,
  getMgrJobApprecbyMonth,
  getMgrJobComplaintbyMonth,
  getMyTeamLeaveApprvl,
  getCompoffAppr,
  getUserCriticalDefUserMonth,
  getManagerList,
  getCurYearTeamEfficiency,
  getCurMonthTeamEfficiency,
} from '../../redux/actions/RightPane/rightPaneActions';


const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));


const Analytics = (props) => {
  const {
    projectDetails,
    getProjectdata,
    isProjectLoading,
    getJobsBackupPending,
    getJobsBackupToApprove,
    getCountOfPreclosedjobs,
    getNPIJobs,
    getECOJobs,
    TeamBirthdaysList,
    //passive project data
    JobsBackupPendingData,
    JobsBackupToApproveData,
    CountOfPreclosedjobsData,
    NPIJobsData,
    ECOJobsData,
    getUserCriticalDef,
    getMgrJobApprecbyMonth,
    getMgrJobComplaintbyMonth,
    getMyTeamLeaveApprvl,
    getCompoffAppr,
    //Rightpane data
    UserCriticalDefData,
    getTeamBirthdays,
    MgrJobApprecbyMonthData,
    JobComplaintbyMonthData,
    MyTeamLeaveApprvlList,
    CompoffApprList,
    ComplainChartLoading,
    AppriChartLoading,
    UserCriticalDefCurMonthData,
    getUserCriticalDefUserMonth,
    getManagerList,
    ManagerList,
    getCurYearTeamEfficiency,
    getCurMonthTeamEfficiency,
    TeamMonthEfficiencyList,
    TeamYrEfficiencyList,

    //loading states
    isMgrJCMLoading,
    isMgrJAppLoading,
    isCriDefLoading,
    isCriDefYDLoading,
    TeamMonthEfficiencyLoading,
    TeamYrEfficiencyLoading,
  } = props;
  const { palette } = useTheme();
  
  useEffect(() => {
    getManagerList();
  }, []);

  const getAllMethods = (id) => {
    getProjectdata(id);
    getTeamBirthdays(id);
    //Passive projects methods
    getJobsBackupPending(id);
    getJobsBackupToApprove(id);
    getCountOfPreclosedjobs(id);
    getNPIJobs(id);
    getECOJobs(id);
    getUserCriticalDef(id);
    getMgrJobApprecbyMonth(id);
    getMgrJobComplaintbyMonth(id);
    getMyTeamLeaveApprvl(id);
    getCompoffAppr(id);
    getUserCriticalDefUserMonth(id);
    getCurYearTeamEfficiency(id);
    getCurMonthTeamEfficiency(id);
  };
  const location = useLocation();
  useEffect(() => {
    if (ManagerList && ManagerList.length > 0) {
      setManagerList(ManagerList);

          // Extract username from URL parameters
      const params = new URLSearchParams(location.search);
      const username = params.get('username');
      if (username  && (username !== 'E004' || username !== 'E772' || username !== 'A002')) {
        setManagerData(username);  
        getAllMethods(username);
        setManagerData(username);
      }
      else
      {
      const id = ManagerList[0].idno;
      getAllMethods(id);
      const initMgr = ManagerList[0];
      setManagerData(initMgr);
      }
    

  }
  }, [ManagerList]);

  const [managerList, setManagerList] = useState([]);
  const [selectedManager, setManagerData] = useState({
    idno: '',
    name: '',
  });

  const handleManagerChange = (newValue) => {
    if (newValue) {
      setManagerData(newValue);
      const id = newValue.idno;
      getAllMethods(id);
    }
  };


  return (
    <Fragment>
      <ContentBox className="analytics">
        <>
          <Grid container spacing={2} sx={{ mb: '24px' }}>
            <Grid item xs={12} lg={8} sm={8} md={8}>
              <SimpleCardNew>
                <ProjectAutocompleteDropdown
                  handleChange={handleManagerChange}
                  value={selectedManager.name}
                  optionsList={managerList}
                  isLoading={isProjectLoading}
                />
              </SimpleCardNew>
              {isProjectLoading ? (
                <div className="progressbar">
                  <CircularProgress className="progress" />
                </div>
              ) : (
                <>
                  <>
                    {!isProjectLoading && projectDetails.length > 0 ? (
                      <ProjectListComponent data={projectDetails} />
                    ) : (
                      <SimpleCardNew>
                        <div className="no-projecst">
                          <span>No Projects Available</span>
                        </div>
                      </SimpleCardNew>
                    )}
                  </>
                </>
              )}
              <Grid container spacing={1} sx={{ mb: '24px' }}>
                <Grid item xs={12} lg={12} sm={12} md={12}>
                  <PassiveProjectComponent
                    JobsBackupPendingData={JobsBackupPendingData}
                    JobsBackupToApproveData={JobsBackupToApproveData}
                    CountOfPreclosedjobsData={CountOfPreclosedjobsData}
                    NPIJobsData={NPIJobsData}
                    ECOJobsData={ECOJobsData}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} lg={4} sm={4} md={4}>
              <Grid container spacing={1} sx={{ mb: '24px' }}>
                <Grid item xs={12} lg={12} sm={12} md={12}>
                  <TeamBirthDays data={TeamBirthdaysList} />
                  <p className="dis-flex">
                    <div className="wid-50-per">
                      <b>Leave Approval : </b>
                    </div>

                    <div className="leave-app-sec">
                      {MyTeamLeaveApprvlList ? MyTeamLeaveApprvlList : '-'}
                    </div>
                  </p>
                  <p className="dis-flex">
                    <div className="wid-50-per">
                      <b>Comp Off Approval : </b>
                    </div>

                    <div className="comp-app-sec">{CompoffApprList ? CompoffApprList : '-'}</div>
                  </p>
                </Grid>
                <Grid item xs={12} lg={6} sm={6} md={6}>
                  <AppriciationByMonthComponent
                    dataList={MgrJobApprecbyMonthData}
                    isLoading={isMgrJAppLoading}
                  />
                </Grid>
                <Grid item xs={12} lg={6} sm={6} md={6}>
                  <ComplaintByMonthComponent
                    dataList={JobComplaintbyMonthData}
                    isMgrJCMLoading={isMgrJCMLoading}
                  />
                </Grid>
                <Grid item xs={12} lg={6} sm={6} md={6}>
                  <UserCriticDefCurMonth
                    dataList={UserCriticalDefCurMonthData}
                    isLoading={isCriDefYDLoading}
                  />
                </Grid>
                <Grid item xs={12} lg={6} sm={6} md={6}>
                  <UserCriticalDefects dataList={UserCriticalDefData} isLoading={isCriDefLoading} />
                </Grid>
                <Grid item xs={12} lg={12} sm={6} md={6}>
                  <MonthTeamEfficiencyComponent
                    dataList={TeamMonthEfficiencyList}
                    isLoading={TeamMonthEfficiencyLoading}
                  />
                </Grid>
                {/* <Grid item xs={12} lg={6} sm={6} md={6}>
                  <YearEfficiencyComponent
                    dataList={TeamYrEfficiencyList}
                    isLoading={TeamYrEfficiencyLoading}
                  />
                </Grid> */}
              </Grid>
              {/* <Grid item xs={12} lg={12} sm={6} md={6}> */}
              <Grid item xs={12} lg={6} sm={6} md={6}>
                  <YearEfficiencyComponent
                    dataList={TeamYrEfficiencyList}
                    isLoading={TeamYrEfficiencyLoading}
                  />
                </Grid>
            </Grid>
          </Grid>
        </>
      </ContentBox>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  activeProjectList: state.passiveProjectsData.activeProjectList,
  projectDetails: state.passiveProjectsData.projectDetails,
  isProjectLoading: state.passiveProjectsData.isProjectLoading,
  TeamBirthdaysList: state.RightPaneReducerData.TeamBirthdaysList,
  MgrJobApprecbyMonthData: state.RightPaneReducerData.MgrJobApprecbyMonthList,
  ComplainChartLoading: state.RightPaneReducerData.isMgrJCMLoading,
  AppriChartLoading: state.RightPaneReducerData.isMgrJAppLoading,
  //passive project data
  JobsBackupPendingData: state.passiveProjectsData.JobsBackupPendingList,
  JobsBackupToApproveData: state.passiveProjectsData.JobsBackupToApproveList,
  CountOfPreclosedjobsData: state.passiveProjectsData.CountOfPreclosedjobsList,
  NPIJobsData: state.passiveProjectsData.NPIJobsList,
  ECOJobsData: state.passiveProjectsData.ECOJobsList,
  JobComplaintbyMonthData: state.RightPaneReducerData.MgrJobComplaintbyMonthList,
  CompoffApprList: state.RightPaneReducerData.CompoffApprList,
  MyTeamLeaveApprvlList: state.RightPaneReducerData.MyTeamLeaveApprvlList,

  //Righ pane data
  UserCriticalDefData: state.RightPaneReducerData.UserCriticalDefList,
  UserCriticalDefCurMonthData: state.RightPaneReducerData.UserCriticalDefCurMonthList,
  ManagerList: state.RightPaneReducerData.ManagerList,
  TeamMonthEfficiencyList: state.RightPaneReducerData.TeamMonthEfficiencyList,
  TeamYrEfficiencyList: state.RightPaneReducerData.TeamYrEfficiencyList,

  //Loading states
  isMgrJCMLoading: state.RightPaneReducerData.isMgrJCMLoading,
  isMgrJAppLoading: state.RightPaneReducerData.isMgrJAppLoading,
  isCriDefLoading: state.RightPaneReducerData.isCriDefLoading,
  isCriDefYDLoading: state.RightPaneReducerData.isCriDefYDLoading,
  TeamYrEfficiencyLoading: state.RightPaneReducerData.TeamYrEfficiencyLoading,
  TeamMonthEfficiencyLoading: state.RightPaneReducerData.TeamMonthEfficiencyLoading,
});
export default connect(mapStateToProps, {
  // getDashbactiveprojects,
  getProjectdata,
  getTeamBirthdays,
  // passive project actions
  getJobsBackupPending,
  getJobsBackupToApprove,
  getCountOfPreclosedjobs,
  getNPIJobs,
  getECOJobs,
  getUserCriticalDef,
  getMgrJobApprecbyMonth,
  getMgrJobComplaintbyMonth,
  getMyTeamLeaveApprvl,
  getCompoffAppr,
  getUserCriticalDefUserMonth,
  getManagerList,
  getCurYearTeamEfficiency,
  getCurMonthTeamEfficiency,
})(Analytics);
