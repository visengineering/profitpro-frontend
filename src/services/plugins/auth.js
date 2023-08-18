import { AuthService as AuthPluginService } from ".";

const authService = AuthPluginService("/");

class AuthService{
  static login(data) {
    console.log("params",data)
    return authService({
      method: "POST",
      url: "wp-json/jwt-auth/v1/token",
      data:data,
    });
  }
}

export default AuthService;



