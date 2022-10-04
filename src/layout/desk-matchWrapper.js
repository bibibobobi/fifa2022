import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  background-color: #f0eae3;
  width: calc(100% - 33%);
  height: calc(100% - 84px);
  right: 0;
  overflow: auto;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;

export default function MatchWrapper(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
