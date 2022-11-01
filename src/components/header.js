import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/mirrorlogo.svg';
import ShareIcon from '../assets/share.svg';
import ReactGA from 'react-ga';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 84px;
  background: #f0eae3;
  box-shadow: inset 0px -4px 0px #5d2e7a;
`;

const LogoWrapper = styled.div`
  padding: 12px 16px 16px 16px;
  height: 48px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 16px 24px 20px 24px;
  }
`;

const handleOnclick = () => {
  ReactGA.event({
    category: 'Projects_FIFA',
    action: 'click',
    label: '點擊鏡週刊 LOGO',
  });
};

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <a
          href='https://www.mirrormedia.mg'
          target='_blank'
          rel='noreferrer noopenner'
        >
          <Logo onClick={handleOnclick} />
        </a>
        <a href='https://www.mirrormedia.mg'>
          <img src={ShareIcon} alt='Share Icon' />
        </a>
      </LogoWrapper>
    </HeaderWrapper>
  );
};

export default Header;
