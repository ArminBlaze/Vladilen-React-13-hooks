import React,{useContext} from 'react';
import { AlertContext } from 'context/alert/AlertContext';

const Search = () => {
  const {showAlert} = useContext(AlertContext);

  const handleInput = (e) => {
    
    if(e.key !== 'Enter') {
      console.log(e.key);
      return;
    }
    e.preventDefault();

    if(e.target.value.length === 0) showAlert('Вы ничего не ввели', 'danger')
  }

  return (
    <form className='form-group'>
      <input 
        type="text"
        className='form-control'
        placeholder='Введите ник пользователя...'
        onKeyPress={handleInput}
      />
    </form>
  );
}
 
export default Search;