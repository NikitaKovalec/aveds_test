export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';

export interface User {
    login: string;
    password: string;
    name: string;
}

interface SetUserAction {
    type: typeof SET_USER;
    payload: User;
}

interface RemoveUserAction {
    type: typeof REMOVE_USER
}

export type UserActionTypes = SetUserAction | RemoveUserAction;

export const setUser = (user: User): UserActionTypes => ({
    type: SET_USER,
    payload: user,
});

export const removeUser = (): UserActionTypes => ({
    type: REMOVE_USER,
});