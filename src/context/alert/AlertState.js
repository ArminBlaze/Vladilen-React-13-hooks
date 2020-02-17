import React, {useReducer} from 'react';
import {AlertContext} from './AlertContext'
import AlertReducer from './AlertReducer';
import {SHOW_ALERT, HIDE_ALERT} from '../constants'

 
const AlertState = ({children}) => {
  const [state, dispatch] = useReducer(AlertReducer, null);

  const showAlert = (text) => {
    dispatch({
      type: SHOW_ALERT,
      value: {text}
    })
  }

  const hideAlert = () => {
    dispatch({type: HIDE_ALERT})
  }

  return (
    <AlertContext.Provider value={{alert: state, showAlert, hideAlert}}>
      {children}
    </AlertContext.Provider>
  );
}
 
export default AlertState;