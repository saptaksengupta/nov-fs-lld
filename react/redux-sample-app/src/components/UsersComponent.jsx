import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsersMiddleware } from '../redux/middleware/UserMiddleware';


export default function UsersComponent() {

    const { isLoading, users, error } = useSelector(store => store.usersSlice);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersMiddleware());
    });

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

    return (
        <>
            {
                users && users.map((user, index) => {
                    return (
                        <div className='users-container'>
                            <div className='id'>{user.id}</div>
                            <div className='name'>{user.name}</div>
                            <div className='username'>{user.username}</div>
                        </div>
                    )
                })
            }
        </>
    )
}
