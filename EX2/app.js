const express = require("express");
const app = express();
const PORT = 8081;

app.get("/calculadora?operacao", (req, res) => {
  try {
    const {
      primeiroNumero,
      segundoNumero,
      adicao,
      subtracao,
      divisao,
      operacao,
      multiplicacao,
    } = req.query;

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
    const sub = parseFloat(primeiroNumero) - parseFloat(segundoNumero);
    const mult = parseFloat(primeiroNumero) / parseFloat(segundoNumero);
    const div = parseFloat(primeiroNumero) * parseFloat(segundoNumero);

    switch (operacao) {
      case adicao:
        res.status(200).send(`<h1>${soma}</h1>`);
        break;

      case subtracao:
        res.status(200).send(`<h1>${sub}</h1>`);
        break;

      case multiplicacao:
        res.status(200).send(`<h1>${mult}</h1>`);
        break;

      case divisao:
        if (segundoNumero == 0) {
          return res.status(400).send(`IMPOSSIVEL DIVIDIR POR ZERO!!!!`);
        }
        res.status(200).send(`<h1>${div}</h1>`);
        break;
    }

    res.status(200).send(`<h1>${soma}</h1>`);
  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send(`Erro interno no servidor`);
  }
});

// inicializa o servidor e deve ser a última linha !!
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
