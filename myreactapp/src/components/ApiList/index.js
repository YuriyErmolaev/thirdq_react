import { CircularProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import { getAllGists } from "../../store/ApiList/actions";
import {selectGists, selectGistsError, selectGistsLoading} from '../../store/ApiList/selector';


// export const API_URL_PUBLIC = "https://api.github.com/gists/public";
export const API_URL_GIST = "https://api.github.com/gists/";

// const gists = [];

export const ApiList = () => {
      
    // const [gists, setGists] = useState([]);
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);


    const dispatch = useDispatch();
    const gists = useSelector(selectGists);
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);

    // const requestGists = async () => {
    //   setLoading(true);  
    //   try {
    //     const response = await fetch(API_URL_PUBLIC);  
    //     if (!response.ok) {
    //       throw new Error(`Request failed with status ${response.status}`);
    //     }  
    //     const result = await response.json();
    //     setGists(result);
    //   } catch (err) {
    //     setError(true);
    //     console.warn(err);
    //   } finally {
    //     // setLoading(false);
    //     setTimeout(()=>{setLoading(false)}, 1000);
    //   }
    // };

    const requestGists = () => {
      dispatch(getAllGists());
    };
        
    useEffect(() => {      
      requestGists();
    }, []);
     
    
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
  
    // return (
    //     <ul>
    //         <li key='g0'>Gist dummy test</li>
    //         {gists.map(renderGist)}
    //     </ul>
    //     );
};

export default ApiList;