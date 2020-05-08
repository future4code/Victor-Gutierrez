let formButton = document.getElementById("formButton");
const passives = [];
const extratoSum = [];
let count = -1;
const cleanInput = () => document.getElementsByTagName("input").value = ""

function newType() {
  let newTypeInput = document.getElementById("newTypeInput").value;
  if (newTypeInput != "") {
    document.getElementById("type").innerHTML += `<option label="${newTypeInput}"> ${newTypeInput} </option>`;
    document.getElementById("search-type").innerHTML += `<option label="${newTypeInput}"> ${newTypeInput} </option>`
    newTypeInput = null;
  } else {
    alert("Classe inválida, insira somente texto e não deixe vazio");
  }
}

formButton.addEventListener("click", () => {
  event.preventDefault();
  let amount = +document.getElementById("amount").value;
  let type = document.getElementById("type").value;
  let description = document.getElementById("description").value;


  if (amount === "" || description === "") {
    alert("Não deixe campos vazios");
  } else if (amount === NaN || amount < 0) {
    alert(
      "Insira um valor númerico válido no valor da despesa (positivo e inteiro)"
    );
  } else {
    count++;
    factory(amount, type, description);
  }
});

function factory(amount, type, description) {
  let passive = {};
  passive.amount = amount;
  passive.type = type;
  passive.description = description;

  passives.push(passive);
  extratoSum.push(passive.amount);
  cleanInput()
  render();

}

function render() {
  if (
    passives[count].description === undefined ||
    passives[count].type === undefined ||
    passives[count].amount === undefined
  ) {
    alert("Insira novos valores ou valores válidos");
    count--;
  } else {
    document.getElementById("extrato-output").innerHTML += `
        <div class="passiveItself">
        <a href="#" onclick="deletePassive()"> ❌ </a>
        <h3>Despesa:</h3>
        <h2 class="passiveDesc">${passives[count].description}</h2>
        <p><strong>${passives[count].type}<strong></p>
        <p>R$ ${passives[count].amount}</p>
        </div>`;

    document.getElementById("totalVal").innerText = `R$ ${extratoSum.reduce(
      (a, n) => a + n,
      0
    )}`;
  }
}

function deletePassive() {
  let sure = confirm("Quer mesmo apagar esta despesa?");
  if (sure === true) {
    event.target.parentElement.style = "display: none";
  }
}

let searchbtn = document.getElementById("search-btn");

const getFromFilter = () => {
  event.preventDefault();

  let valMax = document.getElementById("valMax").value;
  let valMin = document.getElementById("valMin").value;
  let findtype = document.getElementById("search-type").value;
  let wrapper = [];

  if (valMax == "" || valMin == "") {
    alert("Insira parametros para fazer a busca");
  } else {
    let filter = passives.filter((idx) => {
      if (
        valMax >= idx.amount &&
        valMin <= idx.amount &&
        idx.type == findtype
      ) {
        wrapper.push(idx);
        console.log(wrapper);
      } else {
        document.getElementById(
          "error-output"
        ).innerHTML = `<h3>Não existe despesa com estes parametros</h3>`;
        document.getElementById("details-output").innerHTML = "";
      }
    });
    console.log(filter);
  }

  for (i = 0; i < wrapper.length; i++) {
    document.getElementById("details-output").innerHTML += `<div class="passiveItself">
          <h3>Despesa:</h3>
          <h2 class="passiveDesc">${wrapper[i].description}</h2>
          <p><strong>${wrapper[i].type}<strong></p>
          <p>R$ ${wrapper[i].amount}</p>
          </div>`;
    document.getElementById("error-output").innerHTML = "";
  }
};