import { User } from 'graphql/types';

export enum UserTypes {
  SET_USER = 'SET_USER',
  USER_LOGOUT = 'USER_LOGOUT',
}

export type UserState = User & {
  userId?: string;
};

export type UserAction = {
  type: UserTypes;
  data: Record<keyof UserState, string>;
};

export type GetUserVars = {
  id: number;
};
export type GetUserData = {
  id: number;
  username: string;
};
