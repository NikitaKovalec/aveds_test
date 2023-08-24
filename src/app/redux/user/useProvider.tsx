import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, User } from './userAction';

const UserProvider: React.FC = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser: User = JSON.parse(storedUser);
            dispatch(setUser(parsedUser));
        }
    }, [dispatch]);

    return <>{children}</>;
};

export default UserProvider;