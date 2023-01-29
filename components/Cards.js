import Image from 'next/image'
import React from 'react'
import SampleImage from '../public/SampleImage.jpg'
import SampleArrow from '../public/SampleArrow.svg'

export const Cards = () => {
    return (
        <div className='bg-white flex flex-grow p-4 rounded-xl gap-x-5'>
            <Image src={SampleImage} alt="Sample Image 1" width={120} height={120} />
            <div className='flex flex-col justify-center p-2 gap-y-2'>
                <p className='text-primaryColor font-semibold text-[20px]'>Self-Discovery: A Behavioural Assessment for Self-Awareness</p>
                <p className='text-justify'>Unlock the secrets to landing your dream job by taking our self-awareness assessment. Through a series of assessments, you'll gain a deeper understanding of your strengths, weaknesses, values, and goals. This knowledge will empower you to identify the best job for you and make a powerful impression during your interviews.</p>
            </div>
            <Image src={SampleArrow} alt="Arrow" width={60} height={20} />
        </div>
    )
}
