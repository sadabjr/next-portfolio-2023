import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import Github from './Github';

const data = [
  { number: "Desteck Infosolution", text: '', },
  { number: "Role: Associate Software Developer", text: ''},
  { number: "Internship (6 months) ", text: '', },
  { number: "Associate Software Developer (Present)", text: '', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Work Experience:</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <Github />
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
