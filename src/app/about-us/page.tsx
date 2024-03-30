
import Layout from '@/components/shared/layout'
import React from 'react'
import dynamic from "next/dynamic";
const AboutUs = dynamic(
    () => import("@/components/aboutUs")
)
const OurHistory = dynamic(
    () => import("@/components/ourHistory")
)
const OurMission = dynamic(
    () => import("@/components/ourMission")
)
const OurOffer = dynamic(
    () => import("@/components/ourOffer")
)

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