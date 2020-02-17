import React from 'react';
import {AlertContext} from './AlertContext'
 
const AlertState = ({children}) => {
  return (
    <AlertContext.Provider>
      {children}
    </AlertContext.Provider>
  );
}
 
export default AlertState;