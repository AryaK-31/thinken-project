import Image from "next/image";
import "./globals.css";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Services from "@/components/Services";

export default function Home() {
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
}
