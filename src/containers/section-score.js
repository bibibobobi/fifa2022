import styled from 'styled-components';
import SubTitle from '../components/sub-title';
import bgImg2 from '../assets/Group 603.png';

const Section = styled.div`
  width: 100%;
  background: #f0eae3;
  background-image: url(${bgImg2});
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid #5d2e7a;
`;

const Wrapper = styled.div`
  width: 90%;
  padding: 40px 0;
`;

const ScoreSection = () => {
  return (
    <Section>
      <Wrapper>
        <SubTitle>戰績</SubTitle>
      </Wrapper>
    </Section>
  );
};

export default ScoreSection;
