import { AuthService as AuthPluginService } from ".";

const authService = AuthPluginService("/");

class AuthService {
  static login(data) {
    return authService({
      method: "POST",
      url: "auth/login",
      data: data,
    });
  }
}

export default AuthService;
