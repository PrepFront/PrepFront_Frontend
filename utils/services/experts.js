import api from "../api";
import CONSTANT from '../../constants/Backend_links'

export function getExperts(){
    return api.get(CONSTANT.ROUTES.EXPERT.GET)
}