const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function play() {
    console.log('hello idiot');
    var playerX = new Player('X', true);
    var playerO = new Player('O', false);
    var game = new Game(playerX, playerO);
    console.log(game.viewBoard());
}




class Game {
    moves;
    board;
    playerA;
    playerB;
    winningMoves;
    winner;

    constructor(playerX, playerO) {
        this.moves = [];
        this.board = [
            ['_', '_', '_'],
            ['_', '_', '_'],
            ['_', '_', '_']
        ];
        this.playerX = playerX;
        this.playerO = playerO;
        this.winningMoves = [
            ['00', '01', '02'],
            ['10', '11', '12'],
            ['20', '21', '22'],
            ['00', '10', '20'],
            ['01', '11', '21'],
            ['02', '12', '22'],
            ['00', '11', '22'],
            ['02', '11', '20'],
        ];
        winner = '';
    }

    checkForWin(player) {
        for (let move in this.winningMoves) {
            if (player.moves.includes(move)) {
                return player.getName();
            }
        }
    }

    addMove(x, y, player) {
        if (this.board[x][y].valueOf === '_') {
            this.board[x][y] = player.name;
            player.moves.push(x + '' + y);
            return true;
        } else {
            return false;
        }
    }

    viewBoard() {
        var view = '';
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                view += this.board[x][y] + ' ';
                if (y === 2) {
                    view += '\n';
                }
            }
        }
        return view;
    }
}

class Player {
    name;
    moves;
    isTurn;

    constructor(name, isTurn) {
        this.name = name;
        this.isTurn = isTurn;
        this.moves = [];
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name
    }

    addMove(params) {
        this.moves.push(params);
    }
}


play();



module.exports = {Game, Player};