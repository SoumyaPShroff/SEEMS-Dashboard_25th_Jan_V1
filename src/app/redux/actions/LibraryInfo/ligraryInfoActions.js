import { get } from '../BaseApi';
import UrlConfig from '../UrlConfig';
import { authHeaderWithToken } from '../AuthHeader';

export const GET_APPYER_LOADING = 'GET_APPYER_LOADING';
export const GET_APPYER_SUCCESS = 'GET_APPYER_SUCCESS';
export const GET_APPYER_ERROR = 'GET_APPYER_ERROR';

export const appreciationYearWise = () => async (dispatch) => {
  let url = UrlConfig.AppreciationYearWiseUrl();
  url = url + '';
  dispatch({
    type: GET_APPYER_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_APPYER_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_APPYER_ERROR,
    });
  }
};

export const GET_COMYER_LOADING = 'GET_COMYER_LOADING';
export const GET_COMYER_SUCCESS = 'GET_COMYER_SUCCESS';
export const GET_COMYER_ERROR = 'GET_COMYER_ERROR';

export const complaintsYearWise = () => async (dispatch) => {
  let url = UrlConfig.ComplaintsYearWiseUrl();
  url = url + '';
  dispatch({
    type: GET_COMYER_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_COMYER_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_COMYER_ERROR,
    });
  }
};

export const GET_CUCP_LOADING = 'GET_CUCP_LOADING';
export const GET_CUCP_SUCCESS = 'GET_CUCP_SUCCESS';
export const GET_CUCP_ERROR = 'GET_CUCP_ERROR';

export const getCntUnderCreationParts = () => async (dispatch) => {
  let url = UrlConfig.getCntUnderCreationPartsUrl();
  url = url + '';
  dispatch({
    type: GET_CUCP_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_CUCP_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_CUCP_ERROR,
    });
  }
};

export const GET_CUDBP_LOADING = 'GET_CUDBP_LOADING';
export const GET_CUDBP_SUCCESS = 'GET_CUDBP_SUCCESS';
export const GET_CUDBP_ERROR = 'GET_CUDBP_ERROR';

export const getCntUnderDBParts = () => async (dispatch) => {
  let url = UrlConfig.getCntUnderDBPartsUrl();
  url = url + '';
  dispatch({
    type: GET_CUDBP_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_CUDBP_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_CUDBP_ERROR,
    });
  }
};

export const GET_CUQCP_LOADING = 'GET_CUQCP_LOADING';
export const GET_CUQCP_SUCCESS = 'GET_CUQCP_SUCCESS';
export const GET_CUQCP_ERROR = 'GET_CUQCP_ERROR';

export const getCntUnderQCParts = () => async (dispatch) => {
  let url = UrlConfig.getCntUnderQCPartsUrl();
  url = url + '';
  dispatch({
    type: GET_CUQCP_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_CUQCP_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_CUQCP_ERROR,
    });
  }
};

export const GET_CYTSP_LOADING = 'GET_CYTSP_LOADING';
export const GET_CYTSP_SUCCESS = 'GET_CYTSP_SUCCESS';
export const GET_CYTSP_ERROR = 'GET_CYTSP_ERROR';

export const getCntYettoScrubParts = () => async (dispatch) => {
  let url = UrlConfig.getCntYettoScrubPartsUrl();
  url = url + '';
  dispatch({
    type: GET_CYTSP_LOADING,
  });
  let header = authHeaderWithToken();
  let res = await get(url);
  if (res && res.status === 200) {
    //success('');
    dispatch({
      type: GET_CYTSP_SUCCESS,
      data: res.data,
    });
  } else if (res && res.isAxiosError) {
    //error('');
    dispatch({
      type: GET_CYTSP_ERROR,
    });
  }
};
