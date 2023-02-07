import COLOR from "../../constants/Colors";
import { AppBar, Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function ({
    TABS,
    currentHeading,
    activeIdx,
}) {
    const Content = TABS[activeIdx].component
    let height = 0

    useEffect(()=>{
        height=document.querySelector('#appBar').clientHeight
        console.dir(height)
    },[])
    return (
        <Box sx={{ width: '100%' }} height='100vh'>
            <div id='appBar'>
                {
                    activeIdx !== 0 && (
                        <Box
                            sx={{
                                boxShadow: 0,
                                padding: 5,
                                fontWeight: 'bold',
                                color: COLOR.text,
                                fontSize: 25,
                            }}
                            >
                            {currentHeading.toUpperCase()}
                        </Box>
                    )
                }
            </div>
            <Box height='100vh'>
                <Content />
            </Box>
        </Box>
    )
}