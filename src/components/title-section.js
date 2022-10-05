import styled from 'styled-components';
import bgImg1 from '../assets/Group 593.png';

const Wrapper = styled.div`
  width: 100%;
  height: 254px;
  background: #5d2e7a;
  background-image: url(${bgImg1});
  @media (min-width: 768px) {
    height: 362px;
  }
`;

const TitleWrapper = styled.div`
  width: calc(100%-40px);
  color: white;
`;

// const TitleDecoLeft = styled.div`
//   width: 40px;
//   background-image: url(${titleDeco});
// `;

// const TitleDecoRight = styled.div`
//   width: 40px;
//   background-image: url(${titleDeco});
//   transform: rotate(180deg);
// `;

const TitleSection = () => {
  return (
    <Wrapper>
      <TitleWrapper>2022</TitleWrapper>
      <TitleWrapper>FIFA World Cup</TitleWrapper>
      <TitleWrapper>世足賽觀賽重點</TitleWrapper>
    </Wrapper>
  );
};

export default TitleSection;
