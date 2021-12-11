import { CircularProgress } from "@mui/material";
import { useCallback, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getAllGists } from "../../store/ApiList/actions";
import {selectGists, selectGistsError, selectGistsLoading} from '../../store/ApiList/selector';

export const ApiList = () => {
   
    const dispatch = useDispatch();
    const gists = useSelector(selectGists);
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);
   
    const requestGists = () => {
      dispatch(getAllGists());
    };
        
    useEffect(() => {      
      requestGists();
    });
     
    
    const renderGist = useCallback(
      (gist) => <li key={gist.id}>{gist.description}</li>,
      []
    );
  
    
    if (loading) {      
      return <CircularProgress />;
    }
        
      
    if (error) {
      return (
        <>
          <h3>Error</h3>
          <button onClick={requestGists}>Retry</button>
        </>
      );
    }
  
    return <ul>{gists.map(renderGist)}</ul>;
  
};

export default ApiList;