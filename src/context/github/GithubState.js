import React from 'react';
import { githubContext } from 'context/github/githubContext';
import { useReducer } from 'react';
import githubReducer from 'context/github/githubReducer';
import { SET_LOADING, SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS } from 'context/constants';
 
const GithubState = ({children}) => {
  const initialState = 	{
    user: {},
		users: [],
		loading: false,
		repos: []
  }
  
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = (value) => {
    setLoading();
    //zapros

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
      value: data
    })
  }

  const getRepos = (name) => {
    setLoading();
    //zapros

    dispatch({
      type: GET_REPOS,
      value: data
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