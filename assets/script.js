const generate = document.getElementById("submitButton");
const demo=document.getElementById('demo')
//event listener
generate.addEventListener('submit', handleSubmit)
 
//handleevent 
function handleSubmit(e) {
    e.preventDefault()
    let card = {
        fName: e.target.fName.value,
        lName: e.target.lName.value,
        phoneNumber: e.target.phoneNumber.value,
        email: e.target.email.value,
        image: e.target.image.value
    }
    getCard(card)
    renderCard(card)
    
}
//fetch the data
function getCard() {
    fetch("http://localhost:3000/card")
        .then(res => res.json())
    .then(cards=>cards.forEach(card => {
       renderCard(card) 
    }))
}
function renderCard(card) {
    let cards = document.createElement('div')
    cards.id = "cards"
    let myCard = document.createElement('div')
    myCard.id = "card"
    let part1 = document.createElement("div")
    part1.id = "part1"
    let part2 = document.createElement("div");
    part2.id = "part2";
    let cardImage = document.createElement('img')
    cardImage.src = `${card.image}`
    cardImage.id = "image"
    let cardName = document.createElement('p')
    cardName.textContent = `${card.fname} ${card.lName}`
    let contact = document.createElement('h3')
    contact.textContent = "Contact Information"
    let phone = document.createElement('p')
    let mobile = document.createElement('i')
    mobile.className = "fa-solid fa-mobile-screen"
    mobile.textContent=`${card.phoneNumber}`
    phone.appendChild(mobile)
    let Email = document.createElement('p')
    let envelope = document.createElement('i')
    envelope.className = "fa-solid fa-envelope";
    Email.appendChild(envelope)
     
    part1.appendChild(cardImage)
    part1.appendChild(cardName)
    myCard.appendChild(part1)
    part2.appendChild(contact)
    part2.appendChild(phone)
    part2.appendChild(Email)
    myCard.appendChild(part2)
    cards.appendChild(myCard)
    
}
 function iniatialize() {
     getCard()
 }
 iniatialize()