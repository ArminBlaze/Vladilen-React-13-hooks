import React from 'react';
import { githubContext } from 'context/github/githubContext';
import { useReducer } from 'react';
import githubReducer from 'context/github/githubReducer';
import { SET_LOADING, SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS } from 'context/constants';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
 
const GithubState = ({children}) => {
  const initialState = 	{
    user: {},
		users: [],
		loading: false,
		repos: []
  }

  
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (value) => {
    setLoading();
    //zapros
    const response = await fetch(`https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)

    const data = await response.json();

    console.log(data);
    
    dispatch({
      type: SEARCH_USERS,
      value: data
    })

    
  }

  const getUser = (name) => {
    setLoading();
    //zapros

    dispatch({
      type: GET_USER,
      // value: data
    })
  }

  const getRepos = (name) => {
    setLoading();
    //zapros

    dispatch({
      type: GET_REPOS,
      // value: data
    })
  }

  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS
    })
  }

  const setLoading = () => {
    dispatch({type: SET_LOADING})
  }

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
    </githubContext.Provider>
  );
}
 
export default GithubState;