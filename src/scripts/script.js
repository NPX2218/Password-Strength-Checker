
let parameters = {
    count : false,
    letters : false,
    numbers : false,
    special : false
}

let strengthBar = document.getElementById("strength-bar");
let msg = document.getElementById("msg");
let currentPageColor = "#ac92eb";

function strengthChecker(){
    let password = document.getElementById("password").value;
    if(password==""){
        document.body.style.background = "#ac92eb";
        msg.textContent = "Please enter a password!"    
    }
    parameters.letters = (/[A-Za-z]+/.test(password))?true:false;
    parameters.numbers = (/[0-9]+/.test(password))?true:false;
    parameters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password))?true:false;
    parameters.count = (password.length > 7)?true:false;

    let barLength = Object.values(parameters).filter(value=>value);

    //console.log(Object.values(parameters), barLength);

    strengthBar.innerHTML = "";
    for( let i in barLength){
        let span = document.createElement("span");
        span.classList.add("strength");
        strengthBar.appendChild(span);
    }


    let spanRef = document.getElementsByClassName("strength");
    for(let i = 0; i < spanRef.length; i++){
        switch(spanRef.length - 1){
            case 0 :
                spanRef[i].style.background = "#ff3e36";
                msg.textContent = "Your password is very weak ❌";
                document.body.style.background = "#ff3e36";
                currentPageColor = "#ff3e36";
                break;
            case 1:
                spanRef[i].style.background = "#ff691f";
                msg.textContent = "Your password is weak 📙";
                document.body.style.background = "#ff691f";
                currentPageColor = "#ff691f";
                break;
            case 2:
                spanRef[i].style.background = "#ffda36";
                msg.textContent = "Your password is good 🔰";
                document.body.style.background = "#ffda36";
                currentPageColor = "#ffda36"; 
                break;
            case 3:
                spanRef[i].style.background = "#0be881";
                msg.textContent = "Your password is strong 💪";
                document.body.style.background = "#0be881";
                currentPageColor = "#0be881";
                break;
        }
    }
}

function checkDelete(){
    if(document.getElementById("password").value == ""){
        document.body.style.background = "#0be881";
    }
}

function toggle(){
    let password = document.getElementById("password");
    let eye = document.getElementById("toggle");

    if(password.getAttribute("type") == "password"){
        password.setAttribute("type","text");
        eye.style.color = currentPageColor;
        //eye.style.color = "#0be881";
    }
    else{
        password.setAttribute("type","password");
        eye.style.color = "#808080";
    }
};