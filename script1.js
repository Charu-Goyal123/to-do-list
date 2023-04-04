const inputbox=document.querySelector(".inputfield input");
const addbtn=document.querySelector(".inputfield button");
const todolst=document.querySelector(".todolist");

inputbox.onkeyup =()=>{
    let userData=inputbox.value;
    if(userData.trim()!=0){
        addbtn.classList.add("active");

    }
    else{
        addbtn.classList.remove("active");
    }
}
showTasks();
addbtn.onclick =() =>{
    let userData=inputbox.value;
    let getLocalStorage=localStorage.getItem("New Todo");
    if(getLocalStorage==null){
        listArr=[];
    }
    else{
       listArr=JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

function showTasks()
{
    let getLocalStorage=localStorage.getItem("New Todo");
    if(getLocalStorage==null){
        listArr=[];
    }
    else{
       listArr=JSON.parse(getLocalStorage);
    }
    let newLiTag='';
    listArr.forEach((element,index) => {
     newLiTag +=`<li> ${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash></i></span></li>`;
   });
      todolst.innerHTML=newLiTag;  
      inputbox.value="";
}
function deleteTask(index){
    let getLocalStorage=localStorage.getItem("New Todo");
    listArr=JSON.parse(getLocalStorage);
    listArr.splice(index,1)
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}


    
