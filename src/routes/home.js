const home = (req, res) => {
  const response = {
    status: 200,
    message: "Sample Webhook",
  };
  return res.status(200).send(response);
};

module.exports = [home];
