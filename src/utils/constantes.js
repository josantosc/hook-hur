const API_PATH = "/api";
const V1 = `${API_PATH}/v1`;

const INTENTS = {
  SAMPLE: {
    INTENT_GET_FOFOCA: "2.0.0.0.[hook].get-fofoca",
    INTENT_POST_FOFOCA: "2.0.0.2.[hook].post-fofoca",
  },
};

const PARAMETERS = {
  FOFOCA: "fofoca",
};

const EVENTS = {
  SHOW: "SHOW_FOFOCAS",
  RETURN_POST: "RETURN_POST",
};

const ROTA = { FFOCA: process.env.FFOCA };

module.exports = { V1, API_PATH, INTENTS, PARAMETERS, EVENTS, ROTA };
