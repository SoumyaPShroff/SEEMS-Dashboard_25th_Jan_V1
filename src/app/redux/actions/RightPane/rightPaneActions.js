import { get } from '../BaseApi';
import UrlConfig from '../UrlConfig';
import { authHeaderWithToken } from '../AuthHeader';

export const GET_MANAGER_LOADING = 'GET_MANAGER_LOADING';
export const GET_MANAGER_SUCCESS = 'GET_MANAGER_SUCCESS';
export const GET_MANAGER_ERROR = 'GET_MANAGER_ERROR';

export const getManagerList = () => async (dispatch) => {
  let url = UrlConfig.getManagerListUrl();
  dispatch({
    type: GET_MANAGER_LOADING,
  });
  let res = await get(url);
  if (res && res.status === 200) {
    dispatch({
      type: GET_MANAGER_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    dispatch({
      type: GET_MANAGER_ERROR,
    });
  }
};

export const GET_APACP_LOADING = 'GET_APACP_LOADING';
export const GET_APACP_SUCCESS = 'GET_APACP_SUCCESS';
export const GET_APACP_ERROR = 'GET_APACP_ERROR';

export const getApprecAcceptPending = () => async (dispatch) => {
  let url = UrlConfig.getApprecAcceptPendingUrl();
  url = url + '';
  dispatch({
    type: GET_APACP_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_APACP_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_APACP_ERROR,
    });
  }
};

export const GET_APAPP_LOADING = 'GET_APAPP_LOADING';
export const GET_APAPP_SUCCESS = 'GET_APAPP_SUCCESS';
export const GET_APAPP_ERROR = 'GET_APAPP_ERROR';

export const getApprecApprovPending = () => async (dispatch) => {
  let url = UrlConfig.getApprecApprovPendingUrl();
  url = url + '';
  dispatch({
    type: GET_APAPP_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_APAPP_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_APAPP_ERROR,
    });
  }
};

export const GET_COMPOFF_LOADING = 'GET_COMPOFF_LOADING';
export const GET_COMPOFF_SUCCESS = 'GET_COMPOFF_SUCCESS';
export const GET_COMPOFF_ERROR = 'GET_COMPOFF_ERROR';

export const getCompoffAppr = (E_Id) => async (dispatch) => {
  let url = UrlConfig.getCompoffApprUrl();
  url = url + E_Id;
  dispatch({
    type: GET_COMPOFF_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_COMPOFF_SUCCESS,
      data: res.data[0].count,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_COMPOFF_ERROR,
    });
  }
};

export const GET_MJAM_LOADING = 'GET_MJAM_LOADING';
export const GET_MJAM_SUCCESS = 'GET_MJAM_SUCCESS';
export const GET_MJAM_ERROR = 'GET_MJAM_ERROR';

export const getMgrJobApprecbyMonth = (E_Id) => async (dispatch) => {
  let url = UrlConfig.getMgrJobApprecbyMonthUrl();
  url = url + E_Id;
  dispatch({
    type: GET_MJAM_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_MJAM_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_MJAM_ERROR,
    });
  }
};

export const GET_MJCM_LOADING = 'GET_MJCM_LOADING';
export const GET_MJCM_SUCCESS = 'GET_MJCM_SUCCESS';
export const GET_MJCM_ERROR = 'GET_MJCM_ERROR';

export const getMgrJobComplaintbyMonth = (E_Id) => async (dispatch) => {
  let url = UrlConfig.getMgrJobComplaintbyMonthUrl();
  url = url + E_Id;
  dispatch({
    type: GET_MJCM_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_MJCM_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_MJCM_ERROR,
    });
  }
};

export const GET_LEAVE_LOADING = 'GET_LEAVE_LOADING';
export const GET_LEAVE_SUCCESS = 'GET_LEAVE_SUCCESS';
export const GET_LEAVE_ERROR = 'GET_LEAVE_ERROR';

export const getMyTeamLeaveApprvl = (E_Id) => async (dispatch) => {
  let url = UrlConfig.getMyTeamLeaveApprvlUrl();
  url = url + E_Id;
  dispatch({
    type: GET_LEAVE_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_LEAVE_SUCCESS,
      data: res.data[0].CountLeaveAppr,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_LEAVE_ERROR,
    });
  }
};

export const GET_BIRTHDAY_LOADING = 'GET_BIRTHDAY_LOADING';
export const GET_BIRTHDAY_SUCCESS = 'GET_BIRTHDAY_SUCCESS';
export const GET_BIRTHDAY_ERROR = 'GET_BIRTHDAY_ERROR';

export const getTeamBirthdays = (E_Id) => async (dispatch) => {
  let url = UrlConfig.getTeamBirthdaysUrl();
  url = url + E_Id;
  dispatch({
    type: GET_BIRTHDAY_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_BIRTHDAY_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_BIRTHDAY_ERROR,
    });
  }
};

export const GET_USERCRIT_LOADING = 'GET_USERCRIT_LOADING';
export const GET_USERCRIT_SUCCESS = 'GET_USERCRIT_SUCCESS';
export const GET_USERCRIT_ERROR = 'GET_USERCRIT_ERROR';

export const getUserCriticalDef = (E_Id) => async (dispatch) => {
  let url = UrlConfig.getUserCriticalDefUrl();
  url = url + E_Id;
  dispatch({
    type: GET_USERCRIT_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_USERCRIT_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_USERCRIT_ERROR,
    });
  }
};
export const GET_USERCRIT2_LOADING = 'GET_USERCRIT2_LOADING';
export const GET_USERCRIT2_SUCCESS = 'GET_USERCRIT2_SUCCESS';
export const GET_USERCRIT2_ERROR = 'GET_USERCRIT2_ERROR';

export const getUserCriticalDefUserMonth = (E_Id) => async (dispatch) => {
  let url = UrlConfig.getUserCriticalDefUserMonthUrl();
  url = url + E_Id;
  dispatch({
    type: GET_USERCRIT2_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    dispatch({
      type: GET_USERCRIT2_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    dispatch({
      type: GET_USERCRIT2_ERROR,
    });
  }
};
export const GET_MYTEAM_LOADING = 'GET_MYTEAM_LOADING';
export const GET_MYTEAM_SUCCESS = 'GET_MYTEAM_SUCCESS';
export const GET_MYTEAM_ERROR = 'GET_MYTEAM_ERROR';

export const myTeamSP = () => async (dispatch) => {
  let url = UrlConfig.MyTeamSPUrl();
  url = url + '';
  dispatch({
    type: GET_MYTEAM_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_MYTEAM_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_MYTEAM_ERROR,
    });
  }
};

export const GET_TEAM_EFFI_LOADING = 'GET_TEAM_EFFI_LOADING';
export const GET_TEAM_EFFI_SUCCESS = 'GET_TEAM_EFFI_SUCCESS';
export const GET_TEAM_EFFI_ERROR = 'GET_TEAM_EFFI_ERROR';

export const getCurMonthTeamEfficiency = (E_Id) => async (dispatch) => {
  let url = UrlConfig.getCurMonthTeamEfficiencyUrl();
  url = url + E_Id;
  dispatch({
    type: GET_TEAM_EFFI_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_TEAM_EFFI_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_TEAM_EFFI_ERROR,
    });
  }
};

export const GET_YR_TEAM_EFFI_LOADING = 'GET_YR_TEAM_EFFI_LOADING';
export const GET_YR_TEAM_EFFI_SUCCESS = 'GET_YR_TEAM_EFFI_SUCCESS';
export const GET_YR_TEAM_EFFI_ERROR = 'GET_YR_TEAM_EFFI_ERROR';

export const getCurYearTeamEfficiency = (E_Id) => async (dispatch) => {
  let url = UrlConfig.getCurYearTeamEfficiencyUrl();
  url = url + E_Id;
  dispatch({
    type: GET_YR_TEAM_EFFI_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_YR_TEAM_EFFI_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_YR_TEAM_EFFI_ERROR,
    });
  }
};
