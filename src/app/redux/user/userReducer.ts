import { SET_USER, REMOVE_USER, UserActionTypes, User } from './userAction';

const initialState: User | null = null;

const userReducer = (state = initialState, action: UserActionTypes): User | null => {
    switch (action.type) {
        case SET_USER:
            return action.payload;
        case REMOVE_USER:
            return null;
        default:
            return state;
    }
};

export default userReducer;