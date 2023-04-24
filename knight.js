function Node(position, path){
    //current position
    //array holding all previous positions
    return {position, path };
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

function knightMoves([x,y], [endx, endy]){
    let holder = [Node([x,y], [[x,y]])];
    let currentNode = holder.shift();

    while (currentNode.position[0] != endx || currentNode.position[1] != endy){
        let moves = [
            [currentNode.position[0] + 2, currentNode.position[1] - 1],
            [currentNode.position[0] + 2, currentNode.position[1] + 1],
            [currentNode.position[0] - 2, currentNode.position[1] - 1],
            [currentNode.position[0] - 2, currentNode.position[1] + 1],
            [currentNode.position[0] + 1, currentNode.position[1] - 2],
            [currentNode.position[0] + 1, currentNode.position[1] + 2],
            [currentNode.position[0] - 1, currentNode.position[1] - 2],
            [currentNode.position[0] - 1, currentNode.position[1] + 2],
        ];
        moves.forEach((move) => {
            let nextNode = Node(move, currentNode.path.concat([move]));
            if (nextNode){
                holder.push(nextNode)
            }
        });
        currentNode = holder.shift()
    }

    let pathLength = currentNode.path.length -1;
    console.log("You made it in " + pathLength + "moves! Heres's your path:");
    currentNode.path.forEach((position) => {
        console.log(position)
    }
    ); 
}

knightMoves([0,0],[3,3])