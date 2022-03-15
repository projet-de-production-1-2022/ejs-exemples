import apiController from "./apiController.js";

const renderExempleSimple = (req, res) => {
  res.render("exempleSimple.ejs");
};

const renderExempleAvecComposant = (req, res) => {
  res.render("exempleComponent.ejs");
};

const renderExemplePassageDeVariableSimple = (req, res) => {
  res.render("exempleVariable.ejs", {
    nom: "Dupont",
    prenom: "Jean",
    personne: { age: 34 },
  });
};

const renderExempleCondition = (req, res) => {
  res.render("exempleCondition.ejs", {
    loaded: false,
  });
};

const renderExempleBoucle = (req, res) => {
  res.render("exempleBoucle.ejs", {
    elements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  });
};

const renderExempleFormulaire = (req, res) => {
  res.render("exempleFormulaire.ejs");
};

const renderExempleAsync = async (req, res) => {
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;

  const response = await apiController.fetchData(firstName, lastName);

  res.render("exempleAsync.ejs", { response });
};

export default {
  renderExempleSimple,
  renderExempleAvecComposant,
  renderExemplePassageDeVariableSimple,
  renderExempleCondition,
  renderExempleBoucle,
  renderExempleFormulaire,
  renderExempleAsync,
};
