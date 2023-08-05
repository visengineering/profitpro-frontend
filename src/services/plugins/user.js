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
      params
    });
  }
}

export default UserService;
