import styled from 'styled-components';
import DfpAd from './dfpAd';

const AdWrapperPc = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 99;
  transform: translateX(-25%);

  width: 970px;
  height: 250px;
  background-color: red;
  /* background-color: rgba(0, 0, 0, 0); */
  color: #ffffff;
  font-size: 40px;
  display: none;
  p {
    text-align: center;
    line-height: 250px;
  }

  @media (min-width: 1200px) {
    display: ${(props) => (props.inView ? 'block' : 'none')};
  }
`;

const AdPc = ({ inView }) => {
  return (
    <AdWrapperPc inView={inView && inView}>
      <DfpAd width={970} height={250}></DfpAd>
    </AdWrapperPc>
  );
};

export default AdPc;
