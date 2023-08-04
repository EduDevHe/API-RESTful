const express = require("express");

const app = express();

const data = require("./data.json");

// Verbos HTTP
// GET: Recebe dados de um Resource.
// POS: Envia dados ou informações para serem processados por um Resource.
// PUT: Atualiza dados de um Resource.
// DELETE: Deleta um Resource.

app.get("clientes/", (req, res) => {
  res.json(data);
});

app.get("clientes/:id", (req, res) => {
  const { id } = req.params;
  const client = data.find((cli) => cli.id == id);

  if (!client) return res.status(204).json();

  res.json(client);
});

app.post("clientes/", (req, res) => {
  const { name, email } = req.body;

  res.json({ name, email });
});

app.put("clientes/:id", (req, res) => {
  const { id } = req.params;
  const client = data.find((cli) => cli.id == id);

  if (!client) return res.status(204).json();

  const { name } = req.body;
  client.name = name;

  res.json(client);
});

app.delete("clientes/:id", (req, res) => {
  const { id } = req.params;
  const clientsFiltered = data.filter((cli) => (cli.id = id));
  res.json(clientsFiltered);
});

app.listen(3000, () => {
  console.log("Server is running");
});
