import Header from './components/header';
import MobileWrapper from './layout/mobile-wrapper';
import QaWrapper from './layout/desk-qaWrapper';
import MatchWrapper from './layout/desk-matchWrapper';
import TitleSection from './components/title-section';
import QaSection from './components/qa-section';

function App() {
  return (
    <>
      <Header />
      <QaWrapper>
        <TitleSection />
        <QaSection />
      </QaWrapper>
      <MatchWrapper></MatchWrapper>

      <MobileWrapper>
        <TitleSection />
        <QaSection />
      </MobileWrapper>
    </>
  );
}

export default App;
