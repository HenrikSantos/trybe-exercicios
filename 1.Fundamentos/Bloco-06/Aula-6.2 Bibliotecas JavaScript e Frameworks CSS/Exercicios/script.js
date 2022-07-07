//faz com que não abra uma nova página ao clicar em enviar.
const btnEnviar = document.getElementById("enviar");
const inputs = document.getElementsByTagName("input");
const textArea = document.getElementsByTagName("textarea");

function handleSubmit(event) {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  event.preventDefault();
  alert(verify());
}

function verify() {
  const acceptShereImage = document.getElementById("shareImage");
  if (acceptShereImage.checked != true) {
    return "Necessário autorizar o uso de imagens!";
  }
  let count = 0;
  for (let index = 0; index < inputs.length; index += 1) {
    const element = inputs[index];

    if (element.value.length === 0) {
      count += 1;
    }
  }
  if (count > 5) {
    return `Não pode ser vázio`;
  }

  if (textArea[0].value.length === 0) {
    return "Não pode ser vázio";
  }

  if (
    nome.value.length < 10 ||
    nome.value.length > 40 ||
    email.value.length < 10 ||
    email.value.length > 50 ||
    textArea[0].value.length > 500
  ) {
    return "Dados Inválidos";
  } else {
    return "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.";
  }
}
btnEnviar.addEventListener("click", handleSubmit);

const btnApagar = document.getElementById("apagar");
btnApagar.addEventListener("click", clearInputs);

//Limpa os inputs
function clearInputs(event) {
  event.preventDefault();
  for (let index = 0; index < inputs.length; index += 1) {
    const element = inputs[index];
    element.value = "";
    element.checked = false;
  }
  textArea[0].value = "";
}
