import React from "react";
import styled from "styled-components";
import WhoWeAre from "./components/WhoWeAre";
import BenefitsPage from "./components/BenefitsPage";

const Container = styled.div`
`;

export default () => (
  <Container>
    <WhoWeAre />
    <BenefitsPage/>
  </Container>
);

