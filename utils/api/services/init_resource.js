import api from "../api/index";
import BACKEND_LINK from "../../constants/Backend_links";

export function getInitResource() {
    return api.get(BACKEND_LINK.ROUTES.SERVICES.INIT)
}