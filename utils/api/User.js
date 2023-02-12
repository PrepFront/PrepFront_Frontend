import LINKS from '../../constants/Backend_links'
import API from '../api'
import STORE_UTILS from '../../utils/native/local-storage'
import CONSTANTS from '../../constants/NamesForKeys'

export default {
    getUserDetails() {
        return API.get(LINKS.ROUTES.USER.USER_DETAIL, {
            headers: {
                "authorization": `Bearer ${STORE_UTILS.getItem(CONSTANTS.TOKENS_KEY).access_token}`
            }
        })
    },
    makeAuthenticatedRequests(url, data) {
        return API.post(url, data, {
            headers: {
                "authorization": `Bearer ${STORE_UTILS.getItem(CONSTANTS.TOKENS_KEY).access_token}`
            }
        })
    }
}