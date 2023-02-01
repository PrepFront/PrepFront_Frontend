const BACKEND_LINK= 'https://prep-front-backend.onrender.com/api'
export default {
    ROUTES: {
        SERVICES: {
            TECH: `${BACKEND_LINK}/service/tech-skills`,
            NON_TECH: `${BACKEND_LINK}/service/non-tech-skills`,
            INIT: `${BACKEND_LINK}/service/init-step`,
        },
        USER: {
            SIGNUP: `${BACKEND_LINK}/user/signup`,
            LOGIN: `${BACKEND_LINK}/user/login`,
            TOKEN: `${BACKEND_LINK}/user/token`,
            USER_DETAIL: `${BACKEND_LINK}/user/me`,
        }
    },
}