const input=document.getElementById("item-input");
const addButton=document.getElementById("add-item-btn");
const list=document.getElementById("list-item");

addButton.addEventListener("click", ((e)=>{
    const text=input.value;
    
    const li=document.createElement('li');
    li.innerHTML=`${text}
    <button class="delete-btn"> Delete </button>
    `;
    list.append(li);
    input.value='';

    list.addEventListener("click" , function(e) {
        if(e.target.classList.contains("delete-btn")){
            e.target.closest('li').remove();
          
        }
    })

}));