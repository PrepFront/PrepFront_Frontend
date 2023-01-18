import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toast'
import { useState } from 'react'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Box from "../../Containers/Box"
import API from "../../utils/api"
import LINKS from "../../utils/constants/Backend_links"

export default function (props) {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [name, setName] = useState('')
    const [btnLoading, setloading] = useState(false)

    console.log(LINKS.ROUTES.USER.SIGNUP)

    function HandleLogIn() {
        router.push('login')
    }

    function handleClick() {
        setloading(true)
        try {
            const res = handleSignUp({ email, password, name })
            successToast()
            setInterval(HandleLogIn,2000)
        } catch(e){
            errorToast()
        } finally{
            setloading(false)
        }
    }

    function successToast() {
        toast.success("Account created!! redirecting to Login Page")
    }

    function errorToast() {
        toast.error("Check credentials")
    }

    return (
        <Box className={'w-full h-screen bg-[#F3F6F7]'}>
            <Box className={'bg-[#ffffff] px-24 py-16'}>
                <Box className={'bg-[#ffffff] w-96 flex-col'} shadow>
                    <h1 className="uppercase text-purple-700 font-bold text-xl mb-10">Sign up</h1>
                    <Input label="Name" onChange={setName} />
                    <Input label="Email" onChange={setEmail} />
                    <Input label="Password" password onChange={setPass} />
                    <Box className={'w-full mt-2'}>
                        <Box className={'grid grid-cols-1 grid-rows-1 w-full gap-2'}>
                            <Button label={"Create Account"} outline loading={btnLoading} onPress={handleClick} />
                        </Box>
                    </Box>
                    {/* <h1 className='text-dashboard mt-3 font-semibold underline cursor-pointer' onClick={HandleLogIn}>Back</h1> */}
                </Box>
            </Box>
            <ToastContainer />
        </Box>
    )
}

async function handleSignUp({ email, password, name }) {
    return await API.post(LINKS.ROUTES.USER.SIGNUP,{
        email: email,
        password: password,
        full_name: name
    })
}