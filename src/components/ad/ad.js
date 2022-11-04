import styled from 'styled-components';
import DfpAd from './dfpAd';
import useViewportWidth from '../../useViewport';
import { useMemo } from 'react';

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
  const viewPort = useViewportWidth();
  const size = useMemo(() => {
    if (viewPort.viewportWidth >= 1200) {
      return { width: 970, height: 250 };
    }
    return { width: 300, height: 250 };
  }, [viewPort.viewportWidth]);

  return (
    <AdWrapper inView={inView}>
      <DfpAd width={size.width} height={size.height}></DfpAd>
    </AdWrapper>
  );
};

export default Ad;
