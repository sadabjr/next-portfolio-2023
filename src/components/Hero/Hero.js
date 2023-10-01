import React from "react";
import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello there <br />
          I'm Sadab
        </SectionTitle>
        <SectionText>
        Welcome to My Web Developer Portfolio
          <i> Unlocking the Digital World, One Line of Code at a Time</i>
         
        </SectionText>
        {/* <Button onClick='{props.handleClick}'> <Link href='https://drive.google.com/file/d/1nK7hPSZJX8WI49HHFz6MIDwAeVVR-jKT/view'>Learn More</Link></Button> */}
        <Button onClick={props.handleClick}> Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
