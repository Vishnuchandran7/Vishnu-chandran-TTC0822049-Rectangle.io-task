document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.querySelector(".task-input input");
  const addTaskButton = document.querySelector(".add-task-btn");
  const taskList = document.querySelector(".task-list");

  
  const addTask = () => {
    const taskText = taskInput.value.trim(); // Get input value and trim spaces

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    
    const task = document.createElement("div");
    task.classList.add("task", "personal"); // Default to "personal" category

    
    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    const taskTime = document.createElement("span");
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    taskTime.textContent = ${hours}:${minutes};

    
    task.addEventListener("click", () => {
      task.classList.toggle("completed");
    });

    
    task.appendChild(taskName);
    task.appendChild(taskTime);

    
    taskList.appendChild(task);

    // Clear the input field
    taskInput.value = "";
  };

  
  addTaskButton.addEventListener("click", addTask);

  
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
});