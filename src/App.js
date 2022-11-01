import Header from './components/header';
import MobileWrapper from './layout/mobile-wrapper';
import QaWrapper from './layout/desk-qaWrapper';
import MatchWrapper from './layout/desk-matchWrapper';
import TitleSection from './components/title-section';
import QaSection from './containers/section-qa';
import DateSection from './containers/section-date/section-schedule';
import ScoreSection from './containers/section-score/section-score';
import NewsSection from './containers/section-news/section-news';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

ReactGA.initialize('UA-83609754-2');

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
