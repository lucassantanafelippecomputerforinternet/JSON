let stringJson = '{"carros":['+
                '{"Nome":"Golf","AnoFabricacao":2008},'+
                '{"Nome":"Classic","AnoFabricacao":2011},'+
                '{"Nome":"Ferrari","AnoFabricacao":2018},'+
                '{"Nome":"Jetta","AnoFabricacao":2020},'+
                '{"Nome":"Civic","AnoFabricacao":2022}'+
                ']}';

let object = JSON.parse(stringJson);

console.log(object);

let texto = "Nome: " + object.carros[0].Nome
        +"<br>Ano fabricação: " + object.carros[0].AnoFabricacao
        +"<br>Nome: " + object.carros[1].Nome
        +"<br>Ano fabricação: " + object.carros[1].AnoFabricacao
        +"<br>Nome: " + object.carros[2].Nome
        +"<br>Ano fabricação: " + object.carros[2].AnoFabricacao
        +"<br>Nome: " + object.carros[3].Nome
        +"<br>Ano fabricação: " + object.carros[3].AnoFabricacao
        +"<br>Nome: " + object.carros[4].Nome
        +"<br>Ano fabricação: " + object.carros[4].AnoFabricacao;

document.getElementById("paragrafo").innerHTML = texto;