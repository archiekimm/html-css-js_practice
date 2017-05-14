var prevBtn = document.getElementsByClassName("arrow")[0].getElementsByTagName("a")[0];
var nextBtn = document.getElementsByClassName("arrow")[0].getElementsByTagName("a")[1];
var pannels = document.getElementsByClassName("pannel")[0].children;
var control = document.getElementsByClassName("control")[0].children;
var target;
var ctrlTarget;

function reset() {
  target = document.getElementsByClassName("pannel")[0].getElementsByClassName("on")[0];
  ctrlTarget = document.getElementsByClassName("control")[0].getElementsByClassName("active")[0];
  target.className = "";
  ctrlTarget.className = "";
  for(i = 0; i < pannels.length; i++) {
    pannels[i].setAttribute("style","display:none;");
    control[i].className = "blind";
  }
}

nextBtn.onclick = function() {
  reset();
  if (target.nextElementSibling === null) {
    pannels[0].className = "on";
    pannels[0].setAttribute("style","display:block;");
    control[0].className = "blind active";
  } else {
    target.nextElementSibling.className = "on";
    target.nextElementSibling.setAttribute("style","display:block;");
    ctrlTarget.nextElementSibling.className = "blind active";
  }
  return false;
}

prevBtn.onclick = function() {
  reset();
  if (target.previousElementSibling === null) {
    pannels[pannels.length-1].className = "on";
    pannels[pannels.length-1].setAttribute("style","display:block;");
    control[pannels.length-1].className = "blind active";
  } else {
    target.previousElementSibling.className = "on";
    target.previousElementSibling.setAttribute("style","display:block;");
    ctrlTarget.previousElementSibling.className = "blind active";
  }
  return false;
}

for (var j = 0; j < control.length; j++) {
  control[j].onclick = (function(j) {
    return function() {
      reset();
      control[j].className = "blind active";
      pannels[j].className = "on";
      pannels[j].setAttribute("style","display:block;");
    }
  })(j);
}
