import React from 'react';
import { useContext } from 'react';
import { githubContext } from 'context/github/githubContext';
import { useEffect } from 'react';
import { useCallback } from 'react';

 
const Profile = ({match}) => {
  const username = match.params.name;
  const {getUser, getRepos, loading, user, repos} = useContext(githubContext);

  const fetchData = useCallback(() => {
    getUser(username);
    getRepos(username);
  }, [username]);

  useEffect(() => {
    console.log(getUser);
    debugger;
    fetchData();
  }, [username, fetchData])

  if(loading) return <p>Данные пользователя загружаются...</p>

  const {name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists} = user;
  
  return (
    <div>
      <h1>Profile Page</h1>
      <div className='card mb-4'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-sm-3 text-center'>
              <img src={avatar_url} alt={name} style={{width: '150px'}}/>
              <h1>{name}</h1>
              { location && <p>Местоположение: {location}</p> }
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Profile;