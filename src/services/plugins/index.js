import { AuthorizedService } from "../index";

export const PluginService = (url) => AuthorizedService(url);
export const AuthService = (url) => AuthorizedService(url, true);
