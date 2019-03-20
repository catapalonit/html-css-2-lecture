
document.getElementById("send").addEventListener("click", updateChat) ;

function updateChat(){
    console.log("it works");
    let response = document.getElementById("customer-input").value;
    let chatBox = document.getElementById("chat")
    let newChat = document.createElement("p");
    newChat.innerText = response;

    chatBox.appendChild(newChat);
}


// .append(element)
// .remove(element)
// .parentNode();
// .getAttribute(aria-checked);
// .setAttribute("");