export const GET_GISTS_REQUEST = "GISTS::GET_GISTS_REQUEST";
export const GET_GISTS_SUCCESS = "GISTS::GET_GISTS_SUCCESS";
export const GET_GISTS_FAILURE = "GISTS::GET_GISTS_FAILURE";

const API_URL_PUBLIC = "https://api.github.com/gists/public";

export const getGistsRequest = () => ({
  type: GET_GISTS_REQUEST,
});

export const getGistsSuccess = (data) => ({
  type: GET_GISTS_SUCCESS,
  payload: data,
});

export const getGistsFailure = (err) => ({
  type: GET_GISTS_FAILURE,
  payload: err,
});


export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3,
}

export const getAllGists = () => async (dispatch) => {
    dispatch(getGistsRequest());
  
    try {
      const res = await fetch(API_URL_PUBLIC);
  
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      const result = await res.json();
  
      dispatch(getGistsSuccess(result));
    } catch (err) {
      dispatch(getGistsFailure(err.message));
    }
  };
