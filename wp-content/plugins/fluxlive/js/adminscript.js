// JavaScript Document

FluxAdmin = { 
CloseEditor : function(){
if(document.getElementById("PNE-editor")) {document.getElementById("PNE-editor").style.display="none"};if (document.getElementById("wp-content-editor-container")) {

var fluxhtml=document.createElement("div");fluxhtml.id="fluxeditcover";fluxhtml.style.maxWidth="100%";fluxhtml.style.textAlign="center";fluxhtml.innerHTML="<img src='"+window.fluxdirpath+"assets/frontend3.jpg'><br><h3>Simply Symphony.</h3><br><br><br>This page should only be edited in the Simply Sympony editor.<br><a href='"+window.fluxloadpage+"'>Load Simply Symphony Page</a> &nbsp; or &nbsp; <a onclick='FluxAdmin.ShowEditor()'>Show WordPress HTML</a> ";var fluxparenteditor=document.getElementById("wp-content-editor-container");fluxparenteditor.appendChild(fluxhtml);document.getElementById("ed_toolbar").style.display="none";document.getElementById("content").style.display="none"} 
},

ShowEditor : function (){
document.getElementById("ed_toolbar").style.display="";document.getElementById("content").style.display="";
var fluxparent = document.getElementById("fluxeditcover").parentNode;
fluxparent.removeChild(document.getElementById("fluxeditcover"))
}


}

window.addEventListener("load", FluxAdmin.CloseEditor, false);
