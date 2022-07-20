import React, { useState, useRef } from "react";

const Game2048 = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  const [tableID, setTableID] = useState([
    ["00", "01", "02", "03"],
    ["10", "11", "12", "13"],
    ["20", "21", "22", "23"],
    ["30", "31", "32", "33"],
  ]);

  const [score, setScore] = useState(0);

  document.onkeydown = keyDownEventHandler;
  function keyDownEventHandler(e) {
    switch (e.keyCode) {
      case 38:
        moveDir(0);
        break;
      case 40:
        moveDir(1);
        break;
      case 37:
        moveDir(2);
        break;
      case 39:
        moveDir(3);
        break;
      default:
        break;
    }
  }

  init();

  function init() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) setBoard[i][j](0);
    }
    for (let i = 0; i < 2; i++) {
      let rand = parseInt(Math.random() * 16);
      let y = parseInt(rand / 4);
      let x = rand % 4;
      if (board[y][x] === 0) return setBoard[y][x](getNewNum());
      else i--;
    }
    update();
  }

  function update() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        let cell = document.getElementById(tableID[i][j]);
        cell.innerHTML = board[i][j] === 0 ? "" : board[i][j];
        coloring(cell);
      }
    }
    // document.getElementById("score").innerHTML = score;
  }

  function coloring(cell) {
    let cellNum = parseInt(cell.innerHTML);
    switch (cellNum) {
      case 2:
        cell.style.color = "#684a23";
        cell.style.background = "#fbeddc";
        break;
      case 4:
        cell.style.color = "#684a23";
        cell.style.background = "#f9e2c7";
        break;
      case 16:
        cell.style.color = "#684a23";
        cell.style.background = "#fbeddc";
        break;
      case 32:
        cell.style.color = "#684a23";
        cell.style.background = "#efb46d";
        break;
      case 64:
        cell.style.color = "#ffffff";
        cell.style.background = "#eba24a";
        break;
      case 128:
        cell.style.color = "#ffffff";
        cell.style.background = "#e78e24";
        break;
      case 256:
        cell.style.color = "#ffffff";
        cell.style.background = "#e87032";
        break;
      case 512:
        cell.style.color = "#ffffff";
        cell.style.background = "#e85532";
        break;
      case 1024:
        cell.style.color = "#ffffff";
        cell.style.background = "#e84532";
        break;
      case 2048:
        cell.style.color = "#ffffff";
        cell.style.background = "#e83232";
        break;
      default:
        if (cellNum > 2048) {
          cell.style.color = "#ffffff";
          cell.style.background = "#e51a1a";
        } else {
          cell.style.color = "#684a23";
          cell.style.background = "#fbeddc";
        }
        break;
    }
  }

  function moveDir(opt) {
    switch (opt) {
      case 0:
        move();
        break;
      case 1:
        rotate(2);
        move();
        rotate(2);
        break;
      case 2:
        rotate(1);
        move();
        rotate(3);
        break;
      case 3:
        rotate(3);
        move();
        rotate(1);
        break;
      default:
        break;
    }
    update();
  }

  function rotate(n) {
    while (n--) {
      let tempBoard = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          tempBoard[i][j] = board[i][j];
        }
      }
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          setBoard[j][3 - i](tempBoard[i][j]);
        }
      }
    }
  }

  function move() {
    let isMoved = false;
    let isPlused = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] === 0) continue;
        let tempY = i - 1;
        while (tempY > 0 && board[tempY][j] === 0) tempY--;
        if (board[tempY][j] === 0) {
          setBoard[tempY][j](board[i][j]);
          setBoard[i][j](0);
          isMoved = true;
        } else if (board[tempY][j] !== board[i][j]) {
          if (tempY + 1 === i) continue;
          setBoard[tempY + 1][j](board[i][j]);
          setBoard[i][j](0);
          isMoved = true;
        } else {
          if (isPlused[tempY][j] === 0) {
            setBoard[tempY][j](setBoard[tempY][j] * 2);
            setScore(board[tempY][j] + score);
            setBoard[i][j](0);
            isPlused[tempY][j] = 1;
            isMoved = true;
          } else {
            setBoard[tempY + 1][j](board[i][j]);
            setBoard[i][j](0);
            isMoved = true;
          }
        }
      }
    }
    if (isMoved) generate();
    else checkGameOver();
  }

  function generate() {
    let zeorNum = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] === 0) {
          zeorNum++;
        }
      }
    }
    while (true) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (board[i][j] === 0) {
            let rand = parseInt(Math.random() * zeorNum);
            if (rand === 0) {
              setBoard[i][j](getNewNum());
              return;
            }
          }
        }
      }
    }
  }

  function getNewNum() {
    let rand = parseInt(Math.random() * 10);
    if (rand === 0) return 4;
    return 2;
  }

  function getMaxNum() {
    let ret = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] > ret) {
          ret = board[i][j];
        }
      }
    }
    return ret;
  }

  function checkGameOver() {
    for (let i = 0; i < 4; i++) {
      let colCheck = board[i][0];
      if (colCheck === 0) return;
      for (let j = 1; j < 4; j++) {
        if (board[i][j] === colCheck || board[i][j] === 0) return;
        else colCheck = board[i][j];
      }
    }
    for (let i = 0; i < 4; i++) {
      let rowCheck = board[i][0];
      if (rowCheck === 0) return;
      for (let j = 1; j < 4; j++) {
        if (board[i][j] === rowCheck || board[i][j] === 0) return;
        else rowCheck = board[i][j];
      }
    }
    gameover();
  }

  function gameover() {
    alert("[Game Over]\nMax: " + getMaxNum() + "\nScore" + score);
    init();
  }

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

export default Game2048;
