let parent= document.querySelector(".modal-parent");
let button= document.querySelector(".button");
let x= document.querySelector(".x");
let section= document.querySelector("section");

button.addEventListener("click",appear);

function appear(){
	parent.style.display="block";
	section.style.filter="blur(10px)"
}

x.addEventListener("click",disappear);

function disappear(){
	parent.style.display="none";
	section.style.filter="blur(0px)"
}

parent.addEventListener("click",disappearParent);

function disappearParent(e){
	if(e.target.className=="modal-parent"){
		parent.style.display="none";
		section.style.filter="blur(0px)"
	}
}