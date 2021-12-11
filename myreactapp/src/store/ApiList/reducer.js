import  {STATUSES, GET_GISTS_REQUEST, GET_GISTS_SUCCESS, GET_GISTS_FAILURE} from './actions';

const initialState = {
    gists: [],
    request: STATUSES.IDLE,
    error: null,
};
  
export const apiListReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_GISTS_REQUEST:
        return {
          ...state,
          request: STATUSES.REQUEST,
        };
      case GET_GISTS_SUCCESS:
        return {
          ...state,
          gists: action.payload,
          request: STATUSES.SUCCESS,
        };
      case GET_GISTS_FAILURE:
        return {
          ...state,
          request: STATUSES.FAILURE,
          error: action.payload,
        };
      default:
        return state;
    }
};
  

export default apiListReducer;
  