import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@mui/material';
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
    IsLoading,
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
    //Rightpane data
    UserCriticalDefData,
    getTeamBirthdays,
    MgrJobApprecbyMonthData,
    JobComplaintbyMonthData,
    ComplainChartLoading,
    AppriChartLoading,
  } = props;
  const { palette } = useTheme();

  useEffect(() => {
    getTeamBirthdays('E777');
    getProjectdata('E007');
    //Passive projects methods
    getJobsBackupPending('E007');
    getJobsBackupToApprove('E007');
    getCountOfPreclosedjobs('E007');
    getNPIJobs('E007');
    getECOJobs('E007');
    getUserCriticalDef('E228');
    getMgrJobApprecbyMonth('E007');
    getMgrJobComplaintbyMonth('E688');
  }, []);
  // console.log('projectDetails', projectDetails);
  console.log('TeamBirthdaysList', TeamBirthdaysList);

  return (
    <Fragment>
      <ContentBox className="analytics">
        {IsLoading ? (
          <div className="progressbar">
            <CircularProgress className="progress" />
          </div>
        ) : (
          <>
            <>
              <ProjectListComponent data={projectDetails} />
            </>
          </>
        )}
        <>
          <Grid container spacing={2} sx={{ mb: '24px' }}>
            <Grid item xs={12} lg={4} sm={4} md={4}>
              <PassiveProjectComponent
                JobsBackupPendingData={JobsBackupPendingData}
                JobsBackupToApproveData={JobsBackupToApproveData}
                CountOfPreclosedjobsData={CountOfPreclosedjobsData}
                NPIJobsData={NPIJobsData}
                ECOJobsData={ECOJobsData}
              />
            </Grid>
            <Grid item xs={12} lg={4} sm={4} md={4}>
              {/* {ComplainChartLoading ? (
                <div className="progressbar">
                  <CircularProgress className="progress" />
                </div>
              ) : ( */}
              <AppriciationByMonthComponent dataList={MgrJobApprecbyMonthData} />
              {/* )} */}
            </Grid>
            <Grid item xs={12} lg={4} sm={4} md={4}>
              {/* {AppriChartLoading ? (
                <div className="progressbar">
                  <CircularProgress className="progress" />
                </div>
              ) : ( */}
              <ComplaintByMonthComponent dataList={JobComplaintbyMonthData} />
              {/* )} */}
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
  IsLoading: state.passiveProjectsData.IsLoading,
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

  //Righ pane data
  UserCriticalDefData: state.RightPaneReducerData.UserCriticalDefList,
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
})(Analytics);

// const [projecList, setProjectList] = useState(activeProjectList);

// const [selectedData, setSelectedData] = useState({
//   Name: '',
//   Value: '',
// });
// const handleProjectChange = (newValue) => {

//   if (newValue) {
//     setSelectedData(newValue);
//     const pName = newValue.jobnumber;
//     getProjectdata(pName);
//   }
// };

// useEffect(() => {
//   getTeamBirthdays('E777');
//   if (activeProjectList && activeProjectList.length === 0) {
//     getDashbactiveprojects('E007');
//   } else {
//     let pName = 'BIAB51644C_USB BOARD'; //activeProjectList[1].jobnumber;
//     getProjectdata(pName);
//     setProjectList(activeProjectList);
//   }
// }, [activeProjectList]);

{
  /* <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <SimpleCard title="Select project">
              <Grid container spacing={1}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <ProjectAutocompleteDropdown
                    handleChange={handleProjectChange}
                    value={selectedData.jobnumber}
                    optionsList={projecList}
                  />
                </Grid>
                <Grid
                  item
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                  style={{
                    border: '1px solid #f86154',
                    borderRadius: '5px',
                    background: 'linear-gradient(230deg, #fc5286, #fbaaa2)',
                    marginTop: '-25px',
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <span style={{ color: '#000099' }}>
                        <strong>Project Name : </strong>
                      </span>
                      <span>{projectData != null && projectData.jobnumber}</span>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <p>
                        <span>
                          <strong> START DATE :</strong>{' '}
                        </span>
                        <span>{projectData != null && projectData.startdate.split('T')[0]}</span>
                      </p>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <p>
                        <span>
                          <strong> END DATE :</strong>{' '}
                        </span>
                        <span>{projectData != null && projectData.enddate.split('T')[0]}</span>
                      </p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </SimpleCard>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: '10px' }}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <CardsBlueTheme data={projectData} />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }} style={{ minHeight: '200px' }}>
              <Title>Team Management</Title>
              <Divider />
              <TeamBirthDays data={TeamBirthdaysList} />
              <Title>Team Members</Title>
            </Card>
          </Grid>
        </Grid> */
}
