import styled, { css, keyframes } from "styled-components";
import { BOARD_SIZE } from "../constants";
import { Cell } from "../styles/Cell";
export default function TileContainer({ numbers, beRemovedTiles }) {
  return (
    <TileWrap>
      {beRemovedTiles.map((tile, index) => (
        <Tile
          key={`combined-${index}`}
          tile={tile}
          beRemoved={true}
          boardSize={BOARD_SIZE}
        >
          {tile.number}
        </Tile>
      ))}
      {numbers.map((tile, index) =>
        tile ? (
          <Tile key={`tile-${tile.id}`} tile={tile} boardSize={BOARD_SIZE}>
            {tile.number}
          </Tile>
        ) : (
          ""
        )
      )}
    </TileWrap>
  );
}

const TileWrap = styled.div`
  position: absolute;
  z-index: 1;
`;

const colors = {
  2: { background: "#fbeddc", color: "#684a23" },
  4: { background: "#f9e2c7", color: "#684a23" },
  8: { background: "#f6d5ab", color: "#684a23" },
  16: { background: "#f2c185", color: "#684a23" },
  32: { background: "#efb46d", color: "#684a23" },
  64: { background: "#eba24a", color: "#ffffff" },
  128: { background: "#e78f28", color: "#ffffff" },
  256: { background: "#e85532", color: "#ffffff" },
  512: { background: "#e25532", color: "#ffffff" },
  1024: {
    background: "#e84532",
    color: "#ffffff",
  },
  2048: {
    background: "#e83232",
    color: "#ffffff",
  },
  4096: {
    background: "#e51a1a",
    color: "#ffffff",
  },
  8192: {
    background: "linear-gradient(45deg, rgb(252, 70, 107), rgb(63, 94, 251))",
    color: "#ffffff",
  },
};

const Tile = styled(Cell).attrs(({ tile }) => {
  if (tile) {
    const { number } = tile;
    return {
      style: {
        background: colors[number].background,
        color: colors[number].color,
      },
    };
  }
})`
  ${({ tile, beRemoved }) => {
    if (tile) {
      const { row, col, prevCol, prevRow, isNew, isCombined } = tile;
      const position = {
        x: `calc(${col} * var(--default_tile_size) + var(--default_tile_margin) * ${col})`,
        y: `calc(${row} * var(--default_tile_size) + var(--default_tile_margin) * ${row})`,
        prevRow: `calc(${prevCol} * var(--default_tile_size) + var(--default_tile_margin) * ${prevCol})`,
        prevCol: `calc(${prevRow} * var(--default_tile_size) + var(--default_tile_margin) * ${prevRow})`,
      };
      return css`
        transform: ${`translate(${position.prevRow},${position.prevCol})`};
        opacity: ${isNew ? 0 : 1};
        animation-duration: ${isCombined || isNew ? ".2s" : ".1s"};
        animation-delay: ${isNew ? ".2s" : "none"};
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        z-index: ${isNew || isCombined ? 0 : 0};
        animation-name: ${isNew
          ? scaleUp(position)
          : isCombined
          ? pop(position)
          : beRemoved
          ? slideOutTile(position)
          : slideTile(position)};
      `;
    }
  }}
  position: absolute;
  text-align: center;
  font-size: ${(props) =>
    props.tile.number < 100
      ? "4.4rem"
      : props.tile.number < 1000
      ? "4rem"
      : "3.2rem"};
  font-weight: bold;
`;

const pop = ({ x, y }) => keyframes`
 from{
    transform: ${`translate(${x},${y})`} scale(0);
  }
  80%{
    transform: ${`translate(${x},${y})`} scale(1.2);
  }
  to{
    transform: ${`translate(${x},${y})`} scale(1);
  }
`;

const slideTile = ({ prevRow, x, prevCol, y }) => keyframes`
  from {
    transform: ${`translate(${prevRow},${prevCol})`};
  }
  to{
    transform : ${`translate(${x},${y})`};
  }
`;

const slideOutTile = ({ prevRow, x, prevCol, y }) => keyframes`
  from {
    transform: ${`translate(${prevRow},${prevCol})`};
  }
  to{
    transform : ${`translate(${x},${y})`};
    display: none;
  }
`;

const scaleUp = ({ x, y }) => keyframes`
  from {
    transform: ${`translate(${x},${y})`} scale(0);
  }
  to{
    transform: ${`translate(${x},${y})`} scale(1);
    opacity: 1;
  }
`;
