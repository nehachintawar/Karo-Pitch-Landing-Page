const startups = [

{
name:"EcoKart",
category:"D2C",
desc:"Eco friendly sustainable products marketplace."
},

{
name:"HealthAI",
category:"SaaS",
desc:"AI powered healthcare analytics platform."
},

{
name:"RuralMart",
category:"Bharat Startup",
desc:"Connecting rural manufacturers to online markets."
}

]

const container = document.getElementById("startupContainer")

startups.forEach(startup => {

const card = document.createElement("div")

card.classList.add("startup-card")

card.innerHTML = `
<h3>${startup.name}</h3>
<p><strong>${startup.category}</strong></p>
<p>${startup.desc}</p>
`

container.appendChild(card)

})


// Mobile menu

const menuBtn = document.getElementById("menuBtn")
const navLinks = document.getElementById("navLinks")

menuBtn.addEventListener("click", () => {

if(navLinks.style.display === "flex"){
navLinks.style.display = "none"
}else{
navLinks.style.display = "flex"
}

})