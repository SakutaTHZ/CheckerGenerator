var board = [
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','','']
]
var box = 8;

var generateBoard = () =>{
    var gameBoard = document.createElement("div");
    var boxes = ()=>{
        let generatedBoxes = '';
        var switcher = 0;
        for (let i = 1; i <= box; i++) {
            switcher = switcher== 0 ? 1 : 0;
            for (let j = 1; j <= box; j++) {
                if(switcher == 1){
                    generatedBoxes = j%2 == 0 ? generatedBoxes= generatedBoxes + ` <div class="black"></div>` : generatedBoxes= generatedBoxes + ` <div class="white"></div>`;
                }else{
                    generatedBoxes = j%2 == 0 ? generatedBoxes= generatedBoxes + ` <div class="white"></div>` : generatedBoxes= generatedBoxes + ` <div class="black"></div>`;
                }
            }
            
        console.log(i,box);
        }
        return generatedBoxes;
    }
    gameBoard.classList.add("board");
    gameBoard.innerHTML = `
        ${boxes()}
    `
    document.body.appendChild(gameBoard);
}
generateBoard();

function boxNumberChange(){
    document.documentElement.style.setProperty('--boxNumber', document.querySelector('.boxes').value);
    box = document.querySelector('.boxes').value;
    var remove = document.querySelector(".board");
    remove.parentNode.removeChild(remove);
    generateBoard();
}