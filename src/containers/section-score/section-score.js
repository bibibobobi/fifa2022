import React, { useState } from 'react';
import styled from 'styled-components';
import SubTitle from '../../components/sub-title';
import ScoreRound16 from './score-round16';
import {
  Button,
  BtnBlock,
  ContentTab,
  PanelWrapper,
} from '../../components/panel';
// import bgImg2 from '../assets/Group 603.png';

const Section = styled.div`
  width: 100%;
  background: #f0eae3;
  background-image: url('https://res.cloudinary.com/di1olybhs/image/upload/v1665719181/Group_603_qniccc.png');
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid #5d2e7a;
`;

const Wrapper = styled.div`
  width: 92%;
  padding: 40px 0;
  @media (min-width: 1200px) {
    width: 90%;
  }
`;

const ScoreSection = () => {
  // Toggle panels
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Section>
      <Wrapper>
        <PanelWrapper>
          <SubTitle>戰績</SubTitle>
          <BtnBlock>
            <Button active={toggleState === 1} onClick={() => toggleTab(1)}>
              小組賽
            </Button>
            <Button active={toggleState === 2} onClick={() => toggleTab(2)}>
              16強
            </Button>
          </BtnBlock>
        </PanelWrapper>

        <ContentTab active={toggleState === 1}>小組賽</ContentTab>
        <ContentTab active={toggleState === 2}>
          <ScoreRound16 />
        </ContentTab>
      </Wrapper>
    </Section>
  );
};

export default ScoreSection;
