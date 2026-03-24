const inputuser=document.getElementById("input-user");
const textUser=document.getElementById("user-text");

inputuser.addEventListener("input" , (event) => {
    const currentText=event.target.value;
if(currentText === ""){
  textUser.textContent=" your text will show here"
}else{
    textUser.textContent=currentText;}
});