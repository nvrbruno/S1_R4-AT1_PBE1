const express = require("express");
const app = express();
const PORT = 8081;

app.get("/ano", (req, res) => {
  try {
    const { numero } = req.query;

    if (numero === undefined || numero === "" || isNaN(numero)) {
      return res
        .status(400)
        .send("Campos obrigatórios não preenchidos ou inválidos!");
    }

    const anoNumero = parseInt(numero);

    if (anoNumero === 0) {
      return res.status(400).send("ANO INVÁLIDO!");
    }

    const ehBissexto = anoNumero % 4 === 0;

    if (ehBissexto) {
      return res.status(200).send(`<h1>O ano ${anoNumero} é bissexto</h1>`);
    } else {
      return res.status(200).send(`<h1>O ano ${anoNumero} NÃO é bissexto</h1>`);
    }
  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send("Erro interno no servidor");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
