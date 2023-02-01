import React from 'react'
import { Box, Card, CardMedia, Typography } from '@mui/material'

import Colors from '../constants/Colors'

export const Cards = ({ title, description }) => {
    return (
        <Box
            display='flex'
            flexDirection='row'
            backgroundColor='white'
            borderRadius={2.5}
            boxShadow='0px 0px 15px rgba(0, 0, 0, 0.04)'
            padding={2}
            sx={{
                cursor: 'pointer',
                transitionDuration: '300ms',
                transitionTimingFunction: 'ease-in-out',
                ':hover':{
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
                }
            }}
        >
            <Box
                alignSelf={'center'}
                overflow='hidden'
                borderRadius={2}
            >
                <CardMedia
                    src='https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    component={'img'}
                    alt='sample image'
                    borderRadius={2.5}
                    sx={{
                        width: 200
                    }}
                />
            </Box>
            <Box paddingX={5} width textOverflow='ellipsis'>
                <Typography color={Colors.accent} fontSize='25px' fontWeight='bold' >{title}</Typography>
                <Typography color={Colors.text} fontSize='15px'>
                    {description}
                </Typography>
            </Box>
        </Box>
    )
}
