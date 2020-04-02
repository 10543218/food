

// #FFEFD5 代表被選取
let showSingle = () => {
	document.getElementById("singleLine").style.display = "flex"; // 出現
	document.getElementById("doubleLine").style.display = "none";
	document.getElementById("cartLine").style.display = "none";
	document.getElementById("singleOrder").style.backgroundColor = "#FFEFD5"; //被選取
	document.getElementById("doubleOrder").style.backgroundColor = "#CD853F";
	document.getElementById("shoppingCart").style.backgroundColor = "#CD853F";
}

let showDouble = () => {
	document.getElementById("singleLine").style.display = "none";
	document.getElementById("doubleLine").style.display = "flex"; // 出現
	document.getElementById("cartLine").style.display = "none";
	document.getElementById("singleOrder").style.backgroundColor = "#CD853F";
	document.getElementById("doubleOrder").style.backgroundColor = "#FFEFD5"; //被選取
	document.getElementById("shoppingCart").style.backgroundColor = "#CD853F";
}

let showCart = () => {
	document.getElementById("singleLine").style.display = "none";
	document.getElementById("doubleLine").style.display = "none";
	document.getElementById("cartLine").style.display = "flex"; // 出現
	document.getElementById("singleOrder").style.backgroundColor = "#CD853F";
	document.getElementById("doubleOrder").style.backgroundColor = "#CD853F";
	document.getElementById("shoppingCart").style.backgroundColor = "#FFEFD5"; //被選取
}






