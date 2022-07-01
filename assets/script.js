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
    fetch("http://localhost:3000/cards")
        .then(res => res.json())
    .then(cards=>cards.forEach(card => {
       renderCard(card) 
    }))
}
function renderCard(card) {
    
}
 function iniatialize() {
     getCard()
 }
 iniatialize()