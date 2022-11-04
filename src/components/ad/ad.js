import styled from 'styled-components';
import DfpAd from './dfpAd';

const AdWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 250px;
  background-color: rgba(0, 0, 0, 1);
  color: #ffffff;
  font-size: 40px;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    position: fixed;
    bottom: 0;
    z-index: 99;
    transform: translateX(-25%);
    width: 970px;
    height: 250px;
    background-color: red;
    ${(props) =>
      !props.inView &&
      `
      display: none;
    `}
  }
`;

const Ad = ({ inView }) => {
  console.log({ inView });
  return (
    <AdWrapper inView={inView}>
      <DfpAd width={300} height={250}></DfpAd>
    </AdWrapper>
  );
};

export default Ad;
