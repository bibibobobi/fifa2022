import Header from './components/header';
import MobileWrapper from './layout/mobile-wrapper';
import QaWrapper from './layout/desk-qaWrapper';
import MatchWrapper from './layout/desk-matchWrapper';
import TitleSection from './components/title-section';
import QaSection from './containers/section-qa';
import DateSection from './containers/section-date/section-date';
import ScoreSection from './containers/section-score/section-score';
import NewsSection from './containers/section-news';
// import { Diamond } from './components/icons/styled-diamond';
// import {
//   Win,
//   Loss,
//   Draw,
//   Arrow,
//   NaCircle,
//   AdvSquare,
// } from './components/icons/styled-circles';
// import SubTitle from './components/sub-title';

function App() {
  return (
    <>
      <Header />
      <QaWrapper>
        <TitleSection />
        <QaSection />
      </QaWrapper>
      <MatchWrapper>
        <DateSection />
        <ScoreSection />
        <NewsSection />
      </MatchWrapper>

      <MobileWrapper>
        <TitleSection />
        <DateSection />
        <ScoreSection />
        <QaSection />
        <NewsSection />
      </MobileWrapper>
    </>
  );
}

export default App;
