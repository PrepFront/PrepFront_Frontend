import api from "../api/index";
import BACKEND_LINK from "../../constants/Backend_links";

export function getNonTechResources() {
    return api.get(BACKEND_LINK.ROUTES.SERVICES.NON_TECH)
}