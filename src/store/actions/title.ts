import { createAction } from '@reduxjs/toolkit';
import { title_onclick } from './types';

export const onTitleClick = createAction(title_onclick, (value: string) => {
  return {
    payload: {
      value,
    },
  };
});
