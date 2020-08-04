let htmlElment = '', play, winCorrect = ["111213", "212223", "313233", "112131", "122232", "132333", "112233", "132231"], playerOne = '', playerTwo = ''
for (i = 1; i <= 3; i++) {
    htmlElment += `<tr>`
    for (j = 1; j <= 3; j++) {
        htmlElment += `<td style="cursor:pointer;width:100px;height:100px;" onclick="tic(${i}${j})"><h1 id="${i}${j}"> </h1> </td>`
    }
    htmlElment += `</tr>`
}

document.getElementById("board").innerHTML = htmlElment

function setPlayer(str) {
    str == 'a' ? play = "X" : play = "O"
}

function tic(id) {
    document.getElementById(id).textContent = play
    play == "X" ? playerOne += id : playerTwo += id
    winCorrect.forEach((item) => {
        if(playerOne==item){
            alert("Player 1st WIN")
        }
        if(playerTwo==item){
            alert("Player 2nd WIN")
        }
    })
}