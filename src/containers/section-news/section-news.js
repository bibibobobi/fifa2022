import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SubTitle from '../../components/sub-title';
import NewsItems from './news-items';
import NewsItemsAfterAd from './news-items-after-ad';
import AdMob from '../../components/ad/ad-mob';

const Section = styled.div`
  width: 100%;
  background: #f0eae3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 150px;
`;

const Wrapper = styled.div`
  width: 92%;
  padding: 40px 0;
  @media (min-width: 1200px) {
    width: 95%;
  }
  @media (min-width: 1440px) {
    width: 80%;
  }
`;

const NewsItemsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px 16px;
  justify-content: center;
  @media (min-width: 1200px) {
  }
`;

const NewsSection = () => {
  // Fetch Data
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchResult = async () => {
      const response = await axios(
        'https://www.mirrormedia.mg/json/5816e555aa39ed0d00bfd9d3.json'
      );
      setNews(response?.data);
    };
    fetchResult();
  }, []);

  const newsItems = news._items;

  return (
    <Section>
      <Wrapper>
        <SubTitle>最新消息</SubTitle>
        <NewsItemsWrapper>
          <NewsItems newsItems={newsItems} />
          <AdMob />
          <NewsItemsAfterAd newsItems={newsItems} />
        </NewsItemsWrapper>
      </Wrapper>
    </Section>
  );
};

export default NewsSection;
