import styled from 'styled-components';
// import DfpAd from './dfpAd';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';
import useDfpSlot from '../../useDfpSlot';

const AdWrapperPc = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 99;
  transform: translateX(-25%);

  width: 970px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.3);
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
  // useDfpSlot({
  //   path: '/40175602/mirror_RWD_2022FIFA_970250-300250_FT',
  //   size: [970, 250],
  //   id: 'adSlot-1',
  // });
  return (
    <AdWrapperPc inView={inView}>
      {/* <div id='adSlot-1' style={{ width: '970px', height: '250px' }} /> */}
      <DFPSlotsProvider dfpNetworkId='40175602'>
        <AdSlot
          id='adSlot-1'
          adUnit='mirror_RWD_2022FIFA_970250-300250_FT'
          sizes={[[970, 250]]}
        />
      </DFPSlotsProvider>
      {/* <DfpAd width={970} height={250}></DfpAd> */}
    </AdWrapperPc>
  );
};

export default AdPc;
