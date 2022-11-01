import styled from 'styled-components';
import ReactGA from 'react-ga';

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
  :hover {
    transform: translateY(-5px);
    box-shadow: 0 1rem 2rem rgb(0 0 0 / 15%);
    transition: all 0.5s ease-in-out;
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
  const handleOnClick = (index) => {
    if (index === 0) {
      ReactGA.event({
        category: 'Projects_FIFA',
        action: 'click',
        label: '點擊「最新消息」第 1 則新聞',
      });
    } else if (index === 6) {
      ReactGA.event({
        category: 'Projects_FIFA',
        action: 'click',
        label: '點擊「最新消息」第 7 則新聞',
      });
    }
  };
  //date format: Wed, 10 Jan 2018 07:10:58 GMT-->2018/01/10 07:10
  return newsItems?.slice(0, 12)?.map((item, index) => {
    return (
      <Link
        href={`https://www.mirrormedia.mg/story/${item?.slug}`}
        target='_blank'
        rel='noreferrer'
        key={item._id}
        onClick={() => handleOnClick(index)}
      >
        <CardWrapper key={item._id}>
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
