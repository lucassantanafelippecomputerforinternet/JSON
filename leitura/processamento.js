let object = JSON.parse('{"Nome":"Golf","AnoFabricacao":2008}');

console.log(object);

document.getElementById("paragrafo").innerHTML = "Nome: " + object.Nome + "<br>AnoFabricacao: " + object.AnoFabricacao;