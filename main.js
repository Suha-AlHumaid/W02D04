const body = document.querySelector("body"); //to select the body
const header1 = document.createElement("h1"); //create h1 (header)
header1.innerHTML = " To Do List"; //add content in h1
const uList = document.createElement("ul"); // create an unorder list
uList.id = "uList";

body.append(header1); //to append in body parent.append(element)
body.append(uList);

const toDos = ["wake up", "eat breakfast", "code"];

const addToList = () => {
  const textField = document.querySelector("#textField");
  let textValue = textField.value;
  toDos.push(textValue);
  randerList();
};

const text = document.createElement("INPUT");
text.id = "textField";
text.setAttribute("type", "text");
body.append(text);
const add = document.createElement("INPUT");
add.setAttribute("type", "button");
add.setAttribute("value", "Add");
body.append(add);
add.addEventListener("click", addToList);

// Delete function
function delFunc(index) {
  toDos.splice(index, 1);
  randerList();
}

//Edit function
function editFunc(index) {
  const element = prompt("Please enter updated list", "");
  toDos.splice(index, 1, element);
  randerList();
}

const randerList = () => {
  //Display list
  const liElements = document.querySelector("#uList");
  liElements.innerHTML = "";
  toDos.forEach((elem, index) => {
    let liList = document.createElement("li");
    liList.id = index;
    liList.innerHTML = elem;
    liElements.append(liList);

    //delete btns
    // const deleteBtn = document.createElement("button")
    // deleteBtn.innerHTML="Delete";
    const deleteBtn = document.createElement("INPUT");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "Delete");
    deleteBtn.id = "delBtn";
    deleteBtn.addEventListener("click", () => delFunc(index));
    liList.append(deleteBtn);

    //edit btns

    const editBtn = document.createElement("INPUT");
    editBtn.setAttribute("type", "button");
    editBtn.setAttribute("value", "Edit");
    editBtn.id = "editBtn";
    editBtn.addEventListener("click", () => editFunc(index));
    liList.append(editBtn);
  });
};
randerList();
