const buildEvent = (name, parameters = {}) => ({
  followupEventInput: { name, languageCode: "pt-br", parameters },
});

const buildResolver = (resolver) => async (req, res) => {
  try {
    return await resolver(req, res);
  } catch (err) {
    return {};
  }
};

const buildExtractor = (map) => (intent) => map && map[intent];

const extractParameter = (body, parameter) => {
  const queryResult = body && body.queryResult;
  const parameters = queryResult && queryResult.parameters;
  const param = parameters && parameters[parameter];

  return param;
};

const extractParameterOutputContext = (body, parameter) => {
  const queryResult = body && body.queryResult;

  const outputContexts = queryResult && queryResult.outputContexts[0];
  const parameters = outputContexts && outputContexts.parameters;
  const param = parameters && parameters[parameter];

  return param;
};

const extractSession = (req) => {
  const body = req && req.body;
  const session = body && body.session;

  return session || undefined;
};

const generateOutputContexts = ({ session, parameters, contextName }) => {
  const context = buildContext({ session, contextName, parameters });

  return { outputContexts: [context] };
};

const extractIntent = (input) => {
  const intent = input && input.intent;
  return intent.displayName;
};
module.exports = {
  buildEvent,
  buildResolver,
  buildExtractor,
  extractParameter,
  extractParameterOutputContext,
  extractSession,
  generateOutputContexts,
  extractIntent,
};
