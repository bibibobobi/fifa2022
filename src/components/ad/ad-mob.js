import styled from 'styled-components';

const AdWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 250px;
  background-color: #e51731;
  color: #ffffff;
  font-size: 40px;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const AdMob = () => {
  return <AdWrapper>Mobile AD</AdWrapper>;
};

export default AdMob;
