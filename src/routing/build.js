const { V1 } = require("../utils/constantes");

const routersCase = (app, router) => {
  app.use(router);
};

const endpointsCase = (app, endpoints) => {
  try {
    const keysEndpoints = Object.keys(endpoints);
    keysEndpoints.forEach((current) => {
      const v1path = `${V1}/${current}`;
      const route = endpoints[current];

      app.all(v1path, ...route);
    });
  } catch (err) {
    console.log(err);
  }
};

const fakeInterface = (fn) => ({
  routingJson: fn,
  whenEndpoints: fn,
  inApplication: fn,
});

const routing = (app) => (routerOrEndpoints) => {
  const methods = fakeInterface(routing(app));

  const isRouter = typeof routerOrEndpoints === "function";
  if (isRouter) {
    routersCase(app, routerOrEndpoints);
    return methods;
  }

  const isEndpoints = typeof routerOrEndpoints === "object";
  if (isEndpoints) {
    endpointsCase(app, routerOrEndpoints);
    return methods;
  }
  return app;
};

const useIn = (app) => ({
  routingJson: routing(app),
});
module.exports = { useIn };
