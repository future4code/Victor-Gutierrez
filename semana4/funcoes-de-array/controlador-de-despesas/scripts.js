let formButton = document.getElementById("formButton");
const passives = [];
const extratoSum = [];
let count = -1;

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
        <div>
        <h3>Despesa:</h3>
        <h2>${passives[count].description}</h2>
        <p><strong>${passives[count].type}<strong></p>
        <p>R$ ${passives[count].amount}</p>
        </div>`;
    document.getElementById("totalVal").innerText = `R$ ${extratoSum.reduce(
      (a, n) => a + n,
      0
    )}`;
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
      }
    });
    console.log(filter);
  }

  for (i = 0; i < wrapper.length; i++) {
    document.getElementById("details-output").innerHTML += `<div>
          <h3>Despesa:</h3>
          <h2>${wrapper[i].description}</h2>
          <p><strong>${wrapper[i].type}<strong>  </p>
          <p>R$ ${wrapper[i].amount}  </p>
          </div>`;
    document.getElementById("error-output").innerHTML = "";
  }
};
