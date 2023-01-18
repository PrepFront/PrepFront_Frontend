import DashButton from "../../components/DASHBOARD/DashButton";
import Box from "../../Containers/Box";
import { GiHamburgerMenu } from 'react-icons/gi'

export default function (props) {
    return (
        <Box className=' w-[20%] h-screen bg-dashboard'>
            <DashButton onclick={()=>{console.log("hello")}} Icon={() => <GiHamburgerMenu fill="#3F4CB0" />} name="close" />
        </Box>
    )
}