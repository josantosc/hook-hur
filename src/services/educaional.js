const { apiEducacional } = require("./apis");
const { EVENTS, PARAMETERS, ROUTES } = require("../utils/constantes");
const { buildEvent } = require("../utils/intents");
const {
  buildTemplate,
  mountResponse,
} = require("../utils/educacional/format-resp-post");

const getQuestions = async (req, res) => {
  const params = req.body.queryResult.parameters;

  const responseQuestions = Object.values(params);

  const { data } = await apiEducacional.get(`${ROUTES.BASE}`);

  const resultQuestions = buildTemplate(data, responseQuestions);

  const formarToDialogflow = mountResponse(resultQuestions);

  const paramtrs = {
    [PARAMETERS.QUESTIONS]: formarToDialogflow,
  };

  return buildEvent(EVENTS.SHOW, paramtrs);
};

module.exports = { getQuestions };
