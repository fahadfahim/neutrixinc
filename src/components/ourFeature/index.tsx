'use client'
import React from 'react'
import OurInfo from '../shared/ourInfo'

const OurFeature = () => {
    const handleClick = () => {
        alert('MCCA Refund FAQ clicked')

    }
    return (
        <div className='my-[30px]'>
            <OurInfo motto='Our Feature' title='MCCA REFUND INFORMATION' isButton buttonText='MCCA Refund FAQ' info='The Michigan Catastrophic Claims Association approved refunds for certain Michigan Policyholders due a surplus of funds being held by the MCCA. The approved refund will be $400 per eligible vehicle insured with USA Underwriters on October 31st, 2021 at 11:59 PM, or $80 if the vehicle is an insured historical vehicle.' onClick={handleClick} />
        </div>
    )
}

export default OurFeature