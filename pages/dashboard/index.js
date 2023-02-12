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
import API from "../../utils/api"
import { useRouter } from "next/router";
import LINKS from "../../constants/Backend_links"
import useTokenState from '../../custom-hooks/userHooks/useTokenState'
import Loader from '../../components/loader'
import { useQuery } from 'react-query'
import UserAPI from "../../utils/api/User";
import WaitForData from '../../components/WaitForData'
import Head from 'next/head'


export default function (props) {

    const userQuery = useQuery({
        queryFn: UserAPI.getUserDetails,
        queryKey: ['user'],
    })

    const router = useRouter()
    const [activeIdx, setIdx] = useState(1)
    const [drawerVisible, setVisibility] = useState(true)
    const [currentHeading, setCurrentHeading] = useState(TABS[activeIdx].label)
    const [loading, setLoading] = useState(true)

    const { Tokens, DeleteToken } = useTokenState()

    useEffect(() => {
        if (!Tokens) {
            router.push('dashboard/login')
        } else {
            setLoading(false)
            console.log(Tokens)
        }
    }, [])

    useEffect(() => {
        if (userQuery.isError) {
            DeleteToken()
            router.push('dashboard/login')
        }
        console.log(userQuery.error)
    }, [userQuery.isError])

    if (loading) {
        return <Loader message={'Loading.....'} />
    }

    return (
        <>
            <Head>
                <title>Dashbaord</title>
                <meta name="description" content="Your pathway to successful career🚀" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <WaitForData objects={[userQuery]} >
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
                        user={userQuery.data?.data}
                    />
                </Box>
            </WaitForData>
        </>
    )
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


