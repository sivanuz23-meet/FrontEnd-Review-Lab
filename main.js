function changeBackgroundColor(){
	var bg = document.getElementsByTagName("body");
	if (bg[0].style.backgroundColor == "green"){
		bg[0].style.background = "lightblue";
	}
	else{
		bg[0].style.background = "green";
	}
}