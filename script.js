function insert(num) {
  var numero = document.getElementById("calculation").innerHTML

  //responsável por fazer eu colocar mais de um número na tela.
  document.getElementById("calculation").innerHTML = numero + num
}
function clean() {
  document.getElementById("calculation").innerHTML = ""
}

//responsável por apagar um número por vez.
function back() {
  var result = document.getElementById("calculation").innerHTML
  document.getElementById("calculation").innerHTML = result.substring(
    0,
    result.length - 1
  )
}

//respomsável pelo resultado.
function calculate() {
  var result = document.getElementById("calculation").innerHTML

  if (result) {
    document.getElementById("calculation").innerHTML = eval(result) //faz o cálculo
  } else {
    document.getElementById("calculation").innerHTML = "Sem número"
  }
}
