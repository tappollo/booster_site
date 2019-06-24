import React from "react";
import styled from "styled-components";
import WhoWeArePage from "./components/WhoWeArePage";
import BenefitsPage from "./components/BenefitsPage";
import FeaturesPage from "./components/FeaturesPage";

const Container = styled.div``;

export default () => (
  <Container>
    <WhoWeArePage />
    <BenefitsPage/>
    <FeaturesPage />
  </Container>
);
