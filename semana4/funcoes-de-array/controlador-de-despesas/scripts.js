let formButton = document.getElementById("formButton");
const passives = []
const extratoSum = []
let count = -1


let lucky = passives.filter(function (index) {
    return index.amount > valMin;
});


formButton.addEventListener("click", () => {
    event.preventDefault()
    let amount = document.getElementById("amount").value;
    let type = document.getElementById("type").value;
    let description = document.getElementById("description").value;

    if (amount === "" || description === "") {
        alert("Não deixe campos vazios")
    } else if (amount === NaN || amount < 0) {
        alert("Insira um valor númerico válido no valor da despesa (positivo e inteiro)")
    } else {
        count++
        factory(amount, type, description);


    }
})

function factory(amount, type, description) {
    let passive = {};
    passive.amount = amount;
    passive.type = type;
    passive.description = description;

    passives.push(passive)
    extratoSum.push(passive.amount)
    render()
}

function render() {
    if (passives[count].description === undefined || passives[count].type === undefined || passives[count].amount === undefined) {
        alert("Insira novos valores ou valores válidos")
        count--
    } else {
        
        document.getElementById("extrato-output").innerHTML += `<h3>Despesa:</h3>
        <p>${passives[count].description}</p>
        <p>${passives[count].type}  </p>
        <p>R$ ${passives[count].amount}  </p>
        </div>`
        document.getElementById("totalVal").innerText = `R$ ${extratoSum.reduce((a, n) => (a + Number(n)), 0)}`
        
            }
}



let valMax = document.getElementById("search-valMax").value
let valMin = document.getElementById("search-valMin").value
let searchType = document.getElementById("search-type").value
let searchbtn = document.getElementById("search-btn")






