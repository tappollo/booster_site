import React from "react";
import WhoWeArePage, { WithWithoutBooster } from "./components/WhoWeArePage";
import BenefitsPage from "./components/BenefitsPage";
import FeaturesPage, { ImageBackground, SectionTitle } from "./components/FeaturesPage";
import ContactPage from "./components/ContacPage";
import GithubButton from "./components/GithubButton";
import NavigationRow from "./components/NavigationRow";

export default () => (
  <div>
    <NavigationRow />
    <WhoWeArePage />
    <WithWithoutBooster />
    <BenefitsPage />
    <SectionTitle>Prebuilt components</SectionTitle>
    <ImageBackground>
      <FeaturesPage />
      <GithubButton />
      <ContactPage />
    </ImageBackground>
  </div>
);
