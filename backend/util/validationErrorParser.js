import createHttpError from "http-errors";

/**
 * Parses through errors thrown by validator (if any exist). Error messages are
 * added to a string and that string is used as the error message for the HTTP
 * error.
 *
 * @param {import('express-validator').Result<import('express-validator').ValidationError>} errors - The validation result provided by express-validator middleware.
 * @returns {void}
 */
const validationErrorParser = (errors) => {
  if (!errors.isEmpty()) {
    let errorString = "";

    // parse through errors returned by the validator and append them to the error string
    for (const error of errors.array()) {
      errorString += String(error.msg) + " ";
    }

    // trim removes the trailing space created in the for loop
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    throw createHttpError(400, errorString.trim());
  }
};

export default validationErrorParser;
