const BACKEND_LINK= 'https://prep-front-backend.onrender.com/api'
export default {
    ROUTES: {
        SERVICES: {

        },
        USER: {
            SIGNUP: `${BACKEND_LINK}/user/signup`,
            LOGIN: `${BACKEND_LINK}/user/login`,
            TOKEN: `${BACKEND_LINK}/user/token`,
            USER_DETAIL: `${BACKEND_LINK}/user/me`,
        }
    },
}