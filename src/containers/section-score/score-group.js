import styled from 'styled-components';
import React, { useState } from 'react';

import { ContentTab, PanelWrapper } from '../../components/panel';
import { GroupBtn, BtnWrapper } from '../../components/group-panel';

const Wrapper = styled.div`
  width: 92%;
  padding: 40px 0;
  @media (min-width: 1200px) {
    width: 90%;
  }
`;

const ScoreGroup = () => {
  // Toggle group panels
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Wrapper>
      <PanelWrapper>
        <BtnWrapper>
          <GroupBtn active={toggleState === 1} onClick={() => toggleTab(1)}>
            A 組
          </GroupBtn>
          <GroupBtn active={toggleState === 2} onClick={() => toggleTab(2)}>
            B 組
          </GroupBtn>
          <GroupBtn active={toggleState === 3} onClick={() => toggleTab(3)}>
            C 組
          </GroupBtn>
          <GroupBtn active={toggleState === 4} onClick={() => toggleTab(4)}>
            D 組
          </GroupBtn>
          <GroupBtn active={toggleState === 5} onClick={() => toggleTab(5)}>
            E 組
          </GroupBtn>
          <GroupBtn active={toggleState === 6} onClick={() => toggleTab(6)}>
            F 組
          </GroupBtn>
          <GroupBtn active={toggleState === 7} onClick={() => toggleTab(7)}>
            G組
          </GroupBtn>
          <GroupBtn active={toggleState === 8} onClick={() => toggleTab(8)}>
            H 組
          </GroupBtn>
        </BtnWrapper>
      </PanelWrapper>

      <ContentTab active={toggleState === 1}>a組</ContentTab>
      <ContentTab active={toggleState === 2}>b組</ContentTab>
      <ContentTab active={toggleState === 3}>c組</ContentTab>
      <ContentTab active={toggleState === 4}>d組</ContentTab>
      <ContentTab active={toggleState === 5}>e組</ContentTab>
      <ContentTab active={toggleState === 6}>f組</ContentTab>
      <ContentTab active={toggleState === 7}>g組</ContentTab>
      <ContentTab active={toggleState === 8}>h組</ContentTab>
    </Wrapper>
  );
};

export default ScoreGroup;
