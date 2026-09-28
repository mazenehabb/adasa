import React from "react";
import Hero from "../components/sections/home/hero/Hero";
import FeaturedArticles from "../components/sections/home/articales/FeaturedArticles";
import Descover from "../components/sections/home/descovers/Descover";

export default function HomePage() {
  return (
    <>
      <Hero></Hero>
      <FeaturedArticles />
      <Descover />
    </>
  );
}
