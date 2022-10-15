import styled from 'styled-components';
import SubTitle from '../components/sub-title';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  BtnBlock,
  ContentContainer,
  ContentTab,
  PanelWrapper,
} from '../components/panel';

const Section = styled.div`
  width: 100%;
  background: #f0eae3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid #5d2e7a;
`;

const Wrapper = styled.div`
  width: 90%;
  padding: 40px 0;
`;

const DateSection = () => {
  // Fetch Data
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchGroupSchedule = async () => {
      const response = await axios(
        'https://storage.googleapis.com/statics.mirrormedia.mg/json/fifa2022_group_schedule.json'
      );
      setData(response.data);
    };
    fetchGroupSchedule();
  }, []);

  console.log(data?.schedule?.[0]);

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
        <ContentContainer>
          <ContentTab active={toggleState === 1}>小組賽</ContentTab>
          <ContentTab active={toggleState === 2}>16強</ContentTab>
          <ContentTab active={toggleState === 3}>總覽</ContentTab>
        </ContentContainer>
      </Wrapper>
    </Section>
  );
};

export default DateSection;
