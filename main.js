//1,2
const body = document.querySelector("body"); //to select the body
const header1 = document.createElement("h1"); //create h1 (header)
header1.innerHTML =" Todo List"; //add content in h1
const uList = document.createElement("ul"); // create an unorder list
uList.id = "uList";


body.append(header1); //to append in body parent.append(element)
body.append(uList); 

//3

const toDos = ["wake up","eat breakfast", "code"];



//4
const randerList = () => {
const liElements = document.querySelector("#uList");
// for (let i =0 ;i<toDos.length;i++ ) {
//     const liList = document.createElement("li");
//     liList.innerHTML= toDos[i];
//     liElements.append(liList);
// }
toDos.forEach((elem) => {
const liList = document.createElement("li");
liList.innerHTML= elem;
liElements.append(liList);
});
}
randerList();

//5
const addToList = () => {
    // console.log("hi!");
const textValue = document.querySelector("#text1");
// console.log(textValue.value);


}

const text1 = document.createElement("INPUT");
text1.id = "text1"
text1.setAttribute("type", "text");
body.append(text1);
const btn1 = document.createElement("INPUT");
btn1.setAttribute("type", "button");
btn1.setAttribute("value", "Add");

body.append(btn1);

btn1.addEventListener("click",addToList);

addToList();




