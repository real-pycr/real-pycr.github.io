const light=document.getElementById("light");
const colorR=document.getElementById("colorR");
const colorG=document.getElementById("colorG");
const colorB=document.getElementById("colorB");
const numberR=document.getElementById("numberR");
const numberG=document.getElementById("numberG");
const numberB=document.getElementById("numberB");
const numberBrightness=document.getElementById("numberBrightness");
let brightness=document.getElementById("brightness");
let r=colorR.value,g=colorG.value,b=colorB.value;
let value=brightness.value;

document.getElementById("switch-input").addEventListener("click",Switch);
document.getElementById("colorR").addEventListener("click",changeColor);
document.getElementById("colorG").addEventListener("click",changeColor);
document.getElementById("colorB").addEventListener("click",changeColor);
document.getElementById("brightness").addEventListener("click",changeBrightness);
document.getElementById("colorR").addEventListener("touch",changeColor);
document.getElementById("colorG").addEventListener("touch",changeColor);
document.getElementById("colorB").addEventListener("touch",changeColor);
document.getElementById("brightness").addEventListener("touch",changeBrightness);
document.getElementById("colorR").addEventListener("keydown",changeColor);
document.getElementById("colorG").addEventListener("keydown",changeColor);
document.getElementById("colorB").addEventListener("keydown",changeColor);
document.getElementById("brightness").addEventListener("keydown",changeBrightness);

let on=0;
/*let shadow=[
	"0px 0px 150px 100px rgb(255, 255, 225)",
	"0px 0px 150px 100px rgb(0, 250, 154)",
	"0px 0px 150px 100px rgb(0, 255, 255)",
	"0px 0px 150px 100px rgb(139, 0, 139)",
	"0px 0px 150px 100px rgb(46, 139, 87)",
	"0px 0px 150px 100px rgb(255, 255, 0)",
	"0px 0px 150px 100px rgb(106, 90, 205)",
	"0px 0px 150px 100px rgb(0, 128, 128)"
]
let color=[
	"rgb(255, 255, 225)",
	"rgb(0, 250, 154)",
	"rgb(0, 255, 255)",
	"rgb(139, 0, 139)",
	"rgb(46, 139, 87)",
	"rgb(255, 255, 0)",
	"rgb(106, 90, 205)",
	"rgb(0, 128, 128)"
]*/

function Switch() {
	if(on) {
		light.style.boxShadow="none";
		light.style.backgroundColor="transparent";
		on=0;	
	}
	else {
		/*light.style.boxShadow=shadow[now];
		light.style.backgroundColor=color[now];*/
		light.style.boxShadow=`0px 0px 300px 100px rgb(${r}, ${g}, ${b})`;
		light.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
		light.style.filter=`brightness(${value}%)`;
		on=1;
	}
	console.log(r);console.log(g);console.log(b);
	console.log(`brightness(${value}%)`);
}

function changeColor() {
	r=colorR.value,g=colorG.value,b=colorB.value;
	if(on) {
		/*now=(now+1)%8;
		light.style.boxShadow=shadow[now];
		light.style.backgroundColor=color[now];*/
		light.style.boxShadow=`0px 0px 300px 100px rgb(${r}, ${g}, ${b}`;
		light.style.backgroundColor=`rgb(${r}, ${g}, ${b}`;
	}
	numberR.innerHTML=r,numberG.innerHTML=g,numberB.innerHTML=b;			/* JavaScript 中可以用逗号分隔语句嘛？*/		/*可以*/
	console.log(r);console.log(g);console.log(b);
	console.log(`brightness(${value}%)`);
}

function changeBrightness() {
	value=brightness.value;
	if(on) light.style.filter=`brightness(${value}%)`;
	numberBrightness.innerHTML=value+'%';
	console.log(`brightness(${value}%)`);
	console.log(on);
}

const switchElement=document.querySelector('.switch');
const switchInnerElement=document.querySelector('.switch-inner');

switchElement.addEventListener("click", fun);
function fun() {
	const checked=switchElement.querySelector('input[type="checkbox"]');
	checked.checked=!checked.checked;
};