// import { useState, useEffect } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import { ContentContainer } from '../../components/panel';

const TreeWrapper = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: row;
  padding: 20px;
  @media (min-width: 1200px) {
  }
`;

const ItemChild = styled.div`
  position: relative;
  width: 164px;
  height: 102px;
  background: #ffffff;
  border: 2px solid #5d2e7a;
  border-radius: 6px;
  margin-bottom: 12px;
  :nth-child(odd) {
    margin-bottom: 24px;
    :after {
      transform: translateY(-100%);
    }
  }
  :before {
    content: '';
    position: absolute;
    background-color: #5d2e7a;
    right: 0;
    top: 50%;
    transform: translateX(100%);
    width: 18px;
    height: 2px;
  }
  :after {
    content: '';
    position: absolute;
    background-color: #5d2e7a;
    right: -18px;
    height: calc(50% + 22px);
    width: 2px;
    top: 50%;
  }
`;

const ItemParent = styled.div`
  position: relative;
  width: 164px;
  height: 102px;
  background: #ffffff;
  border: 2px solid #5d2e7a;
  border-radius: 6px;
  margin-top: 57px;
  margin-bottom: 86px;
  :nth-child(odd) {
    margin-bottom: 75px;
  }
  :after {
    position: absolute;
    content: '';
    width: 18px;
    height: 2px;
    left: 0;
    top: 50%;
    background-color: #5d2e7a;
    transform: translateX(-100%);
  }
  :before {
    content: '';
    position: absolute;
    background-color: #5d2e7a;
    right: 0;
    top: 50%;
    transform: translateX(100%);
    width: 18px;
    height: 2px;
  }
`;

const ItemGrandParent = styled.div`
  position: relative;
  width: 164px;
  height: 102px;
  background: #ffffff;
  border: 2px solid #5d2e7a;
  border-radius: 6px;
  margin-top: 180px;
  :nth-child(2) {
    margin-bottom: 195px;
  }
  :after {
    position: absolute;
    content: '';
    width: 18px;
    height: 2px;
    left: 0;
    top: 50%;
    background-color: #5d2e7a;
    transform: translateX(-100%);
  }
  :before {
    content: '';
    position: absolute;
    background-color: #5d2e7a;
    right: 0;
    top: 50%;
    transform: translateX(100%);
    width: 18px;
    height: 2px;
  }
`;

const ItemGreatParent = styled.div`
  position: relative;
  width: 164px;
  height: 102px;
  background: #ffffff;
  border: 2px solid #5d2e7a;
  border-radius: 6px;
  margin-top: 420px;
  :before {
    content: '';
    position: absolute;
    background-color: #5d2e7a;
    left: 0;
    top: 50%;
    transform: translateX(-100%);
    width: 18px;
    height: 2px;
  }
`;

const ItemOnlyChild = styled.div`
  width: 164px;
  height: 102px;
  background: #ffffff;
  border: 2px solid #5d2e7a;
  border-radius: 6px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  /* background: yellowgreen; */
  /* border: 2px solid #5d2e7a; */
  :not(:last-child) {
    margin-right: 30px;
  }

  p {
    color: #5d2e7a;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    padding: 16px;
  }

  span {
    margin-top: 20px;
  }
`;

const StepChild1 = styled.div`
  position: relative;
  :after {
    content: '';
    position: absolute;
    background-color: #5d2e7a;
    right: -16px;
    height: calc(50% + 245px);
    width: 2px;
    top: 50%;
    transform: translateY(-55.5%);
  }
`;

const StepChild2 = styled.div`
  position: relative;
  :after {
    content: '';
    position: absolute;
    background-color: #5d2e7a;
    right: -16px;
    height: calc(50% + 234px);
    width: 2px;
    top: 50%;
    transform: translateY(-53.5%);
  }
`;

const StepChild3 = styled.div`
  position: relative;
  :after {
    content: '';
    position: absolute;
    background-color: #5d2e7a;
    right: -16px;
    height: calc(50% + 477px);
    width: 2px;
    top: 50%;
    transform: translateY(-51.5%);
  }
`;

const ScheduleRound16 = () => {
  // Fetch Data
  // const [round16, setRound16] = useState([]);
  // useEffect(() => {
  //   const fetchScheduleOverview = async () => {
  //     const response = await axios(
  //       'https://storage.googleapis.com/statics.mirrormedia.mg/json/fifa2022_round16_result_schedule.json'
  //     );
  //     setRound16(response?.data);
  //   };
  //   fetchScheduleOverview();
  // }, []);

  // console.log(round16);
  return (
    <ContentContainer>
      <TreeWrapper>
        <Row>
          <p>16強賽</p>
          <ItemChild>
            <p>Child 1</p>
          </ItemChild>
          <ItemChild>
            <p>Child 2</p>
          </ItemChild>
          <ItemChild>
            <p>Child 1</p>
          </ItemChild>
          <ItemChild>
            <p>Child 2</p>
          </ItemChild>
          <ItemChild>
            <p>Child 1</p>
          </ItemChild>
          <ItemChild>
            <p>Child 2</p>
          </ItemChild>
          <ItemChild>
            <p>Child 1</p>
          </ItemChild>
          <ItemChild>
            <p>Child 2</p>
          </ItemChild>
        </Row>
        <Row>
          <p>半準決賽</p>
          <ItemParent>
            <p>Parent 1</p>
          </ItemParent>
          <StepChild1 />
          <ItemParent>
            <p>Parent 2</p>
          </ItemParent>
          <ItemParent>
            <p>Parent 1</p>
          </ItemParent>
          <StepChild2 />
          <ItemParent>
            <p>Parent 2</p>
          </ItemParent>
        </Row>
        <Row>
          <p>準決賽</p>
          <ItemGrandParent>
            <p>Parent 1</p>
          </ItemGrandParent>
          <StepChild3 />
          <ItemGrandParent>
            <p>Parent 2</p>
          </ItemGrandParent>
          <span> </span>
          <p>季軍賽</p>
          <ItemOnlyChild>
            <p>Stepmother</p>
          </ItemOnlyChild>
        </Row>
        <Row>
          <p>決賽</p>
          <ItemGreatParent>
            <p>only-child</p>
          </ItemGreatParent>
        </Row>
      </TreeWrapper>
    </ContentContainer>
  );
};

export default ScheduleRound16;
