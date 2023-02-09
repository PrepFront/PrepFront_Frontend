import api from "../api";
import CONSTANTS from '../../constants/Backend_links'

export function getDCSLinks(){
    return api.get(CONSTANTS.ROUTES.SERVICES.DCS)
}