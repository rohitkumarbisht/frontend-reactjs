import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import {AUTH_ERROR} from "../constants/CommonConstants"

const cookies = new Cookies();

export const AuthenticateUser = () => {
  try {
    const authToken = cookies.get("Authorization");
    const {roles} = jwtDecode(cookies.get("Authorization"));
    const {jti} = jwtDecode(cookies.get("Authorization"));
    return { isAdmin: roles === "ROLE_ADMIN", decoded: jti, authToken };
  } catch (error) {
    console.error("AuthToken not found! Please login again:", error);
    const auth_error = AUTH_ERROR
    const status = 401;
    return { auth_error, status};
  }
};


