import styled from "styled-components";
import ScoreBoard from "./ScoreBoard";

export default function Header({ score }) {
  return (
    <HeaderWrap>
      <Heading>
        <TitleWrap>
          <span className="title">2048</span>
        </TitleWrap>
        <ScoreBoard score={score} />
      </Heading>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  color: white;
  min-height: 8rem;
  text-align: left;
  padding: 0 4rem;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin-bottom: 1rem;
`;

const TitleWrap = styled.h1`
  font-weight: bold;
  flex: 1;
  text-align: center;
  white-space: nowrap;
  & .title {
    font-size: 6rem;
  }
`;
