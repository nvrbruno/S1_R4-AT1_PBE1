const express = require("express");
const app = express();
const PORT = 8081;

app.get("/imc", (req, res) => {
  try {
    const { altura } = req.query;
    const { peso } = req.query;
    if (
      peso === undefined ||
      altura === undefined ||
      peso === "" ||
      altura === "" ||
      isNaN(peso) ||
      isNaN(altura) ||
      peso >= 0 || altura >= 0
    
      return res
        .status(400)
        .send(`Campos obrigatórios não preenchidos ou inválidos!`);
    )

    const calculoImc = parseFloat(altura) / parseFloat(peso);

switch (calculoImc) {
    case calculoImc < 18,5:
            res.status(200).send(`<h1>Seu imc é ${calculoImc}, sua classificação é "magreza"</h1>`);
        break;

    default:
        break;

            case calculoImc > 18,5 && > 24,9:
            res.status(200).send(`<h1>Seu imc é ${calculoImc}, sua classificação é "normal"</h1>`);
        break;

                    case calculoImc > 25 && > 29,9:
            res.status(200).send(`<h1>Seu imc é ${calculoImc}, sua classificação é "sobrepeso"</h1>`);
        break;

                            case calculoImc > 30 && > 39,9:
            res.status(200).send(`<h1>Seu imc é ${calculoImc}, sua classificação é "obesidade"</h1>`);
        break;
                                    case calculoImc > 40 
            res.status(200).send(`<h1>Seu imc é ${calculoImc}, sua classificação é "obsesidade grave"</h1>`);
        break;
}

  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send(`Erro interno no servidor`);
  }
});