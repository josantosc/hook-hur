const { apiSample } = require("./apis");
const { EVENTS, PARAMETERS, ROTA } = require("../utils/constantes");
const { buildEvent, extractParameter } = require("../utils/intents");
const { formatArray, formatPost } = require("../utils/sample/format-resp-post");

const getSample = async (req, res) => {
  const { data } = await apiSample.get(`${ROTA.FFOCA}`);

  if (!data) return buildEvent(EVENTS.INVALID_TITLE);

  const response = formatArray(data);

  const paramtrs = {
    [PARAMETERS.FOFOCA]: response,
  };

  return buildEvent(EVENTS.SHOW, paramtrs);
};

const postSample = async (req, res) => {
  const params = extractParameter(req.body, PARAMETERS.FOFOCA);
  const date = new Date();
  const data = [
    {
      fofoca: params,
      date: date,
    },
  ];

  await apiSample.post(`${ROTA.FFOCA}`, data);

  return buildEvent(EVENTS.RETURN_POST, {});
};

module.exports = { getSample, postSample };
