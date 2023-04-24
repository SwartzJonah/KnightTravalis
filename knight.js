function node(x,y){
    return {x, y}
}

function makeBoard(){
    const board = [];
    for (let i = 0; i<8; i++){
        board[i] = [];
        for (let j = 0; j<8; j++){
            board[i][j] = `[${i}, ${j}]`;
        }
    }
}