export class User {

    constructor(isAuth) {
        this.isAuth = isAuth;
    }

    isAuthenticated() {
        if (this.isAuth) {
            console.log("This user is Authenticated!")
        } else {
            console.log("This user is Not Authenticated!")
        }
        
    }
}