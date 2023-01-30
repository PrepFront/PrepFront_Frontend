import { Box } from '@mui/material'
import { useState } from 'react'
import Drawer from '../../components/Drawer'
import MainSection from '../../components/MainSection'
import COLORS from '../../constants/Colors'
import Councelling from '../../containers/Councelling'
import Dashbord from '../../containers/Dashbord'
import DCS from '../../containers/DCS'
import ImportantResources from '../../containers/ImportantResources'
import NonTechnicalResorces from '../../containers/NonTechnicalResorces'
import TechnicalResources from '../../containers/TechnicalResources'

export default function (props) {
    const [activeIdx, setIdx] = useState(1)
    const [drawerVisible, setVisibility] = useState(true)
    const [currentHeading, setCurrentHeading] = useState(TABS[0].label)
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
                collapse = {drawerVisible}
            />
        </Box>
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


