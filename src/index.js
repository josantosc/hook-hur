const express = require("express");

const routes = require("./routes");
const { useIn } = require("./routing/build");
const { createJsonRouter } = require("./routing/setup");

const Application = () => {
  const app = express();
  const jRouter = createJsonRouter();
  const appWithRouter = useIn(app)
    .routingJson(jRouter)
    .whenEndpoints(routes)
    .inApplication();

  return appWithRouter;
};

module.exports = Application;
