import Head from "next/head";
import MainBanner from "../components/Sections/MainBanner";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";
import Subscribe from "../components/Common/SubscribeForm";
import AboutUs from "../components/Sections/AboutUs"
import ServicesCard from '../components/Common/ServicesCard';

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBanner/>
      <ServicesCard/>
      <AboutUs/>
      <Subscribe/>
      <Footer />
    </>
  );
}
