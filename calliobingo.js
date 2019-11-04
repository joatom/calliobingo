// @author Johannes Tomasoni

let bagsize = 25
let bag: number[] = []

let curNumber = 0

let board: Image = images.createImage(`
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . `)
let boardView = false
let pagesize = 25
let page = 0


// Fill bag
for (let i = 1; i <= bagsize; i++) {
    bag.push(i)
}


input.onButtonPressed(Button.A, () => {
    // if still numbers in bag
    if (bag.length > 0) {
        // Draw a number from bag
        if (!boardView) {
            page = 0
            curNumber = bag.removeAt(Math.random(bag.length))
            basic.showNumber(curNumber)
            updateBoard(curNumber)
        }
        // view previous board page
        else {
            basic.clearScreen()
            nextPage(-1)
            showBoard()
        }
    }
    // game over
    else {
        boardView = true
        showBoard()
        basic.showString("GAME OVER!")
        showBoard()
    }
})

input.onButtonPressed(Button.B, () => {
    // view last drawn number
    if (!boardView) {
        basic.showNumber(curNumber)
    }
    // view next board page
    else {
        basic.clearScreen()
        nextPage(1)
        showBoard()
    }


})


// toggle number drawing view and board view
input.onButtonPressed(Button.AB, () => {
    boardView = !(boardView)
    basic.clearScreen()
    page = 0
    if (boardView) {
        showBoard()
    } else {
        basic.setLedColor(0)
    }
})


function updateBoard(curNumber: number) {
    // Page 0: 1 - 25
    // Page 1: 26 - 50
    // ...
    board.setPixel(((curNumber - 1) % 5) + (floor((curNumber - 1) / pagesize) * 5),
        floor(((curNumber - 1) % pagesize) / 5), true)
}

// pagingDir = +1: page to the rigth
// pagingDir = +1: page to the left
function nextPage(pagingDir: number) {
    let totalPages = bagsize / pagesize
    if (totalPages > (page + 1 * pagingDir) && 0 <= (page + 1 * pagingDir)) {
        page = page + 1 * pagingDir;
    }
}

function showBoard() {
    if (boardView) {
        board.showImage(page * 5)
        switch (page) {
            case 0:
                basic.setLedColor(Colors.Blue)
                break;
            case 1:
                basic.setLedColor(Colors.Green)
                break; case 2:
                basic.setLedColor(Colors.Indigo)
                break; case 3:
                basic.setLedColor(Colors.Orange)
                break; case 4:
                basic.setLedColor(Colors.Purple)
                break;
        }
    }
}

function floor(x: number) {
    let f = 0
    if (x > 0) {
        f = x | 0
    }
    return f
}
