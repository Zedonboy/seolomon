import Layout from "../../cityComponents/_App/Layout";
import Navbar from "../../cityComponents/_App/Navbar";
import Footer from "../../cityComponents/_App/Footer";
import MainBanner from "../../cityComponents/MainBanner";
import Features from "../../cityComponents/Features";
import DigitalExp from "../../cityComponents/DigitalExperience";
import Comparison from "../../cityComponents/Comparison";
import WriteUp from "../../cityComponents/WriteUp";
import VideoSection from "../../cityComponents/VideoSection";
import Industries from "../../cityComponents/Industries";
import Comparator from "../../cityComponents/Comparator";

export default function City() {
  return (
    <Layout>
      <Navbar />
      <MainBanner />
      <Comparator
        data={{
          text1: "How seolo match other company",
          text2: "Bla bla",
          text3: "Seolo is better that Elephants",
          compares: [
            {
              company_name: "Amazon",
              children: [
                {
                  quality: "Load Speed",
                  seolo_score: "2ms",
                  company_score: "100ms",
                },
                {
                  quality: "Recognition",
                  seolo_score: "true",
                  company_score: "false",
                },
              ],
            },
            {
              company_name: "Google",
              children: [
                {
                  quality: "Load Speed",
                  seolo_score: "2ms",
                  company_score: "100ms",
                },
                {
                  quality: "Recognition",
                  seolo_score: "true",
                  company_score: "false",
                },
              ],
            },
            {
              company_name: "Netflix",
              children: [
                {
                  quality: "Sales",
                  seolo_score: "2ms",
                  company_score: "100ms",
                },
                {
                  quality: "Heroes",
                  seolo_score: "true",
                  company_score: "false",
                },
              ],
            },
          ],
        }}
      />
      
      <Features />
      <DigitalExp />
      <Comparison />
      <WriteUp />
      <VideoSection />
      <Industries />
      <Footer />
    </Layout>
  );
}
