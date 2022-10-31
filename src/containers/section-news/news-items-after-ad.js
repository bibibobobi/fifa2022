import { useEffect, useState } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 288px;
  height: 298px;

  background-color: #ffffff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.06), 0px 4px 12px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  @media (min-width: 768px) {
    width: 344px;
    height: 298px;
  }
  @media (min-width: 1200px) {
    width: 240px;
    height: 293px;
  }

  img {
    border-radius: 6px 6px 0 0;
    width: 288px;
    @media (min-width: 768px) {
      width: 344px;
    }
    @media (min-width: 1200px) {
      width: 240px;
    }
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 344px;
  height: 192px;
  border-radius: 6px 6px 0 0;
  overflow: hidden;

  @media (min-width: 1200px) {
    width: 240px;
    height: 160px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: gray;
  :link {
    color: gray;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 106px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  padding: 15px;
  @media (min-width: 1200px) {
    height: 133px;
  }

  .title {
    color: rgba(0, 9, 40, 0.87);
    font-size: 16px;
    @media (min-width: 1200px) {
      font-size: 18px;
    }
  }
  .date {
    color: rgba(0, 9, 40, 0.5);
    font-size: 12px;
    @media (min-width: 1200px) {
      font-size: 14px;
    }
  }
`;

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
