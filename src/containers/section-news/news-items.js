import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 344px;
  height: 298px;

  background-color: #ffffff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.06), 0px 4px 12px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  @media (min-width: 1200px) {
    width: 240px;
    height: 293px;
  }

  img {
    width: 240px;
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

  img {
    width: 344px;

    @media (min-width: 1200px) {
      width: 240px;
    }
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

const NewsItems = ({ newsItems }) => {
  console.log('newsItems on child', newsItems?.[0]);
  console.log(newsItems?.[0]);
  console.log(newsItems?.[0]?.heroImage?.image?.resizedTargets?.mobile?.url);
  console.log(newsItems?.[0]?.title);
  console.log(`url:https://www.mirrormedia.mg/story/${newsItems?.[0]?.slug}`);
  console.log(newsItems?.[0]?.createTime.slice(5, -7));
  //Wed, 10 Jan 2018 07:10:58 GMT-->2018/01/10 07:10

  return newsItems?.slice(0, 12)?.map((item) => {
    return (
      <Link
        href={`https://www.mirrormedia.mg/story/${item?.slug}`}
        target='_blank'
        rel='noreferrer'
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

export default NewsItems;
