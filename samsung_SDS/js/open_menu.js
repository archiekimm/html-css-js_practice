var getList = document.getElementsByClassName("gnb")[0].children;
var getSub = document.getElementsByClassName("sub");

for (var i = 0; i < getList.length; i++) {
  getList[i].onmouseover = function() {
    for (var j = 0; j < getSub.length; j++) {
      getSub[j].style.display = "none";
    }
    this.getElementsByClassName("sub")[0].style.display = "block";
  }
}

var OpenBtn = document.getElementsByClassName("familysites")[0].getElementsByTagName("a")[0];
var CloseBtn = document.getElementsByClassName("familysites")[0].getElementsByClassName("close")[0];

OpenBtn.onclick = function () {
  document.getElementsByClassName("familysites")[0].getElementsByClassName("list")[0].style.display = "block";
  return false;
}

CloseBtn.onclick = function () {
  document.getElementsByClassName("familysites")[0].getElementsByClassName("list")[0].style.display = "none";
  return false;
}
