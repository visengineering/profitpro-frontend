import { PluginService } from ".";

const allActiveUser = PluginService("/allActiveUser");

class AllActiveUser {
  static getAllActiveUser() {
    return allActiveUser({
      method: "GET",
      url: "",
    });
  }
}
export default AllActiveUser;
