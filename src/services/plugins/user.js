import { PluginService } from ".";

const userService = PluginService('/users');

class UserService {
  static getSaleRepresentativeByDealerShip(params, userId) {
    return userService({
      method: "GET",
      url: "/",
      params
    })
  }
}

export default UserService;