import {
  GET_TNONBILL_SUCCESS,
  GET_NPIJ_SUCCESS,
  GET_JOBS_BUTA_SUCCESS,
  GET_ECOJ_SUCCESS,
  GET_COPCJ_SUCCESS,
  GET_CJNB_SUCCESS,
  GET_CWPOJ_SUCCESS,
  GET_BUP_SUCCESS,
  GET_DB_AP_SUCCESS,
  GET_P_DATA_SUCCESS,
  GET_DB_AP_LOADING,
} from '../../actions/PassiveProjects/passiveProjectsActions';

const initialState = {
  totalNonBillableJobsList: [],
  NPIJobsList: [],
  JobsBackupToApproveList: [],
  ECOJobsList: [],
  CountOfPreclosedjobsList: [],
  CountJobNotBilledList: [],
  CntWithoutPOJobsList: [],
  JobsBackupPendingList: [],
  activeProjectList: [],
  projectDetails: [],
  isProjectLoading: false,
};
let data = [];
const PassiveProjectsReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_DB_AP_LOADING: {
      return {
        ...state,
        isProjectLoading: true,
        projectDetails: action.data,
      };
    }
    case GET_DB_AP_SUCCESS: {
      return {
        ...state,
        activeProjectList: action.data,
      };
    }
    case GET_P_DATA_SUCCESS: {
      return {
        ...state,
        projectDetails: action.data,
        isProjectLoading: false,
      };
    }
    case GET_TNONBILL_SUCCESS: {
      return {
        ...state,
        totalNonBillableJobsList: action.data,
      };
    }
    case GET_NPIJ_SUCCESS: {
      return {
        ...state,
        NPIJobsList: action.data,
      };
    }
    case GET_JOBS_BUTA_SUCCESS: {
      return {
        ...state,
        JobsBackupToApproveList: action.data,
      };
    }
    case GET_ECOJ_SUCCESS: {
      return {
        ...state,
        ECOJobsList: action.data,
      };
    }
    case GET_COPCJ_SUCCESS: {
      return {
        ...state,
        CountOfPreclosedjobsList: action.data,
      };
    }
    case GET_CJNB_SUCCESS: {
      return {
        ...state,
        CountJobNotBilledList: action.data,
      };
    }
    case GET_CWPOJ_SUCCESS: {
      return {
        ...state,
        CntWithoutPOJobsList: action.data,
      };
    }
    case GET_BUP_SUCCESS: {
      return {
        ...state,
        JobsBackupPendingList: action.data,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default PassiveProjectsReducer;
