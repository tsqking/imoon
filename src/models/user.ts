import moment from 'moment';
import { createUUID, UUID } from './uuid';

export interface User {
  id: UUID;
  nickName: string;
  name?: string;
  gender?: gender;
  age?: number;
  birthDay?: moment.Moment;
  address?: string;
}

enum gender {
  male = 'male',
  femal = 'female',
  unset = 'unset',
}

export const createUser = (): User => {
  return {
    id: createUUID(),
    nickName: '',
    name: '',
    gender: gender.unset,
  };
};
