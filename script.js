document.getElementById("number-input").addEventListener("input", (e) => {
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  e.target.value = value;
});

document.getElementById("date-input").addEventListener("input", (e) => {
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{4})$/, "$1/$2");
  value = value.replace(/(?=(\d{2})+(\D))\B/g, "/");
  e.target.value = value;
});

document.getElementById("card-input").addEventListener("input", (e) => {
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(?=(\d{4})+$)\B/g, " ");
  e.target.value = value;
});

document.getElementById("cep-input").addEventListener("input", (e) => {
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  e.target.value = value;
});

document.getElementById("cpf-input").addEventListener("input", (e) => {
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1-$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  e.target.value = value;
});

document.getElementById("currency-input").addEventListener("input", (e) => {
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  e.target.value = value;
});
