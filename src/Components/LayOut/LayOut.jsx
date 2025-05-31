import React from 'react'
import Header from '../Header/Header'
import { useLocation } from 'react-router-dom';

const LayOut = ({children}) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default LayOut
