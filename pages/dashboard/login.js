import { useState } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toast'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Box from "../../Containers/Box"

import API from "../../utils/api"
import LINKS from "../../utils/constants/Backend_links"
import NAME from "../../utils/constants/NamesForKeys"
import LOCALSTORAGEUTIL from "../../utils/native/local-storage"


export default function (props) {
    const router = useRouter()
    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)
    const [btnLoading, setLoading] = useState(false)

    function HandleAccountCreation() {
        router.push('signup')
    }

    function getEmail(e) {
        setEmail(e.target.value)
    }

    function getPass(e) {
        setPass(e.target.value)
    }

    function errorToast() {
        toast.error("Credentials seems a bit incorrect!!")
    }

    function successToast() {
        toast.success("Login successful!!")
    }

    async function handleFormSubmit() {
        setLoading(true)
        try {
            const res = await handleLogin({ email, pass })
            LOCALSTORAGEUTIL.setItem(NAME.TOKENS_KEY,res.data)
            router.push('/dashboard')
            successToast()
        } catch (e) {
            errorToast()
        } finally {
            setLoading(false)
        }
    }

    return (
        <Box className={'w-full h-screen bg-[#F3F6F7]'}>
            <Box className={'bg-[#ffffff] px-24 py-16'}>
                <Box className={'bg-[#ffffff] w-96 flex-col'} shadow>
                    <h1 className="uppercase text-purple-700 font-bold text-xl mb-10">Login</h1>
                    <Input label="Email" name="email" onChange={getEmail} />
                    <Input label="Password" password name="password" onChange={getPass} />
                    <Box className={'w-full mt-2'}>
                        <Box className={'grid grid-cols-2 grid-rows-1 w-full gap-2'}>
                            <Button label={"Log In"} onPress={handleFormSubmit} loading={btnLoading} />
                            <Button label={"Create Account"} outline onPress={HandleAccountCreation} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <ToastContainer />
        </Box>
    )
}

async function handleLogin({ email, pass }) {
    return await API.post(LINKS.ROUTES.USER.LOGIN, {
        email: email,
        password: pass
    })
}

export async function getServerSideProps() {

    const data = {} ;
    
    return {
        props : {data}
    }
 }