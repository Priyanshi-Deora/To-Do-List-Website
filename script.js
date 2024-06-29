var input_text = document.getElementById("input");
var add_text = document.getElementById("add");
var list = document.getElementById("ul");
var clear_text = document.getElementById("clear");
var pendingText = document.getElementById("pendingTask");

add_text.addEventListener("click", function () {
  var input = input_text.value.trim();
  if (input !== "") {
    const input_text_value = input_text.value;

    const li = document.createElement("li");
    li.innerText = input_text_value;
    li.setAttribute("id", "li");

    const button = document.createElement("button");
    button.innerText = "🗑️";
    button.setAttribute("id", "bin");

    button.addEventListener("click", function () {
      list.removeChild(li);
      pendingTasks();
    });

    li.appendChild(button);

    list.appendChild(li);
    input_text.value = "";
    pendingTasks();
  }
});

function pendingTasks() {
  const listCollections = list.getElementsByTagName("li");
  console.log(listCollections);
  pendingText.innerText = `You have ${listCollections.length} pending tasks`;
}

clear_text.addEventListener("click", function () {
  list.innerHTML = "";
  pendingTasks();
});

pendingTasks();
