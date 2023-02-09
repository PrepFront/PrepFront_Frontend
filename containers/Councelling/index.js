import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import { useRef, useState } from "react";
import { useQuery } from "react-query";
import WaitForData from "../../components/WaitForData";
import Colors from "../../constants/Colors";
import { getExperts } from "../../utils/services/experts";

export default function (props) {

    const [expert, setExpert] = useState(null)
    const dateRef = useRef()

    const expertQuery = useQuery({
        queryKey: ['Experts'],
        queryFn: getExperts,
        staleTime: 20 * 3600 * 1000 // 20min
    })

    return (
        <WaitForData objects={[expertQuery]}>
            <Box
                gap={1}
                sx={{
                    display: 'flex',
                    backgroundColor: 'white',
                    margin: 2,
                    height: '95%',
                    borderRadius: 3,
                }}
            >
                <Box display={'block'} flexFlow={1} flexGrow={1} sx={{ overflowY: 'scroll', padding: 2 }} width={'1fr'}>
                    <Stack gap={2} display={'grid'} width={'100%'}>
                        {
                            expertQuery.data?.data.map((expert, index) => {
                                return (
                                    <ExpertCard
                                        key={index}
                                        expert={expert}
                                        onClick={() => { setExpert(expert) }}
                                    />
                                )
                            })
                        }
                    </Stack>
                </Box>
                <Box flexFlow={1} flexGrow={1} padding={2} display='block' width={'1fr'} >
                    <Box>
                        <Typography fontWeight={900} fontSize={30} marginBottom={2} >Scheduling Details</Typography>
                        {
                            !expert ? (
                                <Typography>You need to Select atleast one expert in order to continue</Typography>
                            ) : (
                                <Typography>
                                    Your meeting is going to be scheduled with
                                    {
                                        <Typography fontWeight={700} fontSize={25} color={Colors.accent}>
                                            {expert.name} <span className="text-sm italic text-gray-500" >{`(${expert.position} at ${expert.organization})`}</span>
                                        </Typography>
                                    }
                                </Typography>
                            )
                        }
                        <TextField
                            id="datetime-local"
                            label="Appointment"
                            type="datetime-local"
                            sx={{ width: '100%', marginTop: 2 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputRef={dateRef}
                        />
                        <button>
                            Submit
                        </button>
                    </Box>
                </Box>
            </Box>
        </WaitForData>
    )
}

function ExpertCard({ expert, onClick }) {

    const { name, email, profession, position, organization } = expert
    return (
        <Box
            onClick={onClick}
            sx={{
                padding: 2,
                borderWidth: '2px',
                borderColor: '#f0f0f0',
                borderRadius: 1,
                cursor: 'pointer',
                transition: 'all 300 ease-in-out',
                ':hover': {
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
                },
                height: 'max-content',
                justifyContent: 'start',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Typography fontSize={20} fontWeight='bold'>
                {name}
                <span className=" text-gray-500 text-sm italic" >{` (${profession})`}</span>
            </Typography>
            <Typography fontSize={15} color='GrayText'>{email}</Typography>
            <Typography>{position} at</Typography>
            <Typography>{organization}</Typography>
        </Box>
    )
}

function getDateTimeString() {
    const d = new Date()
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}T${d.toLocaleTimeString()}`
}