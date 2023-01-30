import React from 'react'
import { Box, Card, CardMedia, Typography } from '@mui/material'

import Colors from '../constants/Colors'

export const Cards = () => {
    return (
        <Box
            flex={1}
            display='flex'
            flexDirection='row'
            backgroundColor='white'
            borderRadius={2.5}
            boxShadow='0px 0px 15px rgba(0, 0, 0, 0.04)'
            height={'190px'}
            paddingX={2}
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
                width={'auto'}
                height='max-content'
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
            <Box padding={5} flex={1} textOverflow='ellipsis'>
                <Typography color={Colors.accent} fontSize='25px' fontWeight='bold' >Self-Discovery: A Behavioural Assessment for Self-Awareness</Typography>
                <Typography color={Colors.text} fontSize='15px' textAlign={'justify'}>
                    Unlock the secrets to landing your dream job by taking our self-awareness assessment. Through a series of assessments, you'll gain a deeper understanding of your strengths, weaknesses, values, and goals. This knowledge will empower you to identify the best job for you and make a powerful impression during your interviews.
                </Typography>
            </Box>
        </Box>
    )
}
