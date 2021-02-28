require("../config/dotenv");
const { V1 } = require("../src/utils/constantes");

const Application = require("../src/index");
const server = Application();

const port = process.env.PORT || 5920;

server.listen(port, () => {
  console.log(`server start in http://localhost:${port}${V1}`);
});
