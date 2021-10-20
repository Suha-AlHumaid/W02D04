//1,2
const body = document.querySelector("body"); //to select the body
const header1 = document.createElement("h1"); //create h1 (header)
header1.innerHTML = " To Do List"; //add content in h1
const uList = document.createElement("ul"); // create an unorder list
uList.id = "uList";

body.append(header1); //to append in body parent.append(element)
body.append(uList);

const toDos = ["wake up", "eat breakfast", "code"];

//3--4
const randerList = () => {
    //Display list
  const liElements = document.querySelector("#uList");
  liElements.innerHTML = "";
  toDos.forEach((elem,i) => {
    const liList = document.createElement("li");
    liList.id = i;
    liList.innerHTML = elem;
    liElements.append(liList);

    //delete btns
    // const deleteBtn = document.createElement("button")
    // deleteBtn.innerHTML="Delete";
    const deleteBtn = document.createElement("INPUT");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "Delete");
    deleteBtn.id="delBtn";
    deleteBtn.addEventListener("click",(i) => del(i));
    liList.append(deleteBtn);
    // delBtn.addEventListener("click", () =>dele (i));
   
    
    
    //edit btns
    // const editBtn = document.createElement("button")
    // editBtn.innerHTML="Edit";
    const editBtn = document.createElement("INPUT");
    editBtn.setAttribute("type", "button");
    editBtn.setAttribute("value", "Edit");
    editBtn.id="editBtn";
    editBtn.addEventListener("click",(i) => edit(i));
    liList.append(editBtn);

  });
  

};
randerList();

//5
const addToList = () => {
  const textField= document.querySelector("#textField")
  let textValue = textField.value;
  toDos.push(textValue);
  randerList();
};

const text1 = document.createElement("INPUT");
text1.id = "textField";
text1.setAttribute("type", "text");
body.append(text1);
const btn1 = document.createElement("INPUT");
btn1.setAttribute("type", "button");
btn1.setAttribute("value", "Add");
body.append(btn1);
btn1.addEventListener("click", addToList);


//6 Delete
function del (index) {
toDos.splice(index,1);
randerList();
  };



//7
  
  
const edit = function(index) {
console.log("call me?");
randerList();
  };
