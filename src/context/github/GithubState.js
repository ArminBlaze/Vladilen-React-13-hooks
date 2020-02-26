import React from 'react';
import { githubContext } from 'context/github/githubContext';
import { useReducer } from 'react';
import githubReducer from 'context/github/githubReducer';
import { SET_LOADING, SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS } from 'context/constants';

// const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
// const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

// const baseUrl = 
 
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
    
    const response = await fetch(`https://api.github.com/search/users?q=${value}`)

    const data = await response.json();

    console.log(data);
    
    dispatch({
      type: SEARCH_USERS,
      value: data.items
    })
  }

  const getUser = async (name) => {
    setLoading();
    //zapros
    const response = await fetch(`https://api.github.com/users/${name}`)

    const data = await response.json();

    console.log(data);

    dispatch({
      type: GET_USER,
      value: data
    })
  }

  const getRepos = async (name) => {
    setLoading();
    //zapros
    const response = await fetch(`https://api.github.com/users/${name}/repos?per_page=5`)

    const data = await response.json();

    console.log(data);

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