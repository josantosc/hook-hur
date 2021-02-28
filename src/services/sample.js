const { apiSample } = require("./apis");
const { EVENTS, PARAMETERS, ROTA } = require("../utils/constantes");
const { buildEvent, extractParameter } = require("../utils/intents");
const { formatArray, formatPost } = require("../utils/sample/format-resp-post");

const getSample = async (req, res) => {
  const { data } = await apiSample.get(`${ROTA.ROTA}`);

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
  console.log("🚀 ~ file: sample.js ~ line 23 ~ postSample ~ date", date);

  const data = [
    {
      fofoca: params,
      date: date,
    },
  ];

  //const data = formatPost(params);

  await apiSample.post(`${ROTA.ROTA}`, data);

  return buildEvent(EVENTS.RETURN_POST, {});
};

module.exports = { getSample, postSample };
