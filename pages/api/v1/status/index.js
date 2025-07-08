import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sun;"); //as é o que define o nome da query e o que susede ela é o nome em questão
  console.log(result.rows); //result é uma var const é .rows e um metodo que determina qual a informação está sendo procurada
  response.status(200).json({ chave: "vc é uma pessoa acima da média" });
}

export default status;
