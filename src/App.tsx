import React from 'react';
import './App.scss';
import { AppDispatch, useAppDispatch } from './store';
import { onTitleClick } from './store/actions/title';

const App: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(onTitleClick('title'));
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
