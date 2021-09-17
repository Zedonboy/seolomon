import Layout from "../cityComponents/_App/Layout";
import Navbar from "../cityComponents/_App/Navbar";
import Footer from "../cityComponents/_App/Footer"
import MainBanner from "../cityComponents/MainBanner";
import Features from "../cityComponents/Features";
import DigitalExp from "../cityComponents/DigitalExperience";
import Comparison from "../cityComponents/Comparison";
import WriteUp from "../cityComponents/WriteUp";
import VideoSection from "../cityComponents/VideoSection";
import Industries from "../cityComponents/Industries";

export default function City() {
  return (
    <Layout>
      <Navbar />
      <MainBanner />
      <Features />
      <DigitalExp />
      <Comparison />
      <WriteUp />
      <VideoSection />
      <Industries />
      <Footer/>
    </Layout>
  );
}
