var n = document.getElementsByClassName("images").length
size = document.getElementsByTagName('body')[0].clientWidth
var clone1 = document.getElementsByClassName('images')[0].cloneNode()
var clone2 = document.getElementsByClassName('images')[n - 1].cloneNode()

clone1.classList.add('clone')
clone2.classList.add('clone')
document.getElementById('line').appendChild(clone1)
document.getElementById('line').appendChild(clone2)


var leftButton = document.getElementById("right");

var left = 0;
leftButton.onclick = function leftSwipe() {
	var line = document.getElementById("line");
	line.style.transition = "0.3s ease"
	left = left - size;
	if (left <= -((n + 1) * size)) {
		line.style.transition = "0s"
		left = 0;
		line.style.left = left + "px";
		setTimeout(function (){
			line.style.transition = "0.3s ease"; 
			left = -size
			line.style.left = left + "px";}, 10)
		return 1
	}
	line.style.left = left + "px";

}

var rightButton = document.getElementById("left");

rightButton.onclick = function rightSwipe() {
	var line = document.getElementById("line");
	line.style.transition = "0.3s ease"
	left = left + size;
	if (left > 0) {
		line.style.transition = "0s"
		left = -(n * size);
		line.style.left = left + "px";
		setTimeout(function (){
			line.style.transition = "0.3s ease"; 
			left = -((n - 1) * size)
			line.style.left = left + "px";}, 10)
		return 1
	}
	line.style.left = left + "px";
}

lis = document.getElementsByClassName('nav')[0]

lis.onclick = function (event){
    open = event.target.parentElement.classList[0]
    hide = document.getElementsByClassName('active')[0].classList[0]
    document.getElementsByClassName('active')[0].classList.remove('active')
    event.target.parentElement.classList.add('active')
    console.log(open, hide)
    if (hide == '1'){
        document.getElementsByClassName('home')[0].style.display = 'none'
    } else if (hide == '2') {
        document.getElementsByClassName('money')[0].style.display = 'none'
    } else {
        document.getElementsByClassName('grade' + (11 - hide + 1))[0].style.display = 'none'
    }

    if (open == '1'){
        document.getElementsByClassName('home')[0].style.display = 'flex'
    } else if (open == '2') {
        document.getElementsByClassName('money')[0].style.display = 'flex'
    } else {
        document.getElementsByClassName('grade' + (11 - open + 1))[0].style.display = 'flex'
    }
}

