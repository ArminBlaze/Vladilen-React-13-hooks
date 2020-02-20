import React, {useContext, useState} from 'react';
import { AlertContext } from 'context/alert/AlertContext';

const Search = () => {
  const {showAlert} = useContext(AlertContext);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(value.length === 0) showAlert('Вы ничего не ввели', 'danger')
    
    console.log(value);
    
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