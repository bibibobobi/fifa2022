import styled from 'styled-components';
import {
  BsFillCheckCircleFill,
  BsFillDashCircleFill,
  BsFillXCircleFill,
} from 'react-icons/bs';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const WinStyle = styled.div`
  font-size: 1.25rem;
  color: #18b958;
`;

const LossStyle = styled.div`
  font-size: 1.25rem;
  color: #f5431c;
`;

const DrawStyle = styled.div`
  font-size: 1.25rem;
  color: #9b9b9b;
`;

const ArrowStyle = styled.div`
  font-size: 1.54rem;
  color: #f5f1f6;
`;

export const NaCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border: 1px solid #9b9b9b;
  border-radius: 50%;
`;

export const AdvSquare = styled.div`
  width: 18px;
  height: 18px;
  background-color: #f5ab1c;
`;

export const Win = () => (
  <WinStyle>
    <BsFillCheckCircleFill />
  </WinStyle>
);

export const Loss = () => (
  <LossStyle>
    <BsFillXCircleFill />
  </LossStyle>
);

export const Draw = () => (
  <DrawStyle>
    <BsFillDashCircleFill />
  </DrawStyle>
);

export const Arrow = () => (
  <ArrowStyle>
    <IoIosArrowDroprightCircle />
  </ArrowStyle>
);
