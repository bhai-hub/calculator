


let arr = ["C" , "CE" , "%", "/", "7", "8","9", "*", "4", "5", "6", "-", "1","2","3","+","00","0", ".","="]

for(var i =0; i<arr.length; i++){
    inputElement = document.createElement("input");

    // Set attributes for the input element
    inputElement.type = "button"; // You can change the type to "password", "checkbox", etc.
    inputElement.value = `${arr[i]}`; // Set a unique ID for the input element

    // Append the input element to the body of the document
    document.querySelector(".row").appendChild(inputElement);
}


const buttons = document.querySelectorAll('.row>input');
const display = document.querySelector(".display>input")

buttons.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        if(btn.value == "C"){
            display.value = "0";
        }
        else if(btn.value == "CE"){
            display.value = display.value.toString().slice(0, -1)
        }
        else if(btn.value == "="){
            display.value = eval(display.value)
        }
        else{
            display.value += btn.value
        }
    })
})

display.addEventListener("keydown", function(e){
    if (e.keyCode === 13){
        display.value = eval(display.value)
    }
    else if(e.keyCode === 8){
        display.value = display.value.toString().slice(0, -1)
    }
})
