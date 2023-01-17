import { FaMailchimp } from 'react-icons/fa'
import { useRouter } from 'next/router'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Box from "../../Containers/Box"

export default function (props) {
    const router = useRouter()
    function HandleAccountCreation(){
        router.push('signup')
    }
    return (
        <Box className={'w-full h-screen bg-[#F3F6F7]'}>
            <Box className={'bg-[#ffffff] px-24 py-16'}>
                <Box className={'bg-[#ffffff] w-96 flex-col'} shadow>
                    <h1 className="uppercase text-purple-700 font-bold text-xl mb-10">Login</h1>
                    <Input label="Email" />
                    <Input label="Password" password />
                    <Box className={'w-full mt-2'}>
                        <Box className={'grid grid-cols-2 grid-rows-1 w-full gap-2'}>
                            <Button label={"Log In"} />
                            <Button label={"Create Account"} outline onPress={HandleAccountCreation} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

