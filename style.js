const roles = ["Python Developer 💻", "AI-ML Enthusiast 🤖", "UI/UX Designer 🎨"];
let index = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect(){
    if(index >= roles.length) index = 0;
    currentRole = roles[index];

    if(!isDeleting){
        typingElement.textContent = currentRole.substring(0,charIndex++);
        if(charIndex > currentRole.length){
            isDeleting = true;
            setTimeout(typeEffect,1000);
            return;
        }
    }else{
        typingElement.textContent = currentRole.substring(0,charIndex--);
        if(charIndex === 0){
            isDeleting = false;
            index++;
        }
    }
    setTimeout(typeEffect,100);
}

typeEffect();