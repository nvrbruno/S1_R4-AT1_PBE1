const express = require("express");
const app = express();
const PORT = 8081;

app.get("/soma/:primeiroNumero/:segundoNumero", (req, res) => {
  try {
    const { primeiroNumero, segundoNumero } = req.params;

    if (
      primeiroNumero === undefined ||
      segundoNumero === undefined ||
      primeiroNumero === "" ||
      segundoNumero === "" ||
      isNaN(primeiroNumero) ||
      isNaN(segundoNumero)
    ) {
      return res
        .status(400)
        .send(`Campos obrigatórios não preenchidos ou inválidos!`);
    }

    const soma = parseFloat(primeiroNumero) + parseFloat(segundoNumero);

    res.status(200).send(`<h1>${soma}</h1>`);
  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send(`Erro interno no servidor`);
  }
});

app.get("/sub/:primeiroNumero/:segundoNumero", (req, res) => {
  try {
    const { primeiroNumero, segundoNumero } = req.params;

    if (
      primeiroNumero === undefined ||
      segundoNumero === undefined ||
      primeiroNumero === "" ||
      segundoNumero === "" ||
      isNaN(primeiroNumero) ||
      isNaN(segundoNumero)
    ) {
      return res
        .status(400)
        .send(`Campos obrigatórios não preenchidos ou inválidos!`);
    }

    const sub = parseFloat(primeiroNumero) - parseFloat(segundoNumero);

    res.status(200).send(`<h1>${sub}</h1>`);
  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send(`Erro interno no servidor`);
  }
});

app.get("/mult/:primeiroNumero/:segundoNumero", (req, res) => {
  try {
    const { primeiroNumero, segundoNumero } = req.params;

    if (
      primeiroNumero === undefined ||
      segundoNumero === undefined ||
      primeiroNumero === "" ||
      segundoNumero === "" ||
      isNaN(primeiroNumero) ||
      isNaN(segundoNumero)
    ) {
      return res
        .status(400)
        .send(`Campos obrigatórios não preenchidos ou inválidos!`);
    }

    const mult = parseFloat(primeiroNumero) * parseFloat(segundoNumero);

    res.status(200).send(`<h1>${mult}</h1>`);
  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send(`Erro interno no servidor`);
  }
});

app.get("/div/:primeiroNumero/:segundoNumero", (req, res) => {
  try {
    const { primeiroNumero, segundoNumero } = req.params;

    if (
      primeiroNumero === undefined ||
      segundoNumero === undefined ||
      primeiroNumero === "" ||
      segundoNumero === "" ||
      isNaN(primeiroNumero) ||
      isNaN(segundoNumero)
    ) {
      return res
        .status(400)
        .send(`Campos obrigatórios não preenchidos ou inválidos!`);
    }

    if (segundoNumero == 0){
      return res.status(400).send(`IMPOSSIVEL DIVIDIR POR ZERO!!!!`)
    }
    const div = parseFloat(primeiroNumero) / parseFloat(segundoNumero);

    res.status(200).send(`<h1>${div}</h1>`);
  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send(`Erro interno no servidor`);
  }
});

// inicializa o servidor e deve ser a última linha !!
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
