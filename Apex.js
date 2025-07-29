// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields!");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format!");
        return;
    }

    alert("Message sent successfully!");
    this.reset();
});

// Dynamic To-Do List
document.getElementById('addTaskBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (!taskText) {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = "";
});
