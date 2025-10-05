import "./globals.css";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";

const HomePage = () => {
  return (
    <>
      <h1 className="">
        <Hero />
        <Header />
        <Services />
        <Projects />
        <WhyUs />
        {/* <Hero /> */}
      </h1>
    </>
  );
};

export default HomePage;
