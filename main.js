document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("aytimku malumotni kiriting deb");
  } else {
    document.querySelector("#task").innerHTML += `
    <div class="tasklar">
      <span id="#taskname"> 
      ${document.querySelector("#newtask input").value}
      </span>
      <button class="delete">
      <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>
    `;
    var current_task = document.querySelectorAll(".delete");
    for (var i = 0; i < current_task.length; i++) {
      current_task[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    var task = document.querySelectorAll(".task");
    for (var i = 0; i < task.length; i++) {
      task[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
    document.querySelector("#newtask input").value = "";
  }
};
