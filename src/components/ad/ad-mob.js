import styled from 'styled-components';
import DfpAd from './dfpAd';

const AdWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0);
  color: #ffffff;
  font-size: 40px;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const AdMob = () => {
  return (
    <AdWrapper>
      <DfpAd width={300} height={250}></DfpAd>
    </AdWrapper>
  );
};

export default AdMob;
