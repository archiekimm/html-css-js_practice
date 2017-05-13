//객체선언
var target = document.getElementsByClassName("main"); //배열
var tabmenu = document.getElementsByClassName("tab_menu")[0];
var tabList = tabmenu.getElementsByTagName("li"); //배열
var tabPrev = tabmenu.getElementsByClassName("prev")[0];
var tabNext = tabmenu.getElementsByClassName("next")[0];
var	tabOn;
var tabOnNum;
var tabWidthValue = 0;

for (i = 0; i < tabList.length; i++) {
	tabWidthValue = tabWidthValue + Number(tabList[i].getElementsByTagName("a")[0].offsetWidth);
};
tabmenu.getElementsByTagName("ul")[0].style.width = tabWidthValue+"px";

function findTabOn() {
	tabOn = tabmenu.getElementsByClassName("on")[0];
	tabOnNum = Number(tabOn.className.replace(/[^0-9]/g,''));
};

function ulmargin() {
	findTabOn();
	if (tabOnNum <= 4) {
		tabmenu.getElementsByTagName("ul")[0].style.marginLeft = "0";
	} else if (tabOnNum === 5) {
		tabmenu.getElementsByTagName("ul")[0].style.marginLeft = "-52px";
	} else if (tabOnNum === 6) {
		tabmenu.getElementsByTagName("ul")[0].style.marginLeft = "-104px";
	} else if (tabOnNum >= 7) {
		tabmenu.getElementsByTagName("ul")[0].style.marginLeft = "-156px";
	}
};

function prevTab() {
	findTabOn();
	if (tabOnNum === 1) {
		tabList[tabList.length-1].className = "tab" + tabList.length + " on";
		target[tabList.length-1].style.display = "block";
	} else {
		tabOn.previousElementSibling.className ="tab" + (tabOnNum-1) + " on";
		target[tabOnNum-2].style.display = "block";
	};
	tabOn.className ="tab" + tabOnNum;
	target[tabOnNum-1].style.display ="none";
};

function nextTab() {
	findTabOn();
	if (tabOnNum == tabList.length) {
		tabList[0].className = "tab1 on";
		target[0].style.display = "block";
	} else {
		tabOn.nextElementSibling.className ="tab" + (tabOnNum+1) + " on";
		target[tabOnNum].style.display = "block";
	};
	tabOn.className ="tab" + tabOnNum;
	target[tabOnNum-1].style.display ="none";
};

function selectTab(i) {
	return function() {
		findTabOn();
		tabOn.className = "tab" + tabOnNum;
		target[tabOnNum-1].style.display = "none";
		tabList[i].className = "tab" + (i+1) + " on";
		target[i].style.display = "block";
		ulmargin();
	};
};

//Event
ulmargin();
tabPrev.onclick = function() {prevTab(); ulmargin();};
tabNext.onclick = function() {nextTab(); ulmargin();};
for (var i = 0; i < tabList.length; i++) {tabList[i].onclick = selectTab(i);};
for (i = 0; i < tabList.length; i++) {
	var pagePrev = target[i].getElementsByClassName("prev")[0];
	var pageNext = target[i].getElementsByClassName("next")[0];
	pagePrev.onclick = function() {prevTab(); ulmargin();};
	pageNext.onclick = function() {nextTab(); ulmargin();};
};
