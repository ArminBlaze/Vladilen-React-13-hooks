import React, {useContext, useState} from 'react';
import { AlertContext } from 'context/alert/AlertContext';
import { githubContext } from 'context/github/githubContext';

const Search = () => {
  const {showAlert, hideAlert} = useContext(AlertContext);
  const {searchUsers, clearUsers} = useContext(githubContext);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    clearUsers();

    if(value.length === 0) {
      showAlert('Вы ничего не ввели', 'danger')
      return;
    }
    
    console.log(value);
    hideAlert();
    searchUsers(value)
  }
  
  const handleChange = (e) => {
    const value = e.target.value.trim();
    setValue(value);
  }

  return (
    <form className='form-group' onSubmit={handleSubmit}>
      <input 
        type="text"
        name='name'
        className='form-control'
        placeholder='Введите ник пользователя...'
        onChange={handleChange}
        value={value}
      />
    </form>
  );
}
 
export default Search;