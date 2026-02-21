let num1="";
let num2="";
let operator=""
let size=640;
let rows=4;
let cols=4;
let answer='';

const calculator=document.querySelector(".calculator")
const div=document.querySelector("div");
div.style.height='50px';
div.style.width="640px";

div.textContent= "";

function grid(){
    for (let i=0;i<rows*cols;i++){
        const btn=document.createElement("button");
        btn.classList.add("numbers");
        
        if (i === 10) {
        btn.textContent = "+";
    } else if (i === 11) {
        btn.textContent = "-";
    } else if (i === 12) {
        btn.textContent = "*";
    } else if (i === 13) {
        btn.textContent = "/";
    } else if (i === 14) {
        btn.textContent = "=";
    } else if (i === 15) {
        btn.textContent = "C"; 
    } else {
        btn.textContent = i; // Buttons 0-9 will just show their number
    }
    btn.addEventListener("click",()=>{

        if(i>9 && i<14){
            operator=btn.textContent;
            div.textContent=operator;
        }
        else if(i==14){
            answer=operate(num1,num2);
            div.textContent=answer;
        }
        else if(i==15){
            num1='';
            num2='';
            operator='';
            div.textContent='0'
        }
        else{
            if(operator===""){

                num1=num1+btn.textContent;
                div.textContent=num1;

            }
            else {
                num2=num2+btn.textContent;
                div.textContent=num2;
            }
            

        }

    })
        calculator.appendChild(btn)
        btn.style.height=`${size/16}px`;
        btn.style.width=`${size/10}px`;
    }
}
function add(){
    let result =Number(num1)+Number(num2);
    return result; 
}
function sub(){
    let result =Number(num1)-Number(num2);
    return result;
}
function mul(){
    let result =Number(num1)*Number(num2);
    return result;
}
function divide(){
    let result=Number(num1)/Number(num2);
    return result;
}
function operate(num1,num2){

    if(operator=="+"){
        return add();
    
    }
    else if(operator=="-"){
        return sub();
    }
    else if(operator=="*"){
        return  mul();
    }
    else {
        return divide();

    }
        
  
    
}
grid();