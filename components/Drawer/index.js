import { AppBar, Box, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import COLOR from '../../constants/Colors'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function ({
    TABS,
    activeIdx,
    setActiveIdx,
    visible,
    setVisible,
    setCurrentHeading
}) {
    return (
        <Box
            height={'100vh'}
            width={visible ? 350 : 60}
            backgroundColor={COLOR.accent}
            display='grid'
            alignItems='center'
            position='relative'
        >
            <AppBar
                position='absolute'
                sx={{
                    backgroundColor: COLOR.accent,
                    boxShadow: 0,
                    justifyContent: 'end',
                    display: 'flex',
                    alignItems: 'end',
                    zIndex: 500
                }} >
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='end'
                        color="inherit"
                        aria-label="open drawer"
                        sx={{
                            width: 40,
                            height: 40
                        }}
                        onClick={() => { setVisible(!visible) }}
                    >
                        <MenuRoundedIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {
                visible && (
                    <List>
                        {
                            TABS.map(({ label }, index) => (
                                <ListItem key={index} sx={{ padding: 0 }}>
                                    <ListItemButton
                                        sx={{
                                            color: activeIdx !== index ? 'white' : COLOR.accent,
                                            fontFamily: 'Poppins',
                                            backgroundColor: activeIdx === index ? COLOR.background : COLOR.accent,
                                            marginLeft: visible ? 5 : 0,
                                            borderRadius: visible ? '10px 0 0 10px' : 0,
                                            '&:hover': {
                                                backgroundColor: activeIdx !== index ? COLOR.hoverAccent : COLOR.background
                                            },
                                            display: 'inline-block'
                                        }}
                                        onClick={() => {
                                            setActiveIdx(index)
                                            setCurrentHeading(label)
                                        }}
                                    >
                                        <ListItemText primary={label} />
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                )
            }
        </Box>
    )
}

