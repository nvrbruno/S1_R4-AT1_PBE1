const express = require("express");
const app = express();
const PORT = 8081;

app.get("/imc?peso&altura", (req, res) => {
  try {
    const { altura, peso } = req.query;

    if (
      peso === undefined ||
      altura === undefined ||
      peso === "" ||
      altura === "" ||
      isNaN(peso) ||
      isNaN(altura) ||
      peso <= 0 ||
      altura <= 0
    ) {
      return res
        .status(400)
        .send("Campos obrigatórios não preenchidos ou inválidos!");
    }

    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);
    const calculoImc = pesoNum / (alturaNum * alturaNum);

    let classificacao = "";

    if (calculoImc < 18.5) {
      classificacao = "magreza";
    } else if (calculoImc >= 18.5 && calculoImc <= 24.9) {
      classificacao = "normal";
    } else if (calculoImc >= 25 && calculoImc <= 29.9) {
      classificacao = "sobrepeso";
    } else if (calculoImc >= 30 && calculoImc <= 39.9) {
      classificacao = "obesidade";
    } else if (calculoImc >= 40) {
      classificacao = "obesidade grave";
    }

    return res
      .status(200)
      .send(
        `<h1>Seu IMC é ${calculoImc.toFixed(
          2
        )}, sua classificação é "${classificacao}"</h1>`
      );
  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send("Erro interno no servidor");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
