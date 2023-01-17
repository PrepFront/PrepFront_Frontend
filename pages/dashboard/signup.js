import { useRouter } from 'next/router'
import { FaMailchimp } from 'react-icons/fa'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Box from "../../Containers/Box"

export default function (props) {
    const router = useRouter()
    function HandleLogIn(){
        router.push('login')
    }
    return (
        <Box className={'w-full h-screen bg-[#F3F6F7]'}>
            <Box className={'bg-[#ffffff] px-24 py-16'}>
                <Box className={'bg-[#ffffff] w-96 flex-col'} shadow>
                    <h1 className="uppercase text-purple-700 font-bold text-xl mb-10">Sign up</h1>
                    <Input label="Name" />
                    <Input label="Email" />
                    <Input label="Password" password />
                    <Box className={'w-full mt-2'}>
                        <Box className={'grid grid-cols-1 grid-rows-1 w-full gap-2'}>
                            <Button label={"Create Account"} outline/>
                        </Box>
                    </Box>
                    <h1 className='text-dashboard mt-3 font-semibold underline cursor-pointer' onClick={HandleLogIn}>Back</h1>
                </Box>
            </Box>
        </Box>
    )
}