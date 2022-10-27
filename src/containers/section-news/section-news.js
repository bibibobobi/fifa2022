import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SubTitle from '../../components/sub-title';

const Section = styled.div`
  width: 100%;
  background: #f0eae3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 92%;
  padding: 40px 0;
  @media (min-width: 1200px) {
    width: 90%;
  }
  @media (min-width: 1338px) {
    width: 80%;
  }
`;

const NewsSection = () => {
  // Fetch Data
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchResult = async () => {
      const response = await axios(
        'https://www.mirrormedia.mg/json/5a55bd82160ac91000294e4.json'
      );
      setNews(response?.data);
    };
    fetchResult();
  }, []);

  const newsItems = news?._items;
  console.log({ newsItems });

  console.log(news?._items?.[0]);
  console.log(news?._items?.[0]?.heroImage?.image?.resizedTargets?.mobile?.url);
  console.log(news?._items?.[0]?.title);
  console.log(
    `url:https://www.mirrormedia.mg/story/${news?._items?.[0]?.slug}`
  );
  console.log(news?._items?.[0]?.createTime.slice(5, -7));
  //Wed, 10 Jan 2018 07:10:58 GMT-->2018/01/10 07:10

  return (
    <Section>
      <Wrapper>
        <SubTitle>最新消息</SubTitle>
      </Wrapper>
    </Section>
  );
};

export default NewsSection;
