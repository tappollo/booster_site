import React from "react";
import WhoWeArePage from "./components/WhoWeArePage";
import BenefitsPage from "./components/BenefitsPage";
import FeaturesPage, { ImageBackground, SectionTitle } from "./components/FeaturesPage";
import ContactPage from "./components/ContacPage";
import GithubButton from "./components/GithubButton";

export default () => (
  <div style={{overflow: 'hidden'}}>
    <WhoWeArePage />
    <BenefitsPage />
    <SectionTitle>Prebuilt components</SectionTitle>
    <ImageBackground>
      <FeaturesPage />
      <GithubButton />
      <ContactPage />
    </ImageBackground>
  </div>
);
