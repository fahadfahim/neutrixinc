import Hero from "@/components/hero";
import OurFeature from "@/components/ourFeature";
import OurOffer from "@/components/ourOffer";
import ReportClaim from "@/components/reportClaim";
import Layout from "@/components/shared/layout";

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
