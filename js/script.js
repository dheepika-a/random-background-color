var text =document.createElement("p")
text.innerText="RANDOM COLOUR CHANGER";
document.body.appendChild(text);
text.style.textAlign = "center";
text.style.color= "red";
text.style.marginTop= "60px";
text.style.fontSize= "35px";
document.write("<br/>", "<br/>");

document.body.style.textAlign="center";


button1=document.createElement("button");
button1.setAttribute("onclick","random()");
button1.style.backgroundColor="lightblue";
button1.innerText="CLICK";
document.body.appendChild(button1);


function random()
{
	var randomColor = Math.floor(Math.random()*256);
	document.body.style.backgroundColor = '#' + randomColor;
}