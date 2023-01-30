import COLOR from "../../constants/Colors";
import { AppBar, Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function ({
    TABS,
    currentHeading,
    activeIdx,
}) {
    const Content = TABS[activeIdx].component
    return (
        <Box sx={{width: '100%'}} height='100vh'>
            <div>
                {
                    activeIdx !== 0 && (
                        <AppBar
                            position="static"
                            color="transparent"
                            sx={{
                                boxShadow: 0,
                                padding: 5,
                                fontWeight: 'bold',
                                color: COLOR.text,
                                fontSize: 25,
                            }}>
                            {currentHeading.toUpperCase()}
                        </AppBar>
                    )
                }
            </div>
            <Content />
        </Box>
    )
}