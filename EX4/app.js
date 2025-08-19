const express = require("express");
const app = express();
const PORT = 8081;

app.get("/soma?ano", (req, res) => {
  try {
    const { ano } = req.query;

    if (
      primeiroNumero === undefined ||
      primeiroNumero === "" ||
      isNaN(primeiroNumero) ||
    ) {
      return res
        .status(400)
        .send(`Campos obrigatórios não preenchidos ou inválidos!`);
    }

        if (ano == 0){
      return res.status(400).send(`ANO INVALIDO!`)
    }

    const verificacao = ""

    if (verificacao) {
        ano = parseFloat % 4
        res.status(200).send(`<h1>O ${ano} é bissexto </h1>`);
    }



  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send(`Erro interno no servidor`);
  }
});