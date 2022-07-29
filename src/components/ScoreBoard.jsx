import styled from "styled-components";

export default function ScoreBoard({ score }) {
  return (
    <Board>
      <div>
        <label>SCORE</label>
        <p>{score}</p>
      </div>
    </Board>
  );
}

const Board = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & div {
    border-radius: 4px;
    background-color: #715541;
    padding: 1rem;
    font-weight: bold;
    text-align: center;
    min-width: 80%;
    & label {
      display: block;
      margin-bottom: 4px;
      color: #ffffff;
      font-size: 1.2rem;
    }
    & p {
      color: white;
      font-size: 2rem;
    }
  }
`;
