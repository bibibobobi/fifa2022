import { useState } from 'react';
import styled, { css } from 'styled-components';
import SubTitle from '../components/sub-title';
// import QAList from '@readr-media/react-qa-list';
import QAList from '../components/react-components/list/qa-list';
import { InView } from 'react-intersection-observer';
import ReactGA from 'react-ga';
import readMore from '../assets/readmore.png';
import closeReadMore from '../assets/closeReadMore.png';

const questions = [
  {
    id: '1',
    title: '網站的資訊跟我記得的不一樣？看指揮中心政策更改紀錄',
    content: {
      blocks: [
        {
          key: '8cmbc',
          data: {},
          text: '若您發現 READr 網站資訊仍有誤，請私訊 READr 粉絲專頁，或來信 readr@readr.tw 。',
          type: 'unstyled',
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [
            {
              style: 'FONT_COLOR_#222222',
              length: 1,
              offset: 0,
            },
            {
              style: 'FONT_COLOR_#010101',
              length: 1,
              offset: 7,
            },
            {
              style: 'FONT_COLOR_#22222',
              length: 4,
              offset: 8,
            },
          ],
        },
        {
          key: '1kj70',
          data: {},
          text: '',
          type: 'unstyled',
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
        {
          key: '9htsq',
          data: {},
          text: ' ',
          type: 'atomic',
          depth: 0,
          entityRanges: [
            {
              key: 0,
              length: 1,
              offset: 0,
            },
          ],
          inlineStyleRanges: [],
        },
        {
          key: 'b8h22',
          data: {},
          text: '',
          type: 'unstyled',
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
      ],
      entityMap: {
        0: {
          data: {
            id: '23',
            desc: '',
            name: '教父',
            resized: {
              original:
                'https:///editools-gcs-dev.readr.tw/images/81cc52bf-c54c-44c9-a26b-66ce52c29948.png',
            },
            imageFile: {
              url: '/images/81cc52bf-c54c-44c9-a26b-66ce52c29948.png',
            },
          },
          type: 'image',
          mutability: 'IMMUTABLE',
        },
      },
    },
    sortOrder: 2,
  },
  {
    id: '3',
    title: 'nini_test_20220921_01',
    content: {
      blocks: [
        {
          key: '5rab5',
          data: {},
          text: '妮妮測試一號內容',
          type: 'header-two',
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
        {
          key: 'doe66',
          data: {},
          text: '妮妮測試一號內容',
          type: 'header-four',
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
        {
          key: 'jcku',
          data: {},
          text: '妮妮測試一號內容',
          type: 'unstyled',
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [
            {
              style: 'FONT_COLOR_#B7B2BF',
              length: 8,
              offset: 0,
            },
          ],
        },
        {
          key: 'd65an',
          data: {},
          text: '',
          type: 'unstyled',
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
        {
          key: 'ffb09',
          data: {},
          text: ' ',
          type: 'atomic',
          depth: 0,
          entityRanges: [
            {
              key: 0,
              length: 1,
              offset: 0,
            },
          ],
          inlineStyleRanges: [],
        },
        {
          key: '4p7a3',
          data: {},
          text: '',
          type: 'unstyled',
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
      ],
      entityMap: {
        0: {
          data: {
            caption: 'nini_test_20220921_01',
            embeddedCode:
              '<iframe width="100%" src="https://www.youtube.com/embed/zPHyxvPT0gg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          },
          type: 'EMBEDDEDCODE',
          mutability: 'IMMUTABLE',
        },
      },
    },
    sortOrder: 1,
  },
  {
    id: '5',
    title: 'nini_test_20220922_01',
    content: {
      blocks: [
        {
          key: 'f9vjn',
          data: {},
          text: '',
          type: 'unstyled',
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
      ],
      entityMap: {},
    },
    sortOrder: null,
  },
  {
    id: '6',
    title: 'nini_test_20220922_02',
    content: {
      blocks: [
        {
          key: 'a93dj',
          data: {},
          text: '',
          type: 'unstyled',
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
      ],
      entityMap: {},
    },
    sortOrder: null,
  },
];

const Section = styled.div`
  width: 100%;
  background: #f5f1f6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid #5d2e7a;
  @media (min-width: 768px) {
    border-bottom: none;
    padding-bottom: 80px;
  }

  @media (min-width: 1200px) {
    padding-bottom: 250px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 92%;
  padding: 40px 0;
  @media (min-width: 1200px) {
    width: 90%;
  }
`;

const RestQaListContainer = styled.div`
  border-radius: 6px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 615px;
  overflow: hidden;
  height: 50px;
  ${(props) =>
    props.show &&
    css`
      height: 100%;
      transition-duration: 0.5s;
      :after {
        display: none;
      }
    `}
  :after {
    position: absolute;
    content: '';
    width: 95%;
    height: 50px;
    border-radius: 6px;
    left: 10px;
    background-image: linear-gradient(to bottom, transparent, white);
    @media (min-width: 768px) {
      display: none;
    }
  }
  @media (min-width: 768px) {
    height: 100%;
  }
`;

const CloseReadMoreBtn = styled.button`
  cursor: pointer;
  background-color: #f5f1f6;
  font-size: 16px;
  font-weight: 500;
  color: #5d2e7a;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin-top: 15px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ReadMoreBtn = styled.button`
  cursor: pointer;
  background-color: #f5f1f6;
  font-size: 16px;
  font-weight: 500;
  color: #5d2e7a;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin-top: 15px;

  @media (min-width: 768px) {
    display: none;
  }

  margin: auto;
  ${(props) =>
    props.hide &&
    css`
      display: none;
    `}
`;

const QaGaAnchorWrapper = styled.div`
  /* width: 100%; */
`;
const QaGaAnchor = styled.div`
  color: #5d2e7a;
`;

const QaSection = () => {
  const [inView, setInView] = useState(false);
  const [hasSentGa, setHasSentGa] = useState(false);
  const [showRestQa, setShowRestQa] = useState(false);

  const handleGaInview = (isInView) => {
    setInView(isInView);
    if (isInView && !hasSentGa) {
      ReactGA.event({
        category: 'Projects_FIFA',
        action: 'scroll',
        label: '頁面滑動至「FAQs」區塊最底部',
      });
      setHasSentGa(true);
    }
  };

  const handleShowMore = () => {
    setShowRestQa(true);
  };

  const handleCloseShowMore = () => {
    setShowRestQa(false);
  };

  return (
    <Section>
      <Wrapper>
        <SubTitle>重要資訊懶人包</SubTitle>
        <QAList questions={questions.slice(0, 2)} />
        <RestQaListContainer show={showRestQa}>
          <QAList questions={questions.slice(2)} />
          <CloseReadMoreBtn onClick={handleCloseShowMore}>
            收合部分 <img src={closeReadMore} alt='close read more' />
          </CloseReadMoreBtn>
        </RestQaListContainer>
        <ReadMoreBtn onClick={handleShowMore} hide={showRestQa}>
          展開全部 <img src={readMore} alt='read more' />
        </ReadMoreBtn>
      </Wrapper>
      <InView onChange={handleGaInview}>
        {({ ref, inView }) => (
          <QaGaAnchorWrapper ref={ref}>
            <QaGaAnchor ref={ref} />
            <QaGaAnchor />
          </QaGaAnchorWrapper>
        )}
      </InView>
    </Section>
  );
};

export default QaSection;
