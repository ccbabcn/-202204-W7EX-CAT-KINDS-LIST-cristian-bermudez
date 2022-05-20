const debug = require("debug")("kinds:server:kindsController");
const chalk = require("chalk");
const Kind = require("../../database/models/Kind");

const listKinds = async (req, res, next) => {
  try {
    debug(chalk.green("Received request to get kinds list"));
    const kinds = await Kind.find();
    res.status(200).json({ kinds });
  } catch (error) {
    debug(chalk.red("Received a bad request to get kinds list"));
    error.code = 400;
    error.errorMessage = "Bad request";

    next(error);
  }
};

module.exports = listKinds;
