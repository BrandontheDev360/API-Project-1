const baseURL = "https://cat-fact.herokuapp.com/facts/random"
const button= document.querySelector('.container button')
const catFact = document.querySelector('.container p')

button.addEventListener('click', getCatFact);
function getCatFact() {
    fetch(`${baseURL}`)
    .then (response => response.json())
    .then (data => {
    console.log(data)    
    let fact = data.text
    console.log(fact)
    catFact.innerText = fact
})
    .catch(err => console.log(err))
}
