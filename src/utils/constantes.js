const API_PATH = "/api";
const V1 = `${API_PATH}/v1`;

const INTENTS = {
  EDUCACIONAL: {
    AULAS_8_ANO: "1.0.0.0-8ano-questoes-aula03",
  },
};

const PARAMETERS = {
  QUESTIONS: "respostas",
};

const EVENTS = {
  SHOW: "SHOW",
  RETURN_POST: "RETURN_POST",
};

const ROUTES = { BASE: process.env.BASE };

module.exports = { V1, API_PATH, INTENTS, PARAMETERS, EVENTS, ROUTES };
