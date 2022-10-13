import styled from 'styled-components';
import SubTitle from '../components/sub-title';

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
  return (
    <Section>
      <Wrapper>
        <SubTitle>賽程</SubTitle>
      </Wrapper>
    </Section>
  );
};

export default DateSection;
