import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  CardWrapper,
  ImgWrapper,
  Link,
  TextWrapper,
} from '../../components/news-card';

const NewsItemsAfterAd = ({ newsItems, loadMore }) => {
  // handle loadmore
  const [showingCount, setShowingCount] = useState(12);

  useEffect(() => {
    if (loadMore) {
      setShowingCount((showingCount) => showingCount + 3);
    }
  }, [loadMore]);

  return newsItems?.slice(12, showingCount)?.map((item) => {
    return (
      <Link
        href={`https://www.mirrormedia.mg/story/${item?.slug}`}
        target='_blank'
        rel='noreferrer'
        key={item._id}
      >
        <CardWrapper>
          <ImgWrapper>
            <img
              src={`${item?.heroImage?.image?.resizedTargets?.mobile?.url}`}
              alt={`${item?.title}`}
            />
          </ImgWrapper>
          <TextWrapper>
            <p className='title'>{item?.title}</p>
            <p className='date'>
              {`${item?.slug?.slice(0, -10)}/${item?.slug?.slice(
                4,
                -8
              )}/${item?.slug?.slice(6, -6)} `}
              {item?.createTime?.slice(17, -7)}
            </p>
          </TextWrapper>
        </CardWrapper>
      </Link>
    );
  });
};

export default NewsItemsAfterAd;
