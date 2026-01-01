let curplayer='X';
let arr=Array(9).fill(null);

let gameover=false;
function resetGame(){
    location.reload();
}

function checkwinner(){
    if((arr[0]!==null && arr[0]==arr[1] &&arr[1]==arr[2])||
    (arr[3]!==null && arr[3]==arr[4] &&arr[4]==arr[5])||(arr[6]!==null && arr[6]==arr[7] &&arr[7] ==arr[8])||
    (arr[0]!==null && arr[0]==arr[3] &&arr[3] ==arr[6])||(arr[1]!==null && arr[1]==arr[4] &&arr[4] ==arr[7])||
    (arr[2]!==null && arr[2]==arr[5] &&arr[5] ==arr[8])||
    (arr[0]!==null && arr[0]==arr[4] &&arr[4] ==arr[8])||(arr[2]!==null && arr[2]==arr[4] &&arr[4] ==arr[6]))
    {
        const res = document.getElementById("result");
        res.innerText = `Player ${curplayer} Wins!`;
        res.className = "win";
        gameover=true;
        return;
    }
    else if(!arr.some(e=>e===null)){
        const res = document.getElementById("result");
        res.innerText = "Game Draw!";
        res.className = "draw";
        gameover=true;
        return;
    }
}
function handleclick(e){
    if( gameover) return;
    const id=e.id;
    if(arr[id]!==null) return;
    arr[id]=curplayer;
    e.innerText=curplayer;
    if(curplayer==='X'){
        document.getElementById(id).style.backgroundColor="red";
    }
    else{
        document.getElementById(id).style.backgroundColor="green";
    }
    checkwinner();
    curplayer=curplayer==='X'?'O':'X';
    
}