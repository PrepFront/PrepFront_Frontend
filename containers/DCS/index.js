import { Box, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from "@mui/material";
import { useQuery } from "react-query";
import WaitForData from "../../components/WaitForData";
import { getDCSLinks } from "../../utils/services/dcs";
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { Settings } from "@mui/icons-material";

export default function (props) {

    const dcsQuery = useQuery({
        queryKey: ["dcs"],
        queryFn: getDCSLinks,
        staleTime: 1000 * 20 * 60 // 20 min 
    })

    return (
        <WaitForData objects={[dcsQuery]} >
            <Box sx={{
                flex: '1 1 auto',
                backgroundColor: 'white',
                margin: 2
            }}>
                {
                    dcsQuery.data?.data.length === 0 ? (
                        <div style={{ color: 'GrayText' }} className="w-full p-5 font-bold text-3xl">
                            No session is available yet
                        </div>
                    ) : (
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {
                                        TABLE_HEAD.map((val, index) => (
                                            <TableCell align="center" sx={{ fontWeight: 900 }} key={index}>{val}&nbsp;</TableCell>
                                        ))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {processArray(dcsQuery.data?.data).map((elem, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">
                                            {elem.sno}
                                        </TableCell>
                                        <TableCell align="center">{elem.title}</TableCell>
                                        <TableCell align="center">{elem.taken_by}</TableCell>
                                        <TableCell align="center">{elem.time}</TableCell>
                                        <TableCell align="center">
                                            <a href={elem.url} target='_blank'>
                                                <Tooltip title="Enter Room">
                                                    <IconButton>
                                                        <OpenInNewRoundedIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )
                }
            </Box>
        </WaitForData>
    )
}


const TABLE_HEAD = [
    'S.No',
    'Title',
    'Taken by',
    'Time',
    'Meet URL'
]

function processArray(arr) {
    if (!arr) return []
    return arr.map((elem, index) => {
        return {
            sno: index + 1,
            title: elem.name,
            taken_by: elem.expert.name,
            time: (new Date(elem.time)).toLocaleString(),
            url: elem.meetingUrl
        }
    })
}