import React from 'react'
import { Box, Card, CardMedia, Typography } from '@mui/material'

import Colors from '../constants/Colors'

export const Cards = ({ title, description,image }) => {
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
                },
                marginBottom: 2
            }}
        >
            <Box
                alignSelf={'center'}
                overflow='hidden'
                borderRadius={2}
            >
                <CardMedia
                    src={image}
                    component={'img'}
                    alt='sample image'
                    sx={{
                        height: 120,
                        width:200,
                        borderRadius: 2.5
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
