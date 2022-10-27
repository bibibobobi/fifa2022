import { useState, useEffect } from 'react';
import { InView } from 'react-intersection-observer';
import axios from 'axios';
import styled from 'styled-components';
import SubTitle from '../../components/sub-title';
import NewsItems from './news-items';
import NewsItemsAfterAd from './news-items-after-ad';
import AdMob from '../../components/ad/ad-mob';
import AdPc from '../../components/ad/ad.pc';

const Section = styled.div`
  width: 100%;
  background: #f0eae3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
  @media (min-width: 1200px) {
    padding-bottom: 250px;
  }
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

  // InterSection Observer
  const [inView, setInView] = useState(false);

  return (
    <Section>
      <Wrapper>
        <SubTitle>最新消息</SubTitle>
        <NewsItemsWrapper>
          <NewsItems newsItems={newsItems} />
          <AdMob />
          <AdPc inView={inView} />
        </NewsItemsWrapper>
        <InView onChange={setInView}>
          {({ ref, inView }) => (
            <NewsItemsWrapper ref={ref}>
              <NewsItemsAfterAd newsItems={newsItems} ref={ref} />
            </NewsItemsWrapper>
          )}
        </InView>
      </Wrapper>
    </Section>
  );
};

export default NewsSection;
