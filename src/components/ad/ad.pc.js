import styled from 'styled-components';
import useDfpSlot from '../../useDfpSlot';

const AdWrapperPc = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 99;
  transform: translateX(-25%);

  width: 970px;
  height: 250px;
  background-color: #e51731;
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
  useDfpSlot({
    path: '/40175602/mirror_RWD_2022FIFA_970250-300250_FT',
    size: [970, 250],
    id: 'CI3jpfTNkfsCFZJgDwIdIwIOow',
  });
  return (
    <AdWrapperPc inView={inView && inView}>
      <div
        id='CI3jpfTNkfsCFZJgDwIdIwIOow'
        style={{ width: '970px', height: '250px' }}
      />
    </AdWrapperPc>
  );
};

export default AdPc;
