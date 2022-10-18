import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ContentContainer } from '../../components/panel';
// import round16Bg from '../../assets/Bracket_Blank.svg';

// const Round16Bg = styled.img`
//   background-image: url(${round16Bg});
//   width: 50%;
//   height: 50%;
//   overflow: auto;
//   @media (min-width: 1200px) {
//   }
// `;

const ScheduleRound16 = () => {
  // Fetch Data
  const [round16, setRound16] = useState([]);
  useEffect(() => {
    const fetchScheduleOverview = async () => {
      const response = await axios(
        'https://storage.googleapis.com/statics.mirrormedia.mg/json/fifa2022_round16_result_schedule.json'
      );
      setRound16(response?.data);
    };
    fetchScheduleOverview();
  }, []);

  // console.log(round16);
  return <ContentContainer>hi round 16</ContentContainer>;
};

export default ScheduleRound16;
