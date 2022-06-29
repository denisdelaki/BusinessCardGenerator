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
function getCard(cards) {
    
}
 function iniatialize() {
     getCard()
 }
 iniatialize()