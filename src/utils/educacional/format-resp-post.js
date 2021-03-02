const formatArray = (input) => {
  if (!Array.isArray(input)) return false;

  const data = input.reduce((acc, curr) => {
    return acc + `Q: ${curr.questao}  R: ${curr.resposta}\n\n`;
  }, "");

  return data;
};

const mountResponse = (input) => {
  const mount = input.map((el, i) => {
    const mount = `Q${i + 1}: ${el}`;
    return mount;
  });

  const parserStrint = mount.toString();
  const response = parserStrint.split(",").join("\n");
  return response;
};

const buildTemplate = (input, data) => {
  const result = input.map((el, i) => {
    const result = el.resposta === data[i] ? "Acertou" : "Errou";
    return result;
  });
  return result;
};

module.exports = { formatArray, buildTemplate, mountResponse };
