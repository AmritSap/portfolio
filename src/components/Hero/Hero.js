import React from "react";
import { DiWindows } from "react-icons/di";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        A full stack web developer with experience in backend and frontend
        technologies. Detail-oriented dedicated individual with technical and
        analytical skills seeking to secure a responsible career opportunity to
        fully utilize my experience and skills, while making a significant
        contribution to the success of the company. I possess a down-to-earth
        make-it-happen attitude with a strong drive and an innovative approach.
        Also experienced in building consumer focused web applications
      </SectionText>
      {/* <Button>
        <a href="https://www.google.com" target="blank">
          Hire me
        </a>
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
