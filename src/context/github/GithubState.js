import React from 'react';
import { githubContext } from 'context/github/githubContext';
import { useReducer } from 'react';
import githubReducer from 'context/github/githubReducer';
import { SET_LOADING, SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS } from 'context/constants';
import { useCallback } from 'react';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const credentials = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`; 
 
const GithubState = ({children}) => {
  const initialState = 	{
    user: {},
		users: [],
		loading: false,
		repos: []
  }

  
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setLoading = useCallback( () => {
    dispatch({type: SET_LOADING})
  }, [])

  const searchUsers = useCallback( async (value) => {
    setLoading();
    
    const response = await fetch(`https://api.github.com/search/users?q=${value}&` + credentials)

    const data = await response.json();

    console.log(data);
    
    dispatch({
      type: SEARCH_USERS,
      value: data.items
    })
  }, [setLoading])

  const getUser = useCallback( async (name) => {
    setLoading();
    //zapros
    const response = await fetch(`https://api.github.com/users/${name}?` + credentials)

    const data = await response.json();

    console.log(data);

    dispatch({
      type: GET_USER,
      value: data
    })
  }, [setLoading])

  const getRepos = useCallback(async (name) => {
    setLoading();
    //zapros
    const response = await fetch(`https://api.github.com/users/${name}/repos?per_page=5&` + credentials)

    const data = await response.json();

    console.log(data);

    dispatch({
      type: GET_REPOS,
      value: data
    })
  }, [setLoading])


  const clearUsers = useCallback( () => {
    dispatch({
      type: CLEAR_USERS
    })
  }, []);

  

  return (
    <githubContext.Provider value={{
      user: state.user,
      users: state.users,
      loading: state.loading, 
      repos: state.repos,
      searchUsers,
      getUser,
      getRepos,
      clearUsers,
      setLoading
    }}>
      {children}
      {console.log('GithubState render')
      }
    </githubContext.Provider>
  );
}
 
export default GithubState;