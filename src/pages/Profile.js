import React from 'react';
import { useContext } from 'react';
import { githubContext } from 'context/github/githubContext';
import { useEffect } from 'react';

 
const Profile = ({match}) => {
  const username = match.params.name;
  const {getUser, getRepos, loading, user, repos} = useContext(githubContext);

  
  useEffect(() => {
    debugger;
    getUser(username);
    getRepos(username);

  }, [username, getUser, getRepos])

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
            <div className='col'>
              { bio && <>
                <h3>Биография</h3>
                <p>{bio}</p>
              </>}
              <a href={html_url} target='_blank' rel='noopener noreferrer' className='btn btn-dark'>Открыть профиль</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Profile;