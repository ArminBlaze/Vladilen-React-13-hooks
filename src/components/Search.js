import React,{useContext} from 'react';
import { AlertContext } from 'context/alert/AlertContext';

const Search = () => {
  const {showAlert} = useContext(AlertContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    let value = e.target.name.value.trim();
    if(value.length === 0) showAlert('Вы ничего не ввели', 'danger')

    console.log(value);
    
  }

  return (
    <form className='form-group' onSubmit={handleSubmit}>
      <input 
        type="text"
        name='name'
        className='form-control'
        placeholder='Введите ник пользователя...'
      />
    </form>
  );
}
 
export default Search;