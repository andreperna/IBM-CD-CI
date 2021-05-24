const express = require("express");
const app = express();
const port = 3000;

//---------- ROTAS
const handleRoot = (req, res) => {
  res.send("Teste IBM - commit");
};
app.get("/", handleRoot);

//---------- INICIA SERVIDOR
const handleServerListen = () => console.log(`Servidor rodando na porta: ${port}`);
app.listen(port, handleServerListen);
