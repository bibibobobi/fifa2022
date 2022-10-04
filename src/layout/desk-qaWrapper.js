import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  background-color: #e8e7e7;
  width: 33%;
  height: calc(100% - 84px);
  overflow: auto;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;

export default function QaWrapper(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
