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

  static getSaleRepresentativeByDealerShipById(userId) {
    return userService({
      method: "GET",
      url: `/${userId}`,
    });
  }
}

export default UserService;
