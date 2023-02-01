import api from "../api";
import BACKEND_LINK from "../../constants/Backend_links";

export function getTechResources() {
    return api.get(BACKEND_LINK.ROUTES.SERVICES.TECH)
}