import COLOR from "../../constants/Colors";
import { AppBar, Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function ({
    TABS,
    currentHeading,
    activeIdx,
    user
}) {
    const Content = TABS[activeIdx].component
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100vh'
        }} >
            <Box height='100vh' sx={{ display: 'contents' }}>
                {
                    activeIdx !== 0 && (
                        <Box
                            sx={{
                                boxShadow: 0,
                                padding: 5,
                                fontWeight: 'bold',
                                color: COLOR.text,
                                fontSize: 25,
                                flex: '0 1 auto',
                            }}
                        >
                            {currentHeading.toUpperCase()}
                        </Box>
                    )
                }
                <Box sx={{
                    flex: '1 1 auto',
                    overflowY: 'scroll',
                }}>
                    <Content user={user} />
                </Box>
            </Box>
        </Box>
    )
}