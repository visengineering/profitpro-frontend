import { PluginService } from ".";

const userService = PluginService("/users");

class UserService {
  static getSaleRepresentativeByDealerShip(params) {
    return userService({
      method: "GET",
      url: "",
      params,
    });
  }

  static getSaleRepresentativeByDealerShipById(userId, params) {
    return userService({
      method: "GET",
      url: `/${userId}/transcripts`,
      params,
    });
  }

  static getAllActiveUser() {
    return userService({
      method: "GET",
      url: "/active",
    });
  }

  static getActiveConversation(userId) {
    return userService({
      method: "GET",
      url: `${userId}/transcripts/active`,
    });
  }
}

export default UserService;
