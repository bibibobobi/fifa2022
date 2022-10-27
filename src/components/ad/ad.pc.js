import styled from 'styled-components';

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
  console.log(inView);
  return (
    <AdWrapperPc inView={inView && inView}>
      <p>PC AD 970x250</p>
    </AdWrapperPc>
  );
};

export default AdPc;
