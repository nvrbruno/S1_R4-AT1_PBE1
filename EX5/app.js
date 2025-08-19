const express = require("express");
const app = express();
const PORT = 8081;

app.get("/saudacao/nome?hora", (req, res) => {
  try {
    const { nome, hora } = req.query;

    if (!nome || !hora || isNaN(hora)) {
      return res
        .status(400)
        .send("Campos obrigatórios não preenchidos ou inválidos!");
    }

    const horaNumero = parseInt(hora);

    if (horaNumero < 0 || horaNumero > 23) {
      return res.status(400).send("HORA INVÁLIDA!");
    }

    let saudacao = "";

    if (horaNumero >= 6 && horaNumero < 12) {
      saudacao = `Bom dia, ${nome}!`;
    } else if (horaNumero >= 12 && horaNumero < 18) {
      saudacao = `Boa tarde, ${nome}!`;
    } else {
      saudacao = `Boa noite, ${nome}!`;
    }

    return res.status(200).send(`<h1>${saudacao}</h1>`);
  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send("Erro interno no servidor");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
