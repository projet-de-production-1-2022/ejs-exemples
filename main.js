import express from "express";
import exempleController from "./controllers/exempleController.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", exempleController.renderExempleSimple);
app.get("/1", exempleController.renderExempleAvecComposant);
app.get("/2", exempleController.renderExemplePassageDeVariableSimple);
app.get("/3", exempleController.renderExempleCondition);
app.get("/4", exempleController.renderExempleBoucle);
app.get("/5", exempleController.renderExempleFormulaire);
app.get("/6", exempleController.renderExempleAsync);

app.listen(port, () => {
  console.log("L'app roule sur le port " + port);
});
