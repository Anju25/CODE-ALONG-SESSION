var board=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
 const player1_button=document.getElementById('player-1');
const player2_button=document.getElementById('player-2');

 player1_button.addEventListener('click',rollDice_1);
 player1_button.addEventListener('click',rollDice_2);

 var player1=["proGrad",0,1000];
 var player2=["facaeprep",0,1000];

 function rollDice_1(){
     let position=math.floor(math.random()*6)+1;
     console.log("plalyer one rolls",position);
     changePosition_1(player1[1],position);
 }

 function rollDice_2(){
    let position=math.floor(math.random()*6)+1;
    console.log("plalyer one rolls",position);
    changePosition_2(player2[1],position);
}


 function changePosition_1(old,currentPos)
 {
     var newPosiiton=old-currentPos;
     player1[1]=newPosition;
     console.log(player1[1]);
     updatemoney_1(player1[1]);
 }

 function changePosition_2(old,currentPos)
 {
     var newPosiiton=old-currentPos;
     player2[1]=newPosition;
     console.log(player2[1]);
     updatemoney_2(player2[1]);
 }


  function updatemoney_1(p1)
{
    var updatemoney=0;
    if(p1<board.length)
    updatemoney=player1[2]-board[p1-1];
    else{
        p1=p1%15;
        updatemoney=player1[2]-board[p1-1];
    }
    console.log(updatemoney);
}


function updatemoney_2(p2)
{
    var updatemoney=0;
    if(p1<board.length)
    updatemoney=player2[2]-board[p2-1];
    else{
        p2=p2%15;
        updatemoney=player2[2]-board[p2-1];
    }
    console.log(updatemoney);
}