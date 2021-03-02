const {
  mappedIntents,
} = require("../utils/educacional/map-intent-educacional");
const { buildExtractor, buildResolver } = require("../utils/intents");

const route = async (req, res) => {
  const { queryResult } = req.body;
  const intent = queryResult.intent.displayName;

  const extractResolverWith = buildExtractor(mappedIntents);

  const extractedResolver = extractResolverWith(intent);
  const resolver = buildResolver(extractedResolver);

  const data = await resolver(req, res);

  return res.status(200).send(data);
};

module.exports = [route];
