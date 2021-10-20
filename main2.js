// Make a list
const ul = document.createElement('ul');
document.body.appendChild(ul);

const li1 = document.createElement('li');
li1.innerHTML="suha1"
li1.id="li1";
const li2 = document.createElement('li');
li2.innerHTML="suha2"
li2.id="li2";
const btn = document.createElement("button");
btn.id ="btnId";
btn.innerHTML = "button";
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(btn);

function del (event) {
  // e.target refers to the clicked <li> element
  // This is different than e.currentTarget, which would refer to the parent <ul> in this context
const tag = event.target.id;
console.log(tag);
}
document.addEventListener("click",del)

// Attach the listener to the list
// It will fire when each <li> is clicked
