import { useState, useRef } from "react";

const game2048 = () => {
  //   let board = Array(
  //     Array(0, 0, 0, 0),
  //     Array(0, 0, 0, 0),
  //     Array(0, 0, 0, 0),
  //     Array(0, 0, 0, 0)
  //   );
  //   let tableID = Array(
  //     Array("00", "01", "02", "03"),
  //     Array("10", "11", "12", "13"),
  //     Array("20", "21", "22", "23"),
  //     Array("30", "31", "32", "33")
  //   );
  //   let score = 0;

  //   init();
  //   function init() {
  //     for (let i = 0; i < 4; i++) {
  //       for (let j = 0; j < 4; j++) board[i][j] = 0;
  //     }
  //     for (let i = 0; i < 2; i++) {
  //       let rand = parseInt(Math.random() * 16);
  //       let y = parseInt(rand / 4);
  //       let x = rand % 4;
  //       if (board[y][x] == 0) board[y][x] == getNewNum();
  //       else i--;
  //     }
  //     update();
  //   }

  //   function update() {
  //     for (let i = 0; i < 4; i++) {
  //       for (let j = 0; j < 4; j++) {
  //         let cell = document.getElementById(tableID[i][j]);
  //         cell.innerHTML = board[i][j] == 0 ? "" : board[i][j];
  //         // coloring(cell);
  //       }
  //     }
  //     document.getElementById("score").innerHTML = score;
  //   }

  //   function coloring(cell){

  //   }

  //   function getNewNum() {
  //     let rand = parseInt(Math.random() * 10);
  //     if (rand == 0) return 4;
  //     return 2;
  //   }

  return (
    <>
      <table id="board">
        <tr>
          <td id="00"></td>
          <td id="01"></td>
          <td id="02"></td>
          <td id="03"></td>
        </tr>
        <tr>
          <td id="10"></td>
          <td id="11"></td>
          <td id="12"></td>
          <td id="13"></td>
        </tr>
        <tr>
          <td id="20"></td>
          <td id="21"></td>
          <td id="22"></td>
          <td id="23"></td>
        </tr>
        <tr>
          <td id="30"></td>
          <td id="31"></td>
          <td id="32"></td>
          <td id="33"></td>
        </tr>
      </table>
    </>
  );
};

export default game2048;
