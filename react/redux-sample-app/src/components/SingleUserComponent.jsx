import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUserByIdMiddleware } from '../redux/middleware/UserMiddleware';

export default function SingleUserComponent() {
    const { user, isLoading, error } = useSelector(store => store.userSlice);
    const dispatch = useDispatch();
    const USER_ID_TO_FETCH = 5;
    useEffect(() => {
        dispatch(getUserByIdMiddleware(USER_ID_TO_FETCH));
    }, []);


    if (isLoading) {
        return (
            <div className='loader-container'>
                Loading...
            </div>
        )
    }

    if (error) {
        return (
            <div className='error-container'>
                <p>Error in fetching users...</p>
            </div>
        )
    }
    
    if (user) {
        return (
            <div className='users-container'>
                <div className='id'>{user.id}</div>
                <div className='name'>{user.name}</div>
                <div className='username'>{user.username}</div>
            </div>
        )
    }
}
