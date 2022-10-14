import styled from 'styled-components';
import SubTitle from '../components/sub-title';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Section = styled.div`
  width: 100%;
  background: #f0eae3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid #5d2e7a;
`;

const Wrapper = styled.div`
  width: 90%;
  padding: 40px 0;
`;

const DateSection = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchGroupSchedule = async () => {
      const response = await axios(
        'https://storage.googleapis.com/statics.mirrormedia.mg/json/fifa2022_group_schedule.json'
      );
      setData(response.data);
    };
    fetchGroupSchedule();
  }, []);

  //
  console.log(data);
  // console.log(data.schedule[0]);

  // const pk161 = data.roundOf16[0];
  // console.log(
  //   pk161.team1.teamName,
  //   pk161.team1.score,
  //   `(${pk161.team1.scorePK})`,
  //   pk161.team2.teamName,
  //   pk161.team2.score,
  //   `(${pk161.team2.scorePK})`
  // );

  return (
    <Section>
      <Wrapper>
        <SubTitle>賽程</SubTitle>
      </Wrapper>
    </Section>
  );
};

export default DateSection;
