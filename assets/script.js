const cardForm = document.getElementById("businessCardForm");
const generate = document.getElementById("submitButton");
const cards=document.getElementById('cards')
//event listener
cardForm.addEventListener('submit', handleSubmit)
 
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
     renderCard(card);
    postCard(card)
   
    
}
//render the data

function renderCard(card) {
    
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
    cardName.textContent = `${card.fName} ${card.lName}`
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
    envelope.textContent=`${card.email}`
    Email.appendChild(envelope)
    let print = document.createElement('button')
    print.textContent = "Print"
    print.addEventListener('click', printCard)
    function printCard() {
        let cardContents = document.getElementById('card').innerHTML
        let a = window.open('', '', 'height=300, width= 450')
        a.document.write(cardContents)
        a.document.close()
        a.print()

    }
    part1.appendChild(cardImage)
    part1.appendChild(cardName)
    myCard.appendChild(part1)
    part2.appendChild(contact)
    part2.appendChild(phone)
    part2.appendChild(Email)
    myCard.appendChild(part2)
    cards.appendChild(myCard)
    cards.appendChild(print)
    
}
//fetch the data
function getCard() {
  fetch("http://localhost:3000/card")
    .then((res) => res.json())
    .then((cards) =>
      cards.forEach((card) => {
        renderCard(card);
      })
    );
}
function postCard(card) {
    fetch("http://localhost:3000/card", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(card)
    })
        .then(res => res.json())
        .then(card => {
        console.log(card)
    })
    
    
}
 function iniatialize() {
     getCard()
 }
 iniatialize()