document.getElementById("logo").addEventListener("click",function(){

if(this.classList.contains("first")){
this.classList.remove("first");
this.src = "assets/images/icon-menu-close.svg";
this.classList.add("second");
}else{
  this.classList.remove("second");
  this.src = "assets/images/icon-menu.svg";
  this.classList.add("first");
}


});
