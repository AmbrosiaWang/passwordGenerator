const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const alertEL = document.querySelector(".alert-container");


btnEl.addEventListener("click", function(){
    createPassword();
});

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
    const randomPswdLength = 8;
    let password = ""
    for (let index = 0; index < randomPswdLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length)
        password += chars.substring(randomNum,randomNum + 1)
    }
    inputEl.value = password;
}

copyIcon.addEventListener("click",function(){
    if(inputEl.value){
    copyPassword();
    }
})

function copyPassword(){
    inputEl.select();
    navigator.clipboard.writeText(inputEl.value);
    alertEL.classList.remove("hide");
        
    setTimeout(alert, 2500);
    function alert(){
        alertEL.classList.add("hide");

    } 
}

