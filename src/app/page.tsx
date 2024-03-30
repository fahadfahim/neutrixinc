
import Layout from "@/components/shared/layout";
import dynamic from "next/dynamic";
const Hero = dynamic(
  () => import("@/components/hero")
)
const OurFeature = dynamic(
  () => import("@/components/ourFeature")
)
const OurOffer = dynamic(
  () => import("@/components/ourOffer")
)
const ReportClaim = dynamic(
  () => import("@/components/reportClaim")
)

export default function Home() {
  return (
    <Layout>
      <Hero />
      <OurFeature />
      <OurOffer />
      <ReportClaim />
    </Layout>
  );
}
