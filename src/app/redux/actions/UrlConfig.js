import { baseUrl } from './BaseApi';

class UrlConfig {
  getDashbactiveprojectsUrl() {
    return baseUrl + 'dashbactiveprojects?pSessionUser=';
  }
  getProjectdataUrl() {
    return baseUrl + 'projectdata?pSessionUser=';
  }
  getJobsBackupPendingUrl() {
    return baseUrl + 'getJobsBackupPending?pSessionUser=';
  }
  getJobsBackupToApproveUrl() {
    return baseUrl + 'getJobsBackupToApprove?pSessionUser=';
  }
  getCountOfPreclosedjobsUrl() {
    return baseUrl + 'getCountOfPreclosedjobs?pSessionUser=';
  }
  getNPIJobsUrl() {
    return baseUrl + 'getNPIJobs?pSessionUser=';
  }
  getECOJobsUrl() {
    return baseUrl + 'getECOJobs?pSessionUser=';
  }
  getCountJobNotBilledUrl() {
    return baseUrl + 'getCountJobNotBilled?pSessionUser=';
  }
  GetCntWithoutPOJobsUrl() {
    return baseUrl + 'GetCntWithoutPOJobs?pSessionUser=';
  }
  TotalNonBillableJobsUrl() {
    return baseUrl + 'TotalNonBillableJobs?pSessionUser=';
  }
  getCntYettoScrubPartsUrl() {
    return baseUrl + 'getCntYettoScrubParts?pSessionUser=';
  }
  getCntUnderCreationPartsUrl() {
    return baseUrl + 'getCntUnderCreationParts?pSessionUser=';
  }
  getCntUnderQCPartsUrl() {
    return baseUrl + 'getCntUnderQCParts?pSessionUser=';
  }
  getCntUnderDBPartsUrl() {
    return baseUrl + 'getCntUnderDBParts?pSessionUser=';
  }
  MyTeamSPUrl() {
    return baseUrl + 'MyTeamSP?pSessionUser=';
  }
  getMgrJobApprecbyMonthUrl() {
    return baseUrl + 'getMgrJobApprecbyMonth?pSessionUser=';
  }
  getMgrJobComplaintbyMonthUrl() {
    return baseUrl + 'getMgrJobComplaintbyMonth?pSessionUser=';
  }
  getTeamBirthdaysUrl() {
    return baseUrl + 'getTeamBirthdays?pSessionUser=';
  }
  getMyTeamLeaveApprvlUrl() {
    return baseUrl + 'getMyTeamLeaveApprvl?pSessionUser=';
  }
  getUserCriticalDefUrl() {
    return baseUrl + 'getUserCriticalDef?pSessionUser=';
  }
  getCompoffApprUrl() {
    return baseUrl + 'getCompoffAppr?pSessionUser=';
  }
  getApprecApprovPendingUrl() {
    return baseUrl + 'getApprecApprovPending?pSessionUser=';
  }
  getApprecAcceptPendingUrl() {
    return baseUrl + 'getApprecAcceptPending?pSessionUser=';
  }
  AppreciationYearWiseUrl() {
    return baseUrl + 'AppreciationYearWise?pSessionUser=';
  }
  ComplaintsYearWiseUrl() {
    return baseUrl + 'ComplaintsYearWise?pSessionUser=';
  }
  getUserCriticalDefUserMonthUrl() {
    return baseUrl + 'getQualtRptUsrWiseCurrMonth?pSessionUser=';
  }
  getManagerListUrl() {
    return baseUrl + 'getManagerList';
  }
  getCurYearTeamEfficiencyUrl() {
    return baseUrl + 'getCurYearTeamEfficiency?pSessionUser=';
  }
  getCurMonthTeamEfficiencyUrl() {
    return baseUrl + 'getCurMonthTeamEfficiency?pSessionUser=';
  }
}

export default new UrlConfig();
