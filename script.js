let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelectorAll(".resetbtn")[1];
let win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let winner = document.querySelectorAll(".winner")[1];
let newbtn = document.querySelector(".newbtn");
let names = document.querySelector("form button");
let name1 = document.querySelectorAll("form input")[0];
let name2 = document.querySelectorAll("form input")[1];
let form = document.querySelector("form");
let container = document.querySelector(".container");




let turn = true;

let checkwinner = () => {
    for(let indx of win){
        let num1 = boxes[indx[0]].innerText;
        let num2 = boxes[indx[1]].innerText;
        let num3 = boxes[indx[2]].innerText;
        if(num1 != "" &&num2 != "" && num3 != ""){
            if(num1===num2&&num2===num3){
                console.log("Winner");
                boxes.forEach((box)=>{
                    box.disabled = true;
                })
                let naam;
                if(num1=="X"){
                    naam = name1.value;
                }
                else{
                    naam = name2.value;
                }
                winner.innerText = "Winner is : " + naam; 
                winner.classList.add("show");
                newbtn.classList.add("show");
                resetbtn.classList.add("winner");
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
        // console.dir(box);
    });
})

let reset = () => {
    turn = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.classList.remove("x");
        box.classList.remove("o");
        box.disabled = false;
    })
}

newbtn.addEventListener("click",reset);
newbtn.addEventListener("click",()=>{
    winner.classList.remove("show");
    newbtn.classList.remove ("show");
    resetbtn.classList.remove("winner");
});


resetbtn.addEventListener("click",reset);

names.addEventListener("click",()=>{
    console.log(name1.value,name2.value);
    if(name1.value!="" && name2.value!=""&&name1.value!=name2.value){
        form.classList.add("winner");
        container.classList.remove("winner");
    }
})