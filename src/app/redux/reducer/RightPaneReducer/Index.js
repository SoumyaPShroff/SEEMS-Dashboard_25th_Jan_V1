import {
  GET_APACP_SUCCESS,
  GET_APAPP_SUCCESS,
  GET_COMPOFF_SUCCESS,
  GET_MJAM_SUCCESS,
  GET_MJCM_SUCCESS,
  GET_LEAVE_SUCCESS,
  GET_BIRTHDAY_SUCCESS,
  GET_USERCRIT_SUCCESS,
  GET_MYTEAM_SUCCESS,
  GET_MJCM_LOADING,
  GET_USERCRIT2_SUCCESS,
  GET_MANAGER_SUCCESS,
  GET_MJAM_LOADING,
  GET_USERCRIT_LOADING,
  GET_USERCRIT2_LOADING,
  GET_TEAM_EFFI_LOADING,
  GET_TEAM_EFFI_SUCCESS,
  GET_YR_TEAM_EFFI_LOADING,
  GET_YR_TEAM_EFFI_SUCCESS,
} from '../../actions/RightPane/rightPaneActions';

const initialState = {
  TeamMonthEfficiencyList: [],
  TeamMonthEfficiencyLoading: false,
  TeamYrEfficiencyList: [],
  TeamYrEfficiencyLoading: false,
  myTeamSPList: [],
  UserCriticalDefList: [],
  TeamBirthdaysList: [],
  MyTeamLeaveApprvlList: [],
  MgrJobComplaintbyMonthList: [],
  MgrJobApprecbyMonthList: [],
  CompoffApprList: [],
  ApprecApprovPendingList: [],
  ApprecAcceptPendingList: [],
  isMgrJCMLoading: false,
  isMgrJAppLoading: false,
  UserCriticalDefCurMonthList: [],
  ManagerList: [],
  isCriDefLoading: false,
  isCriDefYDLoading: false,
};

const RightPaneReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_TEAM_EFFI_LOADING: {
      return {
        ...state,
        TeamMonthEfficiencyLoading: true,
      };
    }
    case GET_YR_TEAM_EFFI_LOADING: {
      return {
        ...state,
        TeamYrEfficiencyLoading: true,
      };
    }
    case GET_MJAM_LOADING: {
      return {
        ...state,
        isMgrJAppLoading: true,
      };
    }
    case GET_USERCRIT2_LOADING: {
      return {
        ...state,
        isCriDefYDLoading: true,
      };
    }
    case GET_USERCRIT_LOADING: {
      return {
        ...state,
        isCriDefLoading: true,
      };
    }
    case GET_MJCM_LOADING: {
      return {
        ...state,
        isMgrJCMLoading: true,
      };
    }
    case GET_MANAGER_SUCCESS: {
      return {
        ...state,
        ManagerList: action.data,
      };
    }
    case GET_APACP_SUCCESS: {
      return {
        ...state,
        ApprecAcceptPendingList: action.data,
      };
    }
    case GET_TEAM_EFFI_SUCCESS: {
      return {
        ...state,
        TeamMonthEfficiencyList: action.data,
        TeamMonthEfficiencyLoading: false,
      };
    }
    case GET_YR_TEAM_EFFI_SUCCESS: {
      return {
        ...state,
        TeamYrEfficiencyList: action.data,
        TeamYrEfficiencyLoading: false,
      };
    }
    case GET_APAPP_SUCCESS: {
      return {
        ...state,
        ApprecApprovPendingList: action.data,
      };
    }
    case GET_COMPOFF_SUCCESS: {
      return {
        ...state,
        CompoffApprList: action.data,
      };
    }
    case GET_MJAM_SUCCESS: {
      return {
        ...state,
        MgrJobApprecbyMonthList: action.data,
        isMgrJAppLoading: false,
      };
    }
    case GET_MJCM_SUCCESS: {
      return {
        ...state,
        MgrJobComplaintbyMonthList: action.data,
        isMgrJCMLoading: false,
      };
    }
    case GET_LEAVE_SUCCESS: {
      return {
        ...state,
        MyTeamLeaveApprvlList: action.data,
      };
    }
    case GET_BIRTHDAY_SUCCESS: {
      return {
        ...state,
        TeamBirthdaysList: action.data,
      };
    }
    case GET_USERCRIT_SUCCESS: {
      return {
        ...state,
        UserCriticalDefList: action.data,
        isCriDefLoading: false,
      };
    }
    case GET_MYTEAM_SUCCESS: {
      return {
        ...state,
        myTeamSPList: action.data,
      };
    }
    case GET_USERCRIT2_SUCCESS: {
      return {
        ...state,
        UserCriticalDefCurMonthList: action.data,
        isCriDefYDLoading: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default RightPaneReducer;
