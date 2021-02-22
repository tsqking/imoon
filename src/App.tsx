import React from 'react';
import './App.scss';
import { AppDispatch, useAppDispatch } from './store';
import { ON_LOGIN_TITLE_CLICK } from './store/actions/types';

const App: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  
  const onClick = () => {
    dispatch({ type: ON_LOGIN_TITLE_CLICK });
  };

  return (
    <div className='App'>
      <div className='title' onClick={onClick}>
        用户登陆
      </div>
    </div>
  );
};

export default App;
