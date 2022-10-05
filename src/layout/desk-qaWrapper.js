import styled from 'styled-components';

const Wrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 50%;
    position: fixed;
    background-color: #e8e7e7;
    height: calc(100% - 84px);
    overflow: auto;
  }

  @media (min-width: 1200px) {
    width: 33%;
  }
`;

export default function QaWrapper(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
