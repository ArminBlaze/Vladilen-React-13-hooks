import React,{useContext} from 'react';
import { AlertContext } from 'context/alert/AlertContext';

const Search = () => {
  const {showAlert} = useContext(AlertContext);

  const handleInput = (e) => {
    if(e.target.value.length === 0) showAlert('Вы ничего не ввели')
  }

  return (
    <form className='form-group'>
      <input 
        type="text"
        className='form-control'
        placeholder='Введите ник пользователя...'
        onClick={handleInput}
      />
    </form>
  );
}
 
export default Search;