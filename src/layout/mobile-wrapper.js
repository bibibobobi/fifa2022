import styled from 'styled-components';

const Wrapper = styled.div`
  display: none;
  @media (max-width: 375px) {
    display: block;
    position: fixed;
    width: 100%;
    height: calc(100% - 84px);
    overflow-y: scroll;
  }
`;

export default function MobileWrapper(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
