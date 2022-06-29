const titleEmergency = document.querySelectorAll(".title-emergency");
const emergencyTasks = document.getElementsByClassName("emergency-tasks");
const titleNoEmergency = document.querySelectorAll(".title-no-emergency");
const noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks");
const header = document.getElementById("header-container");
const footer = document.getElementById("footer-container");

function changeHeader(header) {
  header.style.backgroundColor = "rgb(0, 107, 82)";
}

function changeEmergencyTasks(emergencyTasks) {
  emergencyTasks[0].style.backgroundColor = "rgb(255, 159, 132)";
}

function changeTitleEmergency(titleEmergency) {
  for (let index = 0; index < titleEmergency.length; index += 1) {
    titleEmergency[index].style.backgroundColor = "rgb(166, 18, 243)";
  }
}

function changeNoEmergencyTasks(noEmergencyTasks) {
  noEmergencyTasks[0].style.backgroundColor = "rgb(250, 218, 94)";
}

function changeNoEmergency(titleNoEmergency) {
  for (let index = 0; index < titleNoEmergency.length; index += 1) {
    titleNoEmergency[index].style.backgroundColor = "rgb(35, 37, 37)";
  }
}
function changeFooter(footer) {
  footer.style.backgroundColor = "rgb(0, 53, 51)";
}

changeHeader(header);
changeNoEmergencyTasks(noEmergencyTasks);
changeNoEmergency(titleNoEmergency);
changeEmergencyTasks(emergencyTasks);
changeTitleEmergency(titleEmergency);
changeFooter(footer);
