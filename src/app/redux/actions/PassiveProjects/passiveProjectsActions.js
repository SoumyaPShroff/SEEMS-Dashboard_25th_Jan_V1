import { get } from '../BaseApi';
import UrlConfig from '../UrlConfig';
import { authHeaderWithToken } from '../AuthHeader';

export const GET_DB_AP_LOADING = 'GET_DB_AP_LOADING';
export const GET_DB_AP_SUCCESS = 'GET_DB_AP_SUCCESS';
export const GET_DB_AP_ERROR = 'GET_DB_AP_ERROR';

export const getDashbactiveprojects = (E_Id) => async (dispatch) => {
  let url = UrlConfig.getDashbactiveprojectsUrl();
  url = url + E_Id;
  dispatch({
    type: GET_DB_AP_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    // let pName = res.data[1].jobnumber;
    //success('');
    dispatch({
      type: GET_DB_AP_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_DB_AP_ERROR,
    });
  }
};

export const GET_P_DATA_SUCCESS = 'GET_P_DATA_SUCCESS';
export const GET_P_DATA_ERROR = 'GET_P_DATA_ERROR';

export const getProjectdata = (E_Id) => async (dispatch) => {
  let url = UrlConfig.getProjectdataUrl();
  url = url + E_Id;
  dispatch({
    type: GET_DB_AP_LOADING,
    data: [],
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_P_DATA_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_P_DATA_ERROR,
    });
  }
};

export const GET_BUP_LOADING = 'GET_BUP_LOADING';
export const GET_BUP_SUCCESS = 'GET_BUP_SUCCESS';
export const GET_BUP_ERROR = 'GET_BUP_ERROR';

export const getJobsBackupPending = (E_Id) => async (dispatch) => {
  let url = UrlConfig.getJobsBackupPendingUrl();
  url = url + E_Id;
  dispatch({
    type: GET_BUP_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_BUP_SUCCESS,
      data: res.data && res.data[0].count,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_BUP_ERROR,
    });
  }
};

export const GET_CWPOJ_LOADING = 'GET_CWPOJ_LOADING';
export const GET_CWPOJ_SUCCESS = 'GET_CWPOJ_SUCCESS';
export const GET_CWPOJ_ERROR = 'GET_CWPOJ_ERROR';

export const getCntWithoutPOJobs = () => async (dispatch) => {
  let url = UrlConfig.GetCntWithoutPOJobsUrl();
  url = url + '';
  dispatch({
    type: GET_CWPOJ_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_CWPOJ_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_CWPOJ_ERROR,
    });
  }
};

export const GET_CJNB_LOADING = 'GET_CJNB_LOADING';
export const GET_CJNB_SUCCESS = 'GET_CJNB_SUCCESS';
export const GET_CJNB_ERROR = 'GET_CJNB_ERROR';

export const getCountJobNotBilled = () => async (dispatch) => {
  let url = UrlConfig.getCountJobNotBilledUrl();
  url = url + '';
  dispatch({
    type: GET_CJNB_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_CJNB_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_CJNB_ERROR,
    });
  }
};

export const GET_COPCJ_LOADING = 'GET_COPCJ_LOADING';
export const GET_COPCJ_SUCCESS = 'GET_COPCJ_SUCCESS';
export const GET_COPCJ_ERROR = 'GET_COPCJ_ERROR';

export const getCountOfPreclosedjobs = (E_Id) => async (dispatch) => {
  let url = UrlConfig.getCountOfPreclosedjobsUrl();
  url = url + E_Id;
  dispatch({
    type: GET_COPCJ_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_COPCJ_SUCCESS,
      data: res.data && res.data[0].count,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_COPCJ_ERROR,
    });
  }
};

export const GET_ECOJ_LOADING = 'GET_ECOJ_LOADING';
export const GET_ECOJ_SUCCESS = 'GET_ECOJ_SUCCESS';
export const GET_ECOJ_ERROR = 'GET_ECOJ_ERROR';

export const getECOJobs = (E_Id) => async (dispatch) => {
  let url = UrlConfig.getECOJobsUrl();
  url = url + E_Id;
  dispatch({
    type: GET_ECOJ_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_ECOJ_SUCCESS,
      data: res.data && res.data[0].count,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_ECOJ_ERROR,
    });
  }
};

export const GET_JOBS_BUTA_LOADING = 'GET_JOBS_BUTA_LOADING';
export const GET_JOBS_BUTA_SUCCESS = 'GET_JOBS_BUTA_SUCCESS';
export const GET_JOBS_BUTA_ERROR = 'GET_JOBS_BUTA_ERROR';

export const getJobsBackupToApprove = (E_Id) => async (dispatch) => {
  let url = UrlConfig.getJobsBackupToApproveUrl();
  url = url + E_Id;
  dispatch({
    type: GET_JOBS_BUTA_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_JOBS_BUTA_SUCCESS,
      data: res.data && res.data[0].count,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_JOBS_BUTA_ERROR,
    });
  }
};

export const GET_NPIJ_LOADING = 'GET_NPIJ_LOADING';
export const GET_NPIJ_SUCCESS = 'GET_NPIJ_SUCCESS';
export const GET_NPIJ_ERROR = 'GET_NPIJ_ERROR';

export const getNPIJobs = (E_Id) => async (dispatch) => {
  let url = UrlConfig.getNPIJobsUrl();
  url = url + E_Id;
  dispatch({
    type: GET_NPIJ_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_NPIJ_SUCCESS,
      data: res.data && res.data[0].count,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_NPIJ_ERROR,
    });
  }
};

export const GET_TNONBILL_LOADING = 'GET_TNONBILL_LOADING';
export const GET_TNONBILL_SUCCESS = 'GET_TNONBILL_SUCCESS';
export const GET_TNONBILL_ERROR = 'GET_TNONBILL_ERROR';

export const totalNonBillableJobsUrl = () => async (dispatch) => {
  let url = UrlConfig.TotalNonBillableJobsUrl();
  url = url + '';
  dispatch({
    type: GET_TNONBILL_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_TNONBILL_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_TNONBILL_ERROR,
    });
  }
};
