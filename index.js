const body = document.querySelector("body")
const groceryList = document.createElement("div")
const groceryHeader = document.createElement("h1")
groceryHeader.setAttribute("id", "pantryHeader")
groceryHeader.textContent = "Pantry Items!"
const pantry = document.createElement("div")
pantry.setAttribute("id", "pantry")
pantry.classList.add("parent")

const imgOne = document.createElement("img")
imgOne.setAttribute("src", "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
imgOne.setAttribute("alt", "picture of bread brah")
imgOne.style.width = "200px"
pantry.append(imgOne)



const childOne = document.createElement("div")
childOne.classList.add("child")
const childOneHeader = document.createElement("h5")
childOneHeader.textContent = "Canned Goods"
const childOneUl = document.createElement("ul")
const aLiOne = document.createElement("ul")
aLiOne.textContent = "Beans"
const aLiTwo = document.createElement("ul")
aLiTwo.textContent = "Pasta"
const aLiThree = document.createElement("ul")
aLiThree.textContent = "Tuna"
childOneUl.append(aLiOne, aLiTwo, aLiThree)
childOne.append(childOneHeader, childOneUl)
pantry.append(imgOne, childOne)




const childTwo = document.createElement("div")
childTwo.classList.add("child")
const childTwoHeader = document.createElement("h5")
childTwoHeader.textContent = "Seasoning"
const childTwoUl = document.createElement("ul")
const bLiOne = document.createElement("ul")
bLiOne.textContent = "Salt"
const bLiTwo = document.createElement("ul")
bLiTwo.textContent = "Pepper"
const bLiThree = document.createElement("ul")
bLiThree.textContent = "Garlic"
childTwoUl.append(bLiOne, bLiTwo, bLiThree)
childTwo.append(childTwoHeader, childTwoUl)
pantry.append(childTwo)


const childThree = document.createElement("div")
childThree.classList.add("child")
const childThreeHeader = document.createElement("h5")
childThreeHeader.textContent = "Grains"
const childThreeUl = document.createElement("ul")
const cLiOne = document.createElement("ul")
cLiOne.textContent = "Pasta"
const cLiTwo = document.createElement("ul")
cLiTwo.textContent = "Bread"
const cLiThree = document.createElement("ul")
cLiThree.textContent = "Rice"
childThreeUl.append(cLiOne, cLiTwo, cLiThree)
childThree.append(childThreeHeader, childThreeUl)
pantry.append(childThree)



// Creating the fridge list similar to the pantry list
const fridgeList = document.createElement("div");
const fridgeHeader = document.createElement("h1");
fridgeHeader.setAttribute("id", "fridgeHeader");
fridgeHeader.textContent = "Fridge Items!";
const fridge = document.createElement("div");
fridge.setAttribute("id", "fridge");
fridge.classList.add("parent");

const imgTwo = document.createElement("img")
imgTwo.setAttribute("src", "https://images.unsplash.com/photo-1536353284924-9220c464e262?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
imgTwo.setAttribute("alt", "picture of bread brah")
imgTwo.style.width = "200px"
fridge.append(imgTwo)


// Example item: Dairy
const dairy = document.createElement("div");
dairy.classList.add("child");
const dairyHeader = document.createElement("h5");
dairyHeader.textContent = "Dairy";
const dairyUl = document.createElement("ul");
const dairyLiOne = document.createElement("li"); // Corrected from 'ul' to 'li' for list items
dairyLiOne.textContent = "Milk";
const dairyLiTwo = document.createElement("li");
dairyLiTwo.textContent = "Cheese";
const dairyLiThree = document.createElement("li");
dairyLiThree.textContent = "Butter";
dairyUl.append(dairyLiOne, dairyLiTwo, dairyLiThree);
dairy.append(dairyHeader, dairyUl);
fridge.append(dairy);

// Adding more sections as needed, such as Vegetables, Fruits, etc., following the pattern above.

// Append the fridge list to the main body, similar to how the pantry list was appended

body.append(groceryList)
groceryList.append(groceryHeader, pantry)


body.append(fridgeList);
fridgeList.append(fridgeHeader, fridge);


body.style.textAlign="center"

 

pantryHeader.style.backgroundColor = "#a57361"
pantry.style.backgroundColor = "#c57361"
fridgeHeader.style.backgroundColor = "#d57361"
fridge.style.backgroundColor = "#e57361"

