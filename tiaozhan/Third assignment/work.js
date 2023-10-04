let show = document.getElementById("backToTop");
let photos1 = document.querySelectorAll(".photos-1 > div");
let search_div = document.getElementsByClassName("search-bg")[0];
let search_input = document.getElementById("search-input");
let typewriter = document.getElementById("typewriter");
let slogan = document.querySelector(".search-bg p");
let photos2 = document.querySelectorAll(".photos-2 > img");

let bgImgs = ["./work_files/1.1.png", "./work_files/1.2.png", "./work_files/1.3.png"];
let text = ["Now I am become Death,the destroyer of worlds.",
	"I don't know if we can be trusted with such a weapon.But I have no choice.",
	"The world is changing.Reforming.This is your moment.",
	"They won't fear it until they understand it.And they won't understand it until they've used it.Theory will take you only so far.",
	"The man who moved the Earth.",
	"Is anyone ever going to tell the truth about what's happening here?",
	"Prometheus stole fire from the gods and gave it to man. For this, he was chained to a rock and tortured for eternity."];

window.addEventListener("scroll", goBack);
document.addEventListener("click", focus)
show.addEventListener("click", backToTop);
search_input.addEventListener("keydown", search);
document.getElementById("search-icon").addEventListener("click", search);
window.addEventListener("scroll", sticky);
window.addEventListener("scroll", swing);

function goBack() {
	if(window.scrollY > 100) 
		show.style.opacity = 1;
	else show.style.opacity = 0;
}

function backToTop() {
	window.scrollTo({top: 0, behavior: "smooth"});
}

function changeBgImags() {
	for(let i = 0; i < 3; i++) {
		photos1[i].style.backgroundImage = `url("${bgImgs[Math.floor(Math.random()*3)]}")`;
		//console.log(photos1[i].style.backgroundImage);
	}
}
setInterval(changeBgImags, 7000);

function focus() {
	let now = document.activeElement;
	/*if(now===search_input)*/
	if(now.nodeName === "INPUT" && now.getAttribute("type") === "search")	{		/*一般情况都是用 === 而不是 == ？*/
		search_div.style.filter = "blur(5px)";
		search_input.style.border = "solid 3px #00FFFF";
	}
	else {
		search_div.style.filter = "blur(0px)";
		search_input.style.border = "solid 3px white";
	}
}

function search() {
	console.log(event);
	if(event.key === "Enter" || event.type === "click") {
		let value = search_input.value;
		/*window.location.href = `https://www.baidu.com/s?wd=${value}`;*/
		if(value !== "") window.open(`https://www.baidu.com/s?wd=${value}`);
		/*console.log(value);*/
	}
}

let now=0;
let forward=false;

function typewrite() {
	if(forward) now = (now + 1) % text.length;
	if(forward) {
		for(let i = 1; i <= text[now].length; i++) {
			setTimeout(function() {
				typewriter.innerHTML = text[now].slice(0, i);
				/*console.log(i);*/
			}, (i - 1) * 30);
		}
		forward = false;
		setTimeout(typewrite, text[now].length * 30 + 2000);
	}
	else {
		for(let i = text[now].length; i >= 0; i--) {
			setTimeout(function() {
				typewriter.innerHTML = text[now].slice(0, i);
				/*console.log(i);*/
			}, (text[now].length - i) * 30);
		}
		forward = true;
		setTimeout(typewrite, text[now].length * 30 + 500);
	}
}
setTimeout(typewrite, 2000);

function sticky() {
	if(window.scrollY > 750 && window.scrollY < 1100) {
		slogan.innerHTML = "JUST GO ON";
		slogan.style.fontSize = `${200 + 2 * (window.scrollY  - 750)}px`;
	}
	if(window.scrollY >= 1100 && window.scrollY <= 1450) {
		slogan.innerHTML = "iTensor";
		slogan.style.fontSize = `${200 + 2 * (1450 - window.scrollY)}px`
	}
}

let index = 3;

let funcArray = [  
    function() {photos2[0].style.zIndex = index; index++;},
    function() {photos2[1].style.zIndex = index; index++;},
    function() {photos2[2].style.zIndex = index; index++;},
    function() {photos2[3].style.zIndex = index; index++;},
    function() {photos2[4].style.zIndex = index; index++;},
];					/* JavaScript 能不能实现添加监听的时候传个参数啥的啊？*/

for(let i = 0; i < 5; i ++) photos2[i].addEventListener("click", funcArray[i]);

function swing() {
	for(let i = 0; i < 5; i ++) {
		/*photos2[i].classList.add("swing");*/
		if(i == 1 || i == 4) continue;
		photos2[i].style.transform = `translate(${Math.random()*10 - 5}px, 0px)`;
	}
	photos2[1].style.transform = `perspective(2000px) rotateY(-30deg) rotateX(-1deg) translate(${Math.random()*10 - 5}px, 0px)`;
	photos2[4].style.transform = `rotateY(-30deg) rotateX(-10deg) translate(${Math.random()*10 - 5}px, 0px)`;
}
					/*怎么才能不改变原来的属性同时又能允许 hover 去修改？*/