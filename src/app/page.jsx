import "./globals.css";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Services from "@/components/Services";

const HomePage = () => {
  return (
    <>
      <h1 className="">
        <Hero />
        <Header />
        <Services />
        {/* <Hero /> */}
      </h1>
    </>
  );
};

export default HomePage;
