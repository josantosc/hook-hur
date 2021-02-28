const formatArray = (input) => {
  if (!Array.isArray(input)) return false;

  const data = input.reduce((acc, curr) => {
    return acc + `Alguém disse: ${curr.fofoca} \n\n `;
  }, "");

  return data;
};
const formatPost = (input) => {
  const data = [
    {
      fofoca: input,
    },
  ];
  return data;
};
module.exports = { formatArray, formatPost };
