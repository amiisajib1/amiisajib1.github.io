
function sliderRun(){
	
	if(document.getElementsByClassName("sliderItmes")[0].classList.contains("active")){
	
	document.getElementsByClassName("sliderItmes")[1].classList.add("active");
	document.getElementsByClassName("sliderItmes")[0].classList.remove("active");
	
	
}else if(document.getElementsByClassName("sliderItmes")[1].classList.contains("active")){
	
	document.getElementsByClassName("sliderItmes")[2].classList.add("active");
	document.getElementsByClassName("sliderItmes")[1].classList.remove("active");
	
	
	
	
}else if(document.getElementsByClassName("sliderItmes")[2].classList.contains("active")){
	
	document.getElementsByClassName("sliderItmes")[3].classList.add("active");
	document.getElementsByClassName("sliderItmes")[2].classList.remove("active");
	
	
	
	
}else if(document.getElementsByClassName("sliderItmes")[3].classList.contains("active")){
	
	document.getElementsByClassName("sliderItmes")[0].classList.add("active");
	document.getElementsByClassName("sliderItmes")[3].classList.remove("active");
	
	
	
}
	
	
}


setInterval(sliderRun,2500);
	
	
	


