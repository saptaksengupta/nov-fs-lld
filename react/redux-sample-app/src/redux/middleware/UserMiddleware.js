import UserSlice from "../UserSlice";
import UsersSlice, {  } from "../UsersSlice";

const USER_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

const actions = UsersSlice.actions;
const singleUserActions = UserSlice.actions;

export const fetchUsersMiddleware = () => {
    return async (dispath) => {
        try {

            // handle loading => make it true.
            dispath(actions.showLoading());

            // make the backend call
            const resp = await fetch(USER_ENDPOINT);
            const users = await resp.json();

            setTimeout(() => {
                // set user data => from response  
                dispath(actions.setUsers(users)); 
            }, 2000);
            
            
        } catch(err) {
            // handle error
            dispath(actions.showError())
        }
    }
}


export const getUserByIdMiddleware = (id) => {
    return async(dispatch) => {
        try {
            dispatch(singleUserActions.showUserLoading());
            const resp = await fetch(`${USER_ENDPOINT}?id=${id}`);
            const userResp = await resp.json();
            dispatch(singleUserActions.setUserData(userResp[0]));
        } catch (err) {
            dispatch(singleUserActions.showUserError());      
        }
    }
}