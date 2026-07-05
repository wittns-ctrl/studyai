import { CTABanner } from "../components/landing/CTABanner";
import { DashboardPreview } from "../components/landing/DashboardPreview";
import { FAQ } from "../components/landing/FAQ";
import { FeatureGrid } from "../components/landing/FeatureGrid";
import { Hero } from "../components/landing/Hero";
import { Pricing } from "../components/landing/Pricing";
import { Stats } from "../components/landing/Stats";
import { TimelineStats } from "../components/landing/TimelineStats";
import { Layout } from "../components/Layout";
import { useScrollToHash } from "../hooks/useScrollToHash";

export default function LandingPage() {
  useScrollToHash();

  return (
    <Layout>
      <Hero />
      <Stats />
      <FeatureGrid />
      <DashboardPreview />
      <TimelineStats />
      <Pricing />
      <FAQ />
      <CTABanner />
    </Layout>
  );
}
