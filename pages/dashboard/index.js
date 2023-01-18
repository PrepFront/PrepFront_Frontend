import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import STORE_UTIL from "../../utils/native/local-storage"
import CONSTANT from "../../utils/constants/NamesForKeys"
import LINKS from "../../utils/constants/Backend_links"
import API from "../../utils/api"
import Box from "../../Containers/Box";
import Sidebar from "../../Containers/Sidebar";
import MainSection from "../../Containers/MainSection";

export default function (props) {
    const router = useRouter()
    const [user, setUser] = useState({})

    async function handleFetch(access_token, refresh_token) {
        try {
            const res = await getUserDetails(access_token)
            setUser(res.data)
        } catch (e) {
            handleAccessTokenFromRefresh(refresh_token)
        }
    }

    async function handleAccessTokenFromRefresh(refresh_token) {
        const { data } = await getTokensFromApi(refresh_token)
        STORE_UTIL.setItem(CONSTANT.TOKENS_KEY,data)
        handleFetch(data.accessToken,data.refresh_token)
    }

    useEffect(() => {
        if (!STORE_UTIL.isPresent(CONSTANT.TOKENS_KEY)) {
            router.push('dashboard/login')
        }
        else {
            const { access_token, refresh_token } = STORE_UTIL.getItem(CONSTANT.TOKENS_KEY)
            handleFetch(access_token, refresh_token)
        }
    },[])

    return (
        <Box className = 'w-full h-screen block'>
            <Sidebar/>
            <MainSection/>
        </Box>
    )
}

async function getUserDetails(accessToken) {
    return await API.get(LINKS.ROUTES.USER.USER_DETAIL, {
        headers: {
            "authorization": `Bearer ${accessToken}`
        }
    })
}

async function getTokensFromApi(refresh_token) {
    return await API.get(LINKS.ROUTES.USER.TOKEN, {
        refresh_token
    })
}