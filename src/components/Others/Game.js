import React, { Component } from 'react'
import Board from './Board'

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


class Game extends Component {
  constructor (props) {
    super(props)
    this.state = {
      history: [
        { squares: Array(9).fill(null) }
      ],
      step: 0,
      xIsNext: true
    }
  }

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.step + 1)
    const current = history[history.length - 1]
    let squares = current.squares.slice()

    if (calculateWinner(squares) || squares[i]) {
      return
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: this.state.history.concat([
        { squares }
      ]),
      step: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo = step => {
    this.setState({
      step,
      xIsNext: (step % 2) ? false : true
    })
  }

  render () {
    const currentSquare = this.state.history[this.state.step]
    const winner = calculateWinner(currentSquare.squares)

    const moves = this.state.history.map((step, idx) => {
      const desc = idx ?
        'Move #' + idx :
        'Game start';
      return (
        <li key={idx}>
          <span onClick={() => this.jumpTo(idx)}>{desc}</span>
        </li>
      )
    })

    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    }

    return (
      <div>
        <div>Game info</div>
        <Board squares={currentSquare.squares} onClick={(i) => this.handleClick(i)}/>
        <div className="">{status}</div>
        <div className="">{moves}</div>
      </div>
    )
  }
}

export default Game