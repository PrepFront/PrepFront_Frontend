import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import Drawer from '../../components/Drawer'
import MainSection from '../../components/MainSection'
import COLORS from '../../constants/Colors'
import Councelling from '../../containers/Councelling'
import Dashbord from '../../containers/Dashbord'
import DCS from '../../containers/DCS'
import ImportantResources from '../../containers/ImportantResources'
import NonTechnicalResorces from '../../containers/NonTechnicalResorces'
import TechnicalResources from '../../containers/TechnicalResources'
import STORE_UTIL from "../../utils/native/local-storage"
import CONSTANT from '../../constants/NamesForKeys'
import API from "../../utils/api"
import { useRouter } from "next/router";
import LINKS from "../../constants/Backend_links"


export default function (props) {
    const router = useRouter()
    const [activeIdx, setIdx] = useState(1)
    const [drawerVisible, setVisibility] = useState(true)
    const [currentHeading, setCurrentHeading] = useState(TABS[activeIdx].label)
    const [user, setUser] = useState({})

    const token = STORE_UTIL.getItem(CONSTANT.TOKENS_KEY)


    useEffect(() => {


        if (!STORE_UTIL.isPresent(CONSTANT.TOKENS_KEY)) {
            router.push('dashboard/login')
        }
        else {
            getUserDetails(token).then(
                (obj) => { setUser(obj.data) }
            )            // try {
            //     const { data } = await getUserDetails(token)
            //     setUser(data)
            //     console.log(data);
            // } catch (e) {
            //     console.log(e)
            // }
        }


    }, [])

    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                backgroundColor: COLORS.background
            }}
            display='flex'
            flexDirection='row'
        >
            <Drawer
                TABS={TABS}
                activeIdx={activeIdx}
                setActiveIdx={setIdx}
                visible={drawerVisible}
                setVisible={setVisibility}
                setCurrentHeading={setCurrentHeading}
            />
            <MainSection
                currentHeading={currentHeading}
                activeIdx={activeIdx}
                TABS={TABS}
                collapse={drawerVisible}
                user={user}
            />
        </Box>
    )
}

function getUserDetails(accessToken) {
    return API.get(LINKS.ROUTES.USER.USER_DETAIL, {
        headers: {
            "authorization": `Bearer ${accessToken}`
        }
    })
}

const TABS = [
    {
        label: 'Dashboard',
        component: Dashbord
    },
    {
        label: 'Important Resources',
        component: ImportantResources
    },
    {
        label: 'Technical Resources',
        component: TechnicalResources
    },
    {
        label: 'Non-Technical Resources',
        component: NonTechnicalResorces
    },
    {
        label: '1 on 1 Councelling',
        component: Councelling
    },
    {
        label: 'DCS Session',
        component: DCS
    }
]


