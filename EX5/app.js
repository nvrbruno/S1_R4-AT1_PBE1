const express = require("express");
const app = express();
const PORT = 8081;

app.get("/saudacao?nome/hora", (req, res) => {
  try {
    const { nome } = req.query;
    const { hora } = req.query;

    if (
      hora === undefined ||
      hora === "" ||
      isNaN(hora) ||
    ) {
      return res
        .status(400)
        .send(`Campos obrigatórios não preenchidos ou inválidos!`);
    }

        if (hora > 24){
      return res.status(400).send(`HORA INVALIDA`)
      else if (hora > 18 && 4 da manha){
      return res.status(400).send(`boa noite ${nome}`)
      else
        return res.status(400).send(`bom dia ${nome}`)
    }

  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send(`Erro interno no servidor`);
  }
});