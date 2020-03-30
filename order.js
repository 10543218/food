let SectOneIsOpen = false;
let SectTwoIsOpen = false;
let SectThreeIsOpen = false;
let SectFourIsOpen = false;
let SectFiveIsOpen = false;

let showSectOneProd = () => {
	let foodSectOneProd = document.getElementById("foodSectOneProd");
	foodSectOneProd.style.display = !SectOneIsOpen ? "flex": "none";
	SectOneIsOpen = !SectOneIsOpen;	
}

let showSectTwoProd = () => {
	let foodSectTwoProd = document.getElementById("foodSectTwoProd");
	foodSectTwoProd.style.display = !SectTwoIsOpen ? "flex": "none";
	SectTwoIsOpen = !SectTwoIsOpen;	
}

let showSectThreeProd = () => {
	let foodSectThreeProd = document.getElementById("foodSectThreeProd");
	foodSectThreeProd.style.display = !SectThreeIsOpen ? "flex": "none";
	SectThreeIsOpen = !SectThreeIsOpen;	
}

let showSectFourProd = () => {
	let foodSectFourProd = document.getElementById("foodSectFourProd");
	foodSectFourProd.style.display = !SectFourIsOpen ? "flex": "none";
	SectFourIsOpen = !SectFourIsOpen;	
}

let showSectFiveProd = () => {
	let foodSectFiveProd = document.getElementById("foodSectFiveProd");
	let soup = document.getElementById("soup");
	foodSectFiveProd.style.display = !SectFiveIsOpen ? "flex": "none";
	soup.style.borderBottomLeftRadius = !SectFiveIsOpen ? "0px": "24px";
	soup.style.borderBottomRightRadius = !SectFiveIsOpen ? "0px": "24px";
	SectFiveIsOpen = !SectFiveIsOpen;	
}
