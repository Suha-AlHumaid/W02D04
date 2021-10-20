//1,2
const body = document.querySelector("body"); //to select the body
const header1 = document.createElement("h1"); //create h1 (header)
header1.innerHTML = " Todo List"; //add content in h1
const uList = document.createElement("ul"); // create an unorder list
uList.id = "uList";

body.append(header1); //to append in body parent.append(element)
body.append(uList);

const toDos = ["wake up", "eat breakfast", "code"];

//3--4
const randerList = () => {
  const liElements = document.querySelector("#uList");
  liElements.innerHTML = "";
  toDos.forEach((elem,i) => {
    const liList = document.createElement("li");
    liList.innerHTML = elem;
    liElements.append(liList);
    //delete btns
    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML="Delete";
    deleteBtn.id=i;
    liList.append(deleteBtn);
    //edit btns
    const editBtn = document.createElement("button")
    editBtn.innerHTML="Edit";
    editBtn.id=i;
    liList.append(editBtn);
  });
  // for (let i =0 ;i<toDos.length;i++ ) {
  //     const liList = document.createElement("li");
  //     liList.innerHTML= toDos[i];
  //     liElements.append(liList);
  // }
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



//7

