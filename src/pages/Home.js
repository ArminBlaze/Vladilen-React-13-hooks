import React from 'react';
import Search from 'components/Search'
import Card from 'components/Card'
import { useContext } from 'react';
import { githubContext } from 'context/github/githubContext';
 
const Home = () => {
  // const cards = new Array(15).fill('').map((_, i) => i)
  const {users, loading} = useContext(githubContext)

  return (
    <>
      <Search />

      <div className='row'>
        { getBody(users, loading) }
      </div>
    </>
  );
}

function getBody(users, loading) {
  if(loading) return <p className='text-center'>Загрузка...</p>
  
  return users.map(user => {
            return (
              <div className='col-sm-4 mb-4' key={user.id}>
                <Card user={user}/>
              </div>
            )
          })
}
 
export default Home;