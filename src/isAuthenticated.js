import Axios from 'axios';
export const isAuthenticated = () => {
    let userLocal = localStorage.getItem("@social-network/session/user");
    let tokenLocal = localStorage.getItem("@social-network/session/token");
    if(userLocal !== null && tokenLocal !== null) {
        let obj = {
            user : userLocal,
            token : tokenLocal
        }
        Axios.post("http://localhost:8080/session/validate",obj).then(result => {
            return result.data;
        });
    } else return false;
}
