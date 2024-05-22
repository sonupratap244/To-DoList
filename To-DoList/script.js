const mainTodoElem = document.querySelector(".todo-list-elem");
const inputValue= document.getElementById("inputValue");



const getTodoListFormLocal =()=>{
  return JSON.parse(localStorage.getItem("youtubeTodoList"));
};

  const todoListLocalStorage = (localTodoLists) =>{
    return localStorage.setItem("youtubeTodoList",JSON.stringify(localTodoLists));
  };

  let localTodoLists=getTodoListFormLocal() ||[];

const addTodoDynamicElement = (curElem)=>{
    const divElement = document.createElement("div");
    divElement.classList.add("main_todo_div");
    divElement.innerHTML = `<li>${curElem}</li> <button class="deleteBtn">Delete</button>`;
    mainTodoElem.append(divElement);
};


const addTodolist = (e) =>{
    e.preventDefault();
     
    const todoListValue= inputValue.value.trim();
   
    inputValue.value ="";

    if(todoListValue !== "" && !localTodoLists.includes(todoListValue)){

    
   

    localTodoLists.push(todoListValue);
    localTodoLists =[...new Set(localTodoLists)];
      //console.log(localTodoLists);
      localStorage.setItem("youtubeTodoList",JSON.stringify(localTodoLists));

   addTodoDynamicElement(todoListValue);

    }
};

const showTodoList =()=>{
    //console.log(localTodoLists);

    localTodoLists.forEach((curElem) => {
        addTodoDynamicElement(curElem);
    });
};
showTodoList();

const removeTodoElem = (e) =>{
    let todoToremove = e.target;
    let todoListContent = todoToremove.previousElementSibling.innerText;
   
   let parentElem = todoToremove.parentElement;
    console.log(todoListContent);

   localTodoLists = localTodoLists.filter((curTodo)=>{
    return curTodo !== todoListContent.toLowerCase();
   });
   //console.log(localTodoLists);
   parentElem.remove();
};

mainTodoElem.addEventListener("click",(e) =>{
  e.preventDefault();

  //console.log(e.target.classList.contains("deleteBtn"));
if(e.target.classList.contains("deleteBtn")){
    removeTodoElem(e);
}

  //removeTodoElem(e);
});

 document.querySelector(".btn").addEventListener('click',(e)=>{ 
addTodolist(e);
 });

 