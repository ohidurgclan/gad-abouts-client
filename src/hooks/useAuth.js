import { useContext } from "react";
import { AuthContext } from "../contexts/Authprovider";

const useAuth = () => {
    return useContext(AuthContext);
}
export default useAuth;