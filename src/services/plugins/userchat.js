import { PluginService } from ".";

const allChatUser = PluginService("/allChatUser");

class UserChat {
  static getAllChatUser() {
    return allChatUser({
      method: "GET",
      //   url: `/${params}`,
    });
  }
}
export default UserChat;
