let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelectorAll(".resetbtn")[1];
let win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let winner = document.querySelector(".winner");
let newbtn = document.querySelector(".newbtn");

let turn = true;

let checkwinner = () => {
    for(let indx of win){
        let num1 = boxes[indx[0]].innerText;
        let num2 = boxes[indx[1]].innerText;
        let num3 = boxes[indx[2]].innerText;
        if(num1 != "" &&num2 != "" && num3 != ""){
            if(num1===num2&&num2===num3){           
                turn=true;
                boxes.forEach((box)=>{
                    box.disabled = true;
                })
                winner.innerText = "Winner is : " + num1; 
                winner.classList.add("show");
                newbtn.classList.add("show");
            }
        }
    }
}


boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(turn){
            box.innerText = "X";
            turn = false;
            box.classList.add("x");
            box.classList.remove("o");
        }
        else{
            box.innerText = "O";
            turn = true;
            box.classList.add("o");
            box.classList.remove("x");
        }
        box.disabled = true;
        checkwinner();
    });
})

let reset = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.classList.remove("x");
        box.classList.remove("o");
        box.disabled = false;
    })
    turn=true;
}

newbtn.addEventListener("click",reset);
newbtn.addEventListener("click",()=>{
    winner.classList.remove("show");
    newbtn.classList.remove ("show");
});


resetbtn.addEventListener("click",reset);




