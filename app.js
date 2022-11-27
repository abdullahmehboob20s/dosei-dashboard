const sidebar = document.getElementById("sidebar");
const hamburgerButton = document.getElementById("hamburger-btn");
const blackScreenBox = document.querySelector(".black-screen");
const taskSidebarRevealerButton = document.getElementById("task-revealer");
const taskSidebar = document.getElementById("task-sidebar");

hamburgerButton?.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-drawer");
  blackScreenBox.classList.toggle("show");
});

blackScreenBox?.addEventListener("click", () => {
  sidebar.classList.add("sidebar-drawer");
  blackScreenBox.classList.toggle("show");
  taskSidebar.classList.add("task-sidebar-revealer");
});

taskSidebarRevealerButton?.addEventListener("click", () => {
  taskSidebar.classList.toggle("task-sidebar-revealer");
  blackScreenBox.classList.toggle("show");
});
