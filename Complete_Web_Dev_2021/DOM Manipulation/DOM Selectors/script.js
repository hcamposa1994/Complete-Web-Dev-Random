var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

function createDeleteButtonElement() {
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("X"));
  btn.classList.add("delete");
  btn.addEventListener("click", function () {
    btn.parentElement.remove();
  });
  return btn;
}

li.forEach(function (element) {
  element.append(createDeleteButtonElement());
});

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(createDeleteButtonElement());
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterEnterKeypress(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

function toggleDoneClass(event) {
  var target = event.target;
  if (!target.classList.contains("delete")) {
    target.classList.toggle("done");
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnterKeypress);

ul.addEventListener("click", toggleDoneClass);
