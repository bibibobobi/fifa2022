import styled from 'styled-components';
import SubTitle from '../../components/sub-title';
import React, { useState } from 'react';

import {
  Button,
  BtnBlock,
  ContentTab,
  PanelWrapper,
} from '../../components/panel';
import ScheduleOverview from './schedule-overview';
import ScheduleRound16 from './schedule-round16';

const Section = styled.div`
  width: 100%;
  background: #f0eae3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid #5d2e7a;
`;

const Wrapper = styled.div`
  width: 95%;
  padding: 40px 0;
  @media (min-width: 1200px) {
    width: 90%;
  }
`;

const DateSection = () => {
  // Toggle three panels
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Section>
      <Wrapper>
        <PanelWrapper>
          <SubTitle>賽程</SubTitle>
          <BtnBlock>
            <Button active={toggleState === 1} onClick={() => toggleTab(1)}>
              小組賽
            </Button>
            <Button active={toggleState === 2} onClick={() => toggleTab(2)}>
              16強
            </Button>
            <Button active={toggleState === 3} onClick={() => toggleTab(3)}>
              總覽
            </Button>
          </BtnBlock>
        </PanelWrapper>

        <ContentTab active={toggleState === 1}>小組賽</ContentTab>
        <ContentTab active={toggleState === 2}>
          <ScheduleRound16 />
        </ContentTab>
        <ContentTab active={toggleState === 3}>
          <ScheduleOverview />
        </ContentTab>
      </Wrapper>
    </Section>
  );
};

export default DateSection;
