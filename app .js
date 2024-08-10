let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset-button");
let newgamebutton = document.querySelector("#new-btn");
let mescontainer = document.querySelector(".mes-container");
let mes = document.querySelector("#mes");

let turnO = true ;//player X player O

const winpattens =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame =()=>{
    let turnO = true ;
    enableboxes();
    mescontainer.classList.add("hide");
} ;

boxes.forEach((box)=>{
box.addEventListener("click",() =>{
  
    if(turnO){
        box.innerText ="O";
        turnO = false;
    }else{
        box.innerText ="X";
        turnO = true;
    }
     box.disabled = true;
     checwinner();
})
} );


const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};


const enableboxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};


    const showwinner =(winner)=>{
mes.innerText= `congratulation , winner is ${winner}`;
mescontainer.classList.remove("hide");
disabledboxes();
    };



const checwinner = ()=>{
    for( let pattern  of winpattens){
        
        let pos1val= boxes[pattern [0]].innerText;
        let pos2val= boxes[pattern [1]].innerText;
        let pos3val= boxes[pattern [2]].innerText;
        if( pos1val != ""&& pos2val!=""&&pos3val!=""){
            if(pos1val==pos2val&&pos2val==pos3val){
               
                showwinner(pos1val);
            }
        }
}
};


newgamebutton.addEventListener("click",resetgame );
resetbutton.addEventListener("click",resetgame);

