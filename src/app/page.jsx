import "./globals.css";
import About from "@/components/about";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";

const HomePage = () => {
  return (
    <>
      <h1 className="">
        <Hero />
        <Header />
        <About />
        <Services />
        <Projects />
        <WhyUs />
        <Gallery />
        {/* <Hero /> */}
      </h1>
    </>
  );
};

export default HomePage;
