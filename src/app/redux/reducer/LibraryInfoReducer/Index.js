import {
  GET_APPYER_SUCCESS,
  GET_COMYER_SUCCESS,
  GET_CUCP_SUCCESS,
  GET_CUDBP_SUCCESS,
  GET_CUQCP_SUCCESS,
  GET_CYTSP_SUCCESS,
} from '../../actions/LibraryInfo/ligraryInfoActions';

const initialState = {
  appreciationList: [],
  complaintsList: [],
  creationPartsList: [],
  DBPartsList: [],
  QCPartsList: [],
  ScrubPartsList: [],
};

const LibraryInfoReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_APPYER_SUCCESS: {
      return {
        ...state,
        appreciationList: action.payload,
      };
    }
    case GET_COMYER_SUCCESS: {
      return {
        ...state,
        complaintsList: action.payload,
      };
    }
    case GET_CUCP_SUCCESS: {
      return {
        ...state,
        creationPartsList: action.payload,
      };
    }
    case GET_CUDBP_SUCCESS: {
      return {
        ...state,
        DBPartsList: action.payload,
      };
    }
    case GET_CUQCP_SUCCESS: {
      return {
        ...state,
        QCPartsList: action.payload,
      };
    }
    case GET_CYTSP_SUCCESS: {
      return {
        ...state,
        ScrubPartsList: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default LibraryInfoReducer;
