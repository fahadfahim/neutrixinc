import AboutUs from '@/components/aboutUs'
import OurHistory from '@/components/ourHistory'
import OurMission from '@/components/ourMission'
import OurOffer from '@/components/ourOffer'
import Layout from '@/components/shared/layout'
import React from 'react'

const Page = () => {
    return (
        <Layout>
            <AboutUs />
            <OurHistory />
            <OurMission />
            <OurOffer />
        </Layout>

    )
}

export default Page